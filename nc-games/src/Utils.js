import axios from "axios";

const api = axios.create({
  baseURL: "https://blessing-games.onrender.com/api",
});

export async function getReviews() {
  const { data } = await api.get("/reviews");
  const reviews = data.reviews;
  return reviews;
};
export async function getReviewsById(reviewId) {
  let getUrl = `/reviews/${reviewId}`
  const { data } = await api.get(getUrl);
  const review = data.review;
  return review;
};

export async function getCommentsByReviewId(reviewId) {
  let getUrl = `/reviews/${reviewId}/comments`
  const { data } = await api.get(getUrl);
  const comments = data.comments;
  return comments;
};

export async function addVotesByReviewId(reviewId) {
  let patchUrl = `/reviews/${reviewId}`
  const { data } = await api.patch(patchUrl, {"inc_votes": 1});
  const votes = data.review.votes;
  return votes;
};
export async function removeVotesByReviewId(reviewId) {
  let patchUrl = `/reviews/${reviewId}`
  const { data } = await api.patch(patchUrl, {"inc_votes": -1});
  const votes = data.review.votes;
  return votes;
};

export async function postItem(username, id) {
  try {
    const res = await api.post(`/users/${username}/orders`, {
      item_id: id
    });
    if (!res.data.items.length) {
      alert('Someone in the cohort has deleted all the bloomin\' items!!!');
    }
    alert(res.data.item.item_name + ' added to basket!');
  } catch (err) {
    alert(err.response.status);
  }
};

export async function getUserItems(username) {
  try {
    const { data } = await api.get(`/users/${username}/orders`);
    return data.items;
  } catch (err) {
    alert(err.response.status);
  }
}


