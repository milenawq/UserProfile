import React, { useState } from "react";
import "./LikeButton.css";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    function handleLike() {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
        } else {
            setLikes(likes + 1);
            setLiked(true);
        }
    }

    return (
        <button className="like-button" onClick={handleLike}>
            {liked ? "❤️" : "🤍"} {likes}
        </button>
    );
}

export default LikeButton;
