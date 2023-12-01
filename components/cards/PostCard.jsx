'use client'
import Link from "next/link";
import { post } from '@/constants/index';
import Image from "next/image";
import { useState } from "react";

function PostCard({post}) {
    const [isLiked, setLiked] = useState(false);


    return (
        <arcticle>
            <div className="border-2 border-slate-300 rounded-lg shadow-md p-3 mt-3">
                <ul className="space-y-2">
                    <div className="flex items-end space-x-1">
                        <li>
                            <Link href={'/account/' + post?.authorId}>
                                <Image src="/assets/profile.svg" width={30} height={30}></Image>
                            </Link>
                        </li>
                        <li>{post?.username}</li>
                    </div>
                    <li className="text-center sm:text-left"><Link className='text-2xl' href={'/post/' + post?.id}>{post?.title}</Link></li>

                    <div className="flex space-x-1">
                        {/*props.post.badges.map((badge) => (
                            <li className="px-1 border rounded-lg border-slate-400">{badge}</li>))*/}
                    </div>
                    <div className="flex justify-end">
                        <button onClick={() => setLiked(!isLiked)}>
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