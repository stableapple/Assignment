import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles.css'; // Import your CSS

const ShowComment = ({ id }) => {
  const [comments, setComment] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3001/posts/${id}/comments`);
      setComment(response.data);
    }
    getData();

  }, []);

  const renderlist = () => {
    return comments.map((comment, index) => (
      <div key={index} className="comment-container">
        <p className="comment-name">{comment.name}</p>
        <p className="comment-text">{comment.comment}</p>
      </div>
    ));
  };

  return (
    <div>
      {renderlist()}
    </div>
  )
}

export default ShowComment;
