import React from "react";
import "./UserProfile.css";

function UserProfile({name, avatar, description}) {
    return (
        <div className="user-profile">
            <img src={avatar} alt="User avatar" className="avatar"/>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default UserProfile;