import React from "react";
import PostCard from "./PostCard";

function PostList({ posts }) {
    return (
        <div className="post-list">
            <h2>Мої пости</h2>

            {posts.map(post => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    text={post.text}
                    image={post.image}
                />
            ))}
        </div>
    );
}

export default PostList;
