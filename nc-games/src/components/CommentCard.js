import styles from "../styles/CommentCard.module.css";
import { Link } from "react-router-dom";

export default function CommentCard(comment) {
  return (
    <li>
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <p>{comment.votes}</p>
      <p> </p>
    </li>
  );
}
