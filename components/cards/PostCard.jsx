'use client'
import Link from "next/link";
import { post } from '@/constants/index';
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";

function PostCard(post) {


    const { data: session } = useSession();
    const [isLiked, setLiked] = useState(false);
    console.log(post.post.author);

    const fetchBookmark = async (bookmarkId) => {
        const res = await fetch("http://localhost:8080/api/bookmark/"+bookmarkId, {
            method: "POST",
            headers: {
                authorization: 'Bearer ' + session?.user.token,
                "Content-Type": "application/json",
            },
        });

        //const response = await res.json();
        console.log(res);
        setLiked(!isLiked);
    }


    return (
        <arcticle>
            <div className="border-2 border-slate-300 rounded-lg shadow-md p-3 mt-3">
                <ul className="space-y-2">
                    <div className="flex items-end space-x-1">
                        <li>
                            <Link href={'/account/' + post.authorId}>
                                <Image src="/assets/profile.svg" width={30} height={30}></Image>
                            </Link>
                        </li>
                        <li>{post.post.author}</li>
                    </div>
                    <li className="text-center sm:text-left">
                        <Link className='text-2xl' href={'/post/' + post.post.articleId}>ArticleTitle</Link></li>

                    <div className="flex space-x-1">
                        {/*post.badges?.map((badge) => (
                            <li className="px-1 border rounded-lg border-slate-400">{badge}</li>))*/

                            <li className="px-1 border rounded-lg border-slate-400">{post.post.hubId}</li>}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex space-x-3">
                            <div className="flex space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                                </svg>
                                <p>{post.post.rating}</p>
                            </div>
                            <div className="flex space-x-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p>{post.post.views}</p>
                            </div>
                        </div>
                        <button onClick={() => fetchBookmark(post.post.articleId)}>
                            {isLiked ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </ul>
            </div>
        </arcticle>
    )

}

export default PostCard;