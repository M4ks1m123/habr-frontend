import Link from "next/link";
import { useEffect } from "react";

export default function Post(props) {
    function ShowPost(msg) {
        useEffect(() => {
            var logElem = document.querySelector(".log")
            logElem.innerHTML = msg;
        });
    }

    return (
        <arcticle>
            <div className="border-2 border-cyan-500">
                <div className="mx-10">
                    <ul>
                        <li>{props.author}</li>
                        <ul className="flex space-x-1">
                            {props.badges.map((badge) => (
                                <li className="border-2 border-cyan-500">{badge}</li>))}
                        </ul>
                        <li className="text-2xl my-4"><Link href={'/post/' + props.id}>{props.title}</Link></li>
                        <li>{ShowPost(props.content)}</li>
                        <div className="log"></div>
                        <h1 className="text-2xl mt-4 mb-1">Тэги</h1>
                        <ul className="flex space-x-1">
                            {props.tags.map((tag) => (
                                <li>{tag}</li>))}
                        </ul>
                    </ul>
                </div>
            </div>
        </arcticle>
    )
}