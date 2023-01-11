import styles from "../styles/ReviewCard.module.css";
import { Link } from "react-router-dom";

export default function ReviewCard(review) {
  const linkUrl = `/review/${review.review_id}`;
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
      <p> </p>
    </li>
  );
}
