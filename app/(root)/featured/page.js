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
            <div className="mx-3">
                {array.map((post) => (
                    <div>
                        <h1>Post</h1>
                        <PostCard
                            title={post.title}
                            author={post.author}
                            tags={post.tags}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}