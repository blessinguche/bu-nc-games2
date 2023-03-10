import { getReviews, getReviewsByCategories } from "../Utils";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";

export default function Category({
  category,
  setReviewId,
  isActive,
  setIsActive,
}) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsByCategories(category).then((data) => setReviews(data));
  }, [category]);
  
  function handleClick(id) {
    setReviewId(id);
  }

  return (
    <div>
      <h2>{category}</h2>
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
