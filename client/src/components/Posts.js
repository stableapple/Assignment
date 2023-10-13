import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaComment } from "react-icons/fa";
import Comment from './Comment';
import '../styles.css';

const Posts = ({ name }) => {
  const [post, SetPost] = useState([]);
  const [search, setSearch] = useState("");
  const [commentShow, setCommentShow] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get("http://localhost:3001/posts");
      SetPost(response.data);
    }
    getPost();
  }, []);

  const renderElements = () => {
    if (search === "") {
      return post.map((pos) => {
        return (
          <div className="col-md-3" key={pos.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{pos.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{pos.name}</h6>
                <p className="card-text">{pos.description}</p>
                <button onClick={() => setCommentShow(pos.id)}><FaComment /></button>
                {commentShow === pos.id && <Comment id={pos.id} name={pos.name} user={name}/>}
              </div>
            </div>
          </div>
        );
      });
    }
    return post
      .filter((i) => i.title.includes(search))
      .map((pos) => (
        <div key={pos.id} className="col-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{pos.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{pos.name}</h6>
              <p className="card-text">{pos.description}</p>
              <button onClick={() => setCommentShow(pos.id)}><FaComment /></button>
              {commentShow === pos.id && <Comment id={pos.id} name={pos.name} />}
            </div>
          </div>
        </div>
      ));
  }

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <div className="row">
        {renderElements()}
      </div>
      <Link to="/create" className="btn btn-primary">Create</Link>
    </div>
  );
}

export default Posts;
