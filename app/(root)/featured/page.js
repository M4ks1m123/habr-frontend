import AuthorCard from "@/components/cards/AuthorCard";
import PostCard from "@/components/cards/PostCard"
import TopbarPosts from "@/components/shared/TopbarPosts"
import { post } from "@/constants"

export default function Page2() {
    //const array = [post, post, post];
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(post);
    }

    return (

        <div>
            <TopbarPosts />
            <div className="mx-5 space-y-2">
                {array.map((post) => (
                    <div className="space-y-2">
                        <PostCard post={post}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}