// import styles from "../styles/ReviewCard.module.css";
import { Link } from "react-router-dom";

export default function CommentCard(comment) {
  return (
    <li>
      <h3>{comment.author}</h3>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <p> </p>
    </li>
  );
}
