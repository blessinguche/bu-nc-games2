import { useEffect, useState } from "react";
import { getReviewsById, getCommentsByReviewId } from "../Utils";
import CommentCard from "./CommentCard";

export default function Review({ reviewId }) {
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getReviewsById(reviewId).then((data) => setReview(data));
    getCommentsByReviewId(reviewId).then((data) => setComments(data));
  }, [reviewId]);
  console.log(comments);
  return (
    <div>
      <h2>{review.title}</h2>
      <p>
        <img alt="picture" src={review.review_img_url} />
        {review.owner}
      </p>
      <p>{review.review_body}</p>
      <p>{review.comment_count}</p>
      <div>
        <ul id="comments-list">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} {...comment} />;
          })}
        </ul>
      </div>
    </div>
  );
}
