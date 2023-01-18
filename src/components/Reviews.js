import { useEffect, useState } from "react";
import { getReviews } from "../Utils";
import { Link } from "react-router-dom";
import styles from "../styles/Reviews.module.css";
import ReviewCard from "./ReviewCard";

export default function Reviews({ setReviewId, isActive, setIsActive }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) => setReviews(data));
  }, []);

  function handleClick(id) {
    setReviewId(id);
  }

  return (
    <div>
      
      <ul id="reviews-list">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.review_id}
              {...review}
              handleClick={handleClick}
              setReviewId={setReviewId}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          );
        })}
      </ul>
    </div>
  );
}
