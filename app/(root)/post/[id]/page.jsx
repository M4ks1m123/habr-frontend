'use client'
import PostCard from "@/components/cards/PostCard";
import { useEffect } from "react"
import { post } from "@/constants/index.js"
import TopbarPosts from "@/components/shared/TopbarPosts";
import Post from "@/components/Post";

export default function page({ params: { id } }) {
    /*const post = {
        id: '1',
        title: 'postTitle',
        likesCount: 10,
        content: '<div><ul><li>Item<li><li>Item<li><li>Item<li></ul> </div>',
        author: 'authorName',
        tags: ('tag1, tag2, tag3'),
    }
    */
    //const Title = post.title;

    const array = [post, post, post];

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