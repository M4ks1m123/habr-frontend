'use client'
import PostCard from "@/components/cards/PostCard";
import { useEffect } from "react"
import { post } from "@/constants/index.js"
import TopbarPosts from "@/components/shared/TopbarPosts";
import Link from "next/link";
import Image from "next/image";

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

    function createMarkup() {
        return {__html: '<div>Content</div>'};
      }
      

    return (

        <div>
            <arcticle>
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

            <p>{id}</p>
        </div>
    )
}