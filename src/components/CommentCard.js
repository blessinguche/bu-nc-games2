import styles from "../styles/CommentCard.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CommentCard(comment) {
  
  function handleClick(id){
    comment.setCommentId(id)
  }

  
  return (
    <li >
      <h4 onClick={() => handleClick(comment.comment_id)}>{comment.author}</h4>
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <p></p>
    </li>
  );
}
