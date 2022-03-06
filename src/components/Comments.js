import React from "react";
import '../css/Comments.css'

export default function Comments(props) {

  function toCommentList(comments) {
    const spotsList = comments.map((comment) =>
      <div className="comment" key={comment.id}>
        <div className="comment-header">
          <div className="author-container">        
            {comment.authorName} <br/>
          </div>
          <div className="date-container">
            {new Date(comment.creationDate).toLocaleDateString("en-US")} <br/>
          </div>
        </div>
        <div className="text-container">
            {comment.text} <br/>
        </div>
      </div>
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
