import React from "react";

export default function SpotComments(props) {

  function toCommentList(comments) {
    const spotsList = comments.map((comment) =>
      <li key={comment.id}>
        Author: {comment.authorId} <br/>
        Text: {comment.text} <br/>
        Date: {comment.creation_date} <br/>
      </li>
    );

    return (
      <ul>{spotsList}</ul>
    );
  }

  return (
    <div>
      {toCommentList(props.comments)}
    </div>
  );
} 
