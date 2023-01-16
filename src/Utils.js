import axios from "axios";

const api = axios.create({
  baseURL: "https://blessing-games.onrender.com/api",
});

export async function getReviews(category = "none") {
  const { data } = await api.get("/reviews");
  if (category === "none") {
    const reviews = data.reviews;
    return reviews;
  } else {
    const reviews = data.reviews.filter((review) => review.category === category)
    return reviews;
  }
};
export async function getReviewsById(reviewId) {
  const getUrl = `/reviews/${reviewId}`
  const { data } = await api.get(getUrl);
  const review = data.review;
  return review;
};

export async function getCommentsByReviewId(reviewId) {
  const getUrl = `/reviews/${reviewId}/comments`
  const { data } = await api.get(getUrl);
  const comments = data.comments;
  return comments;
};

export async function addVotesByReviewId(reviewId) {
  const patchUrl = `/reviews/${reviewId}`
  const { data } = await api.patch(patchUrl, {"inc_votes": 1});
  const votes = data.review.votes;
  return votes;
};
export async function removeVotesByReviewId(reviewId) {
  const patchUrl = `/reviews/${reviewId}`
  const { data } = await api.patch(patchUrl, {"inc_votes": -1});
  const votes = data.review.votes;
  return votes;
};

export async function postComment(username, review_id, body) {
  try {
    const res = await api.post(`/reviews/${review_id}/comments`, {
      username: username,
      body: body
    });
    console.log(res.data)
    if (res.data.comment === undefined) {
      alert('No review');
    }
    alert(res.data.comment.author + ' added to a comment!');
  } catch (err) {
    alert(err.response.status);
  }
};

export async function getCategories() {
  const { data } = await api.get("/categories");
  const categories = data.categories;
  return categories;
};
// export async function getReviewsByCategories() {
//   const { data } = await api.get("/reviews");
//   const reviews = data.reviews;
//   return reviews;
// };

export async function getUserItems(username) {
  try {
    const { data } = await api.get(`/users/${username}/orders`);
    return data.items;
  } catch (err) {
    alert(err.response.status);
  }
}


