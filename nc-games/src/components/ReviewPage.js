import { useEffect, useState } from "react";
import styles from "../styles/ReviewPage.module.css";
import { getReviewsById, getCommentsByReviewId } from "../Utils";
import CommentCard from "./CommentCard";
import { addVotesByReviewId, removeVotesByReviewId } from "../Utils";

export default function Review({ reviewId, setCommentId }) {
  const [review, setReview] = useState([]);
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(review.votes)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    getReviewsById(reviewId).then((data) => setReview(data));
    getCommentsByReviewId(reviewId).then((data) => setComments(data));
    getReviewsById(reviewId).then((data) => setVotes(data.votes))
  }, [reviewId]);


  function handleVoteClick(id) {
    if (!isActive) {
      addVotesByReviewId(id).then((newVote) => setVotes(newVote))
      setIsActive(true)
    } else {
      removeVotesByReviewId(id).then((newVote) => setVotes(newVote))
      setIsActive(false)
    }
  }
  
  return (
    <div>
      <h2>{review.title}</h2>
      <p>
        <img alt="picture" src={review.review_img_url} />
        {review.owner}
      </p>
      <p>{review.review_body}</p>
      <p>no. of comments: {review.comment_count}</p>
      <p onClick={() => handleVoteClick(review.review_id)}>Votes: {votes} <span className={styles.vote}>Vote</span></p>
      <h3>Comments:</h3>
      <ul id="comments-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} setCommentId={setCommentId} />;
        })}
      </ul>
    </div>
  );
}
