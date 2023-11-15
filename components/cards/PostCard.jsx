import Link from "next/link";
import { post } from '@/constants/index';

function PostCard(props) {


    return (
        <arcticle>
            <div className="border -2 border-cyan-500">
                <h2 className="text-small regular text-dark-2 ">
                    <ul>
                        <li><Link href={'/post/' + post.id}>{props.title}</Link></li>
                        <li>{props.author}</li>
                        {props.tags.map((tag) => (
                        <li>{tag}</li>))}
                    </ul>
                </h2>
            </div>
        </arcticle>
    )

}

export default PostCard;