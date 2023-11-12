import PostCard from "@/components/cards/PostCard"
import TopbarPosts from "@/components/shared/TopbarPosts"
import { post } from "@/constants"

export default function Page2() {
    return (
        <div>
            <TopbarPosts />
            <PostCard
                id = {post.id}
                title={post.title}
                author={post.author}
                tags={post.tags}
            />
        </div>

    )
}