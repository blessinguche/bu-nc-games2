import { useEffect, useState } from "react";
import { getReviews } from "../Utils";
import { Link } from "react-router-dom";
import styles from "../styles/Reviews.module.css";
import ReviewCard from "./ReviewCard";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [reviewId, setReviewId] = useState([]);

  useEffect(() => {
    getReviews().then((data) => setReviews(data));
  }, []);
  function handleClick(id) {
    // e.preventDefault()
    setReviewId(id)
  }

  console.log(reviews);

  return (
    <ul id="item-list">
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} {...review} handleClick={handleClick} />;
      })}
    </ul>
  );
}
