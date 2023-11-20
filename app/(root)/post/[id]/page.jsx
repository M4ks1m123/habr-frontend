'use client'
import PostCard from "@/components/cards/PostCard";
import { useEffect } from "react"
import { post } from "@/constants/index.js"
import TopbarPosts from "@/components/shared/TopbarPosts";

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
            <div>
                <h1>Post</h1>
                <PostCard post={post}
                />
                <h1>{post.author}</h1>
                <h1>{post.tags}</h1>
                {ShowPost(post.content)}
                <div className="log"></div>
            </div>


            <p>{id}</p>
            <p>{post.id}</p>
        </div>
    )
}