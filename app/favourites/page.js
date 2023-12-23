'use client'
import AuthorCard from "@/components/cards/AuthorCard";
import HubCard from "@/components/cards/HubCard";
import TopbarPosts from "@/components/shared/TopbarPosts";
import { author, hub, post } from "@/constants";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


export default function Page() {
    //user id -> posts -> badges
    //user id -> posts -> authors

    const array = [post, post, post];
    const hubList = [hub, hub, hub, hub, hub, hub, hub, hub, hub, hub, hub, hub];
    const authorList = [author, author, author, author, author, author, author, author, author, author];

    const [favouriteHubs, setFavouriteHubs] = useState(null);
    const [favouriteAuthors, setFavouriteAuthors] = useState(null);
    const { data: session } = useSession();

    const hubsSlideLeft = () => {
        var slider = document.getElementById('hubs-slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }
    const hubsSlideRight = () => {
        var slider = document.getElementById('hubs-slider')
        slider.scrollLeft = slider.scrollLeft + 300
    }
    const authorsSlideLeft = () => {
        var slider = document.getElementById('authors-slider')
        slider.scrollLeft = slider.scrollLeft - 100
    }
    const authorsSlideRight = () => {
        var slider = document.getElementById('authors-slider')
        slider.scrollLeft = slider.scrollLeft + 100
    }

    const fetchFavouriteHubs = async () => {
        const res = await fetch("http://localhost:8080/user/favHubs", {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + session?.user.token,
                "Content-Type": "application/json",
            },
        });

        const response = await res.json();
        setFavouriteHubs(response);
    }

    const fetchFavouriteAuthors = async () => {
        const res = await fetch("http://localhost:8080/user/favAuthors", {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + session?.user.token,
                "Content-Type": "application/json",
            },
        });

        const response = await res.json();
        setFavouriteAuthors(response);
    }

    useEffect(() => { fetchFavouriteHubs() }, [])
    useEffect(() => { fetchFavouriteAuthors() }, [])

    return (
        <div>
            <TopbarPosts />
            <div className="">
                <h1 className="mx-10 mt-7 text-2xl font-bold">Любимые хабы</h1>
                <div className="flex items-center mx-3">
                    <button className="text-7xl hidden sm:block" onClick={hubsSlideLeft}>&#8249;</button>
                    <div className="flex space-x-4 mx-1 sm:overflow-x-hidden overflow-x-auto snap-x scroll-smooth" id="hubs-slider">
                        {favouriteHubs?.map((hub) => (
                            <div className="snap-start">
                                <HubCard className=""
                                    title={hub}
                                    desc={hub.desc}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="text-7xl hidden sm:block" onClick={hubsSlideRight}>&#8250;</button>
                </div>
                <h1 className="mx-10 mt-7 text-2xl font-bold">Любимые авторы</h1>
                <div className="flex items-center mx-3">
                    <button className="text-7xl hidden sm:block" onClick={authorsSlideLeft}>&#8249;</button>
                    <div className="flex space-x-4 mx-1 sm:overflow-x-hidden overflow-x-auto snap-x scroll-smooth" id="authors-slider">
                        {favouriteAuthors?.map((author) => (
                            <div className="snap-start">
                                <AuthorCard
                                    name={author}
                                    authorUsername={author.authorUsername}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="text-7xl hidden sm:block" onClick={authorsSlideRight}>&#8250;</button>
                </div>
            </div>
        </div>
    )
}