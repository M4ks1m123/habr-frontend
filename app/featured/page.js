'use client'

import AuthorCard from "@/components/cards/AuthorCard";
import PostCard from "@/components/cards/PostCard"
import TopbarPosts from "@/components/shared/TopbarPosts"
import { post } from "@/constants"
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Page2() {
    //posts
    //post id -> tags


    //const array = [post, post, post];
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(post);
    }

    const [posts1, setPost1] = useState(null);

    useEffect(() => {
        fetch('http://dummyjson.com/products')
            .then((res) => res.json())
            .then((post_data) => {
                setPost1(post_data)
            });
    }, []);

    console.log(posts1);

    const [posts, setPost] = useState(null);


    let res = undefined;

    const { data: session } = useSession();
    console.log("!!!!", session?.user.token);
    console.log("Bearer " + session?.user.token);


    const fetchUser = async () => {
        const res = await fetch("http://localhost:8080/api/articles", {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + session?.user.token,
                "Content-Type": "application/json",
            },
        });

        const response = await res.json();
        console.log(response);
        setPost(response);
    }

    useEffect(() => {fetchUser()}, [])




    return (
        <div>
            <TopbarPosts />
            <div className="mx-5 space-y-2">
                {/*posts1?.products.map((post) => (
                    <div className="space-y-2">
                        {post?.title}
                    </div>
                ))*/}
            </div>
            <div className="mx-5 space-y-2">
                {posts?.map((post) => (
                    <div className="space-y-2">
                        <PostCard post={post}
                        />
                        {/*posts && JSON.stringify(posts)*/}
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