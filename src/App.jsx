import React from "react";
import UserProfile from "./components/UserProfile";
import PostList from "./components/PostList";

function App() {
    const posts = [
        {
            id: 1,
            title: "Моя подорож",
            date: "10 жовтня 2026",
            text: "Ділюся враженнями від чудової подорожі до моря.",
            image: "/sea.jpg"
        },
        {
            id: 2,
            title: "Моє навчання",
            date: "12 жовтня 2026",
            text: "Сьогодні працювала над своїм проєктом на React.",
            image: "/study.jpg"
        }
    ];

    return (
        <div className="app">
            <UserProfile
                name="Юлія"
                avatar="/imageAvatar.jpg"
                description="Студентка та frontend developer"
            />

            <PostList posts={posts} />
        </div>
    );
}

export default App;
