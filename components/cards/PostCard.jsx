import Link from "next/link";
import { post } from '@/constants/index';

function PostCard(props) {


    return (
        <arcticle>
            <div className="border-2 border-cyan-500 rounded-lg shadow-lg">
                    <ul>
                        <li><Link href={'/post/' + post.id}>{props.title}</Link></li>
                        <li>{props.author}</li>
                        {props.tags.map((tag) => (
                        <li>{tag}</li>))}
                    </ul>
            </div>
        </arcticle>
    )

}

export default PostCard;