'use client'
import { useEffect } from "react"
import { post } from "@/constants/index.js"
import TopbarPosts from "@/components/shared/TopbarPosts";
import Post from "@/components/Post";

export default function page({ params: { id } }) {

    function ShowPost(msg) {
        useEffect(() => {
            var logElem = document.querySelector(".log")
            logElem.innerHTML = msg;
        });
    }

    return (

        <div>
            <TopbarPosts />
            <div className="mt-3">
                <Post
                    title={post.title}
                    author={post.author}
                    tags={post.tags}
                    badges={post.badges}
                    content={post.content}
                />
                {ShowPost(post.content)}
                <div className="log"></div>
            </div>
        </div>
    )
}