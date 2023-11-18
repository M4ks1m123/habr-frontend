'use client'
import AuthorCard from "@/components/cards/AuthorCard";
import HubCard from "@/components/cards/HubCard";
import TopbarPosts from "@/components/shared/TopbarPosts";
import { author, hub, post } from "@/constants";


export default function Page() {

    const array = [post, post, post];
    const hubList = [hub, hub, hub, hub, hub, hub, hub, hub, hub, hub, hub, hub];
    const authorList = [author, author, author];

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 300
    }
    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 300
    }
    return (
        <div>
            <TopbarPosts />
            <div className="">
                <h1 className="mx-10 mt-7 text-2xl font-bold">Любимые хабы</h1>
                <div className="flex items-center mx-3">
                    <button className="text-7xl block" onClick={slideLeft}>&#8249;</button>
                    <div className="flex space-x-4 mx-1 overflow-x-hidden snap-x scroll-smooth" id="slider">
                        {hubList.map((hub) => (
                            <div className="snap-start" id="slider">
                                <HubCard className=""
                                    title={hub.title}
                                    desc={hub.desc}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="text-7xl" onClick={slideRight}>&#8250;</button>
                </div>
                <h1 className="mt-7 mb-3">Любимые авторы</h1>
                <div className="flex space-x-4 mx-4 overflow-x-auto">
                    {authorList.map((author) => (
                        <div>
                            <AuthorCard
                                name={author.authorName}
                                authorUsername={author.authorUsername}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}