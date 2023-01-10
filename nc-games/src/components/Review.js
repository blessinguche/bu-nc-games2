import { useEffect, useState } from "react";
import { getReviewsById } from "../Utils";

export default function Review({ reviewId }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    getReviewsById(reviewId).then((data) => setReview(data));
  }, [reviewId]);

  return (
   <div>
      <h2>{review.title}</h2>
      <p>
        <img alt="picture" src={review.review_img_url} />
        {review.owner}
      </p>
      <p>{review.review_body}</p>
      <p>{review.comment_count}</p>
   </div>
  );
}