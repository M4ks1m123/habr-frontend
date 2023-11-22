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
        <div>
            <article>
                <h1>{post?.title}</h1>
            </article>
            {/*<arcticle>
                <div className="border-2 border-slate-300 rounded-lg shadow-md p-3 mt-3">
                    <ul className="space-y-2">
                        <div className="flex items-end space-x-1">
                            <li>
                                <Link href={'/account/' + post.authorId}>
                                    <Image src="/assets/profile.svg" width={30} height={30}></Image>
                                </Link>
                            </li>
                            <li>{post.author}</li>
                        </div>
                        <div className="flex space-x-1">
                            {post.badges.map((badge) => (
                                <li className="px-1 border rounded-lg border-slate-400">{badge}</li>))}
                        </div>
                        <li className="text-center">
                            <h1 className='text-2xl sm:text-3xl my-4 mx-4'>{post.title}</h1>
                        </li>
                        <div className='log'>
                        </div>
                        <div dangerouslySetInnerHTML={createMarkup()}></div>
                    </ul>
                </div>
            </arcticle>
                            */}
        </div>
    )
}