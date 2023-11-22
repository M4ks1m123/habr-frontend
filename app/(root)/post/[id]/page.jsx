'use client'

import { useEffect, useState } from "react";

export default function page({ params: { id } }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('http://dummyjson.com/products/1')
            .then((res) => res.json())
            .then((post_data) => {
                setPost(post_data)
            });
    }, []);

    return (
        <article>
            <h1>{post?.title}</h1>
        </article>
    )
}