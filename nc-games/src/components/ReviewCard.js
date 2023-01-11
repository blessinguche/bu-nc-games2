import styles from "../styles/ReviewCard.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addVotesByReviewId, removeVotesByReviewId } from "../Utils";

export default function ReviewCard(review) {
  const linkUrl = `/review/${review.review_id}`;
  const [votes, setVotes] = useState(review.votes)
  const [isActive, setIsActive] = useState(false)
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
    <li>
      <Link to={`/reviews/:review_id=${review.review_id}`}>
        <h3 onClick={() => review.handleClick(review.review_id)}>
          {review.title}
        </h3>
      </Link>
      <p>
        <img alt="picture" src={review.review_img_url} />
        {review.owner}
      </p>
      <p>{review.review_body}</p>
      <p onClick={() => handleVoteClick(review.review_id)}>Votes: {votes} <span className={styles.vote}>Vote</span></p>
      <p> </p>
    </li>
  );
}
