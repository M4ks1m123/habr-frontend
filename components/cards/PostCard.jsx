import Link from "next/link";
import { post } from '@/constants/index';

function PostCard(props) {
    return (
        <arcticle>
            <div className="border-2 border-cyan-500">
                <h2 className="text-small regular text-dark-2 mx-10">
                    <ul>
                        <li>{props.author}</li>
                        <ul className="flex space-x-1">
                            {props.badges.map((badge) => (
                                <li className="border-2 border-cyan-500">{badge}</li>))}
                        </ul>
                        <li className="text-2xl"><Link href={'/post/' + post.id}>{props.title}</Link></li>
                        <ul className="flex space-x-1">
                            {props.tags.map((tag) => (
                                <li>{tag}</li>))}
                        </ul>
                    </ul>
                </h2>
            </div>
        </arcticle>
    )
}

export default PostCard;