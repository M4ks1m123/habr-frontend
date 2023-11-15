import PostCard from "@/components/cards/PostCard"
import TopbarPosts from "@/components/shared/TopbarPosts"
import { post } from "@/constants"

export default function Page2() {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array.push(post);
    }

    return (

        <div className="space-y-4">
            <TopbarPosts />
            {array.map((post) => (
                <div >
                    <PostCard
                        title={post.title}
                        author={post.author}
                        tags={post.tags}
                        badges={post.badges}
                    />
                </div>
            ))}
        </div>
    )
}