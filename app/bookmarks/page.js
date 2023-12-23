'use client'
import FolderCard from "@/components/cards/FolderCard";
import HubCard from "@/components/cards/HubCard";
import PostCard from "@/components/cards/PostCard";
import PostCardBookmarks from "@/components/cards/PostCardBookmarks";
import { folder, hub, post } from "@/constants";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
    const array = [post, post, post, post, post, post, post, post, post, post, post, post, post];
    const array1 = [post];
    const hubList = [hub, hub, hub, hub, hub, hub, hub, hub, hub, hub, hub, hub];
    const folders = [folder, folder, folder, folder, folder, folder, folder];

    const [folderIsOpen, setFolder] = useState(true);
    const [currentFolder, setCurrent] = useState('0');
    const [postsFolder, setPost] = useState(null);
    const [bookmarkedPosts, setBookmarkedPosts] = useState(null);
    const [readlaterPosts, setReadlaterPosts] = useState(null);

    const { data: session } = useSession();


    const hubsSlideLeft = () => {
        var slider = document.getElementById('hubs-slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }

    const hubsSlideRight = () => {
        var slider = document.getElementById('hubs-slider')
        slider.scrollLeft = slider.scrollLeft + 300
    }

    const newFunc3 = msg => {
        setCurrent(msg);
    }

    const fetchBookmarkedPosts = async () => {
        const res = await fetch("http://localhost:8080/api/bookmark/"+session?.user.id, {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + session?.user.token,
                "Content-Type": "application/json",
            },
        });

        const response = await res.json();
        console.log(response);
        setBookmarkedPosts(response);
    }

    const fetchReadlater = async () => {
        const res = await fetch("http://localhost:8080/api/readlater/"+session?.user.id, {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + session?.user.token,
                "Content-Type": "application/json",
            },
        });

        const response = await res.json();
        console.log(response);
        setReadlaterPosts(response);
    }

    useEffect(() => {fetchBookmarkedPosts()}, [])
    useEffect(() => {fetchReadlater()}, [])

    return (
        <div>
            <div>
                <div className="">
                    <h1 className="mx-10 mt-7 text-2xl font-bold">Читать позже</h1>
                    <div className="flex items-center mx-3">
                        <button className="text-7xl hidden sm:block" onClick={hubsSlideLeft}>&#8249;</button>
                        <div className="flex space-x-4 mx-1 sm:overflow-x-hidden overflow-x-auto snap-x scroll-smooth" id="hubs-slider">
                            {readlaterPosts?.map((post) => (
                                <div className="snap-start">
                                    <PostCardBookmarks className="" post={post}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className="text-7xl hidden sm:block" onClick={hubsSlideRight}>&#8250;</button>
                    </div>
                </div>
            </div>
            <div className="flex jutify-start mx-10 mt-7 space-x-3 pb-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                </svg>
                <h1 className="">Закладки {currentFolder.title}</h1>
                <button onClick={() => { setCurrent(''); setFolder(!folderIsOpen) }} className="text-7xl">&#8249;</button>
            </div>
            {folderIsOpen ? (
                <div>
                    <div className="mx-10">
                        <div className="space-y-2">
                            {folders.map((folder) => (
                                <div className="space-y-2">
                                    <FolderCard folder={folder} stateFunc={folder1 => { setCurrent(folder1); setFolder(!folderIsOpen) }} stateFunc2={newFunc3}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            ) : (
                <div className="mx-3">

                    <div className="mx-5 space-y-5">
                        {bookmarkedPosts?.map((post) => (
                            <div className="space-y-2 mx-3">
                                <Link href={'/post/' + post.articleId}>{post?.articleName}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}