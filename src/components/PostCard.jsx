import React from "react";
import "./PostCard.css";
import LikeButton from "./LikeButton";

function PostCard({title, date, text, image}) {
    return (
        <div className="post-card">
            <h3>{title}</h3>
            <p>{text}</p>
            <img src={image} alt="Post image" className="post-image" />
            <LikeButton />
            <p>{date}</p>
        </div>
    )
}

export default PostCard;