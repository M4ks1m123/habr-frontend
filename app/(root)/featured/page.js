'use client'

import AuthorCard from "@/components/cards/AuthorCard";
import PostCard from "@/components/cards/PostCard"
import TopbarPosts from "@/components/shared/TopbarPosts"
import { post } from "@/constants"
import { useEffect, useState } from "react";

export default function Page2() {
    //posts
    //post id -> tags


    //const array = [post, post, post];
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(post);
    }

    const [posts, setPost] = useState(null);

    useEffect(() => {
        fetch('http://dummyjson.com/products')
            .then((res) => res.json())
            .then((post_data) => {
                setPost(post_data)
            });
    }, []);

    console.log(posts);


    return (
        <div>
            <TopbarPosts />
            <div className="mx-5 space-y-2">
                {posts?.products.map((post) => (
                    <div className="space-y-2">
                        {post?.title}
                    </div>
                ))}
            </div>
        </div>
    )
    {/*
        <div>
            <TopbarPosts />
            <div className="mx-5 space-y-2">
                {array.map((post) => (
                    <div className="space-y-2">
                        <PostCard post={post}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
                */}
}