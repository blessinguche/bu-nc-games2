import styles from "../styles/CommentCard.module.css";
import { Link } from "react-router-dom";

export default function CommentCard(comment) {
  function handleClick(id){
    comment.setCommentId(id)
  }
  
  return (
    <li >
      <h4 onClick={() => handleClick(comment.comment_id)}>{comment.author}</h4>
      <p>{comment.body}</p>
      <p >Votes: {comment.votes} <span className={styles.vote}>Vote</span></p>
      <p> </p>
    </li>
  );
}
