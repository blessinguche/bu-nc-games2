import styles from "../styles/ReviewCard.module.css";

export default function ReviewCard(review) {
  return (
    <li>
      <h3 onClick={() => review.handleClick(review.review_id)}>
        {review.title}
      </h3>
      <p>
        <img alt="picture" src={review.review_img_url} />
        {review.owner}
      </p>
      <p>{review.review_body}</p>
      <p> </p>
    </li>
  );
}
