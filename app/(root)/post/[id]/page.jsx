import PostCard from "@/components/cards/PostCard";
import { post } from "@/constants/index.js"

export default function page({ params: { id } }) {
    /*const post = {
        id: '1',
        title: 'postTitle',
        likesCount: 10,
        content: '<div><ul><li>Item<li><li>Item<li><li>Item<li></ul> </div>',
        author: 'authorName',
        tags: ('tag1, tag2, tag3'),
    }
    */
    //const Title = post.title;
    function call() {
        for (let i = 0; i < 10; i++) {
            return (
                <div>
                    <h1>Post</h1>
                    <PostCard
                        title={post.title}
                        author={post.author}
                        tags={post.tags}
                    />
                    <p>{id}</p>
                    <p>{post.id}</p>
                </div>
            )
        }
    }

    const test = 2;
    const array = [post, post, post];

    call();

    return (

        <div>
            {test == 1 ? (
                <>
                    <p>it works</p>
                </>
            ) :
                <p>it still works</p>}

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

            <p>{id}</p>
            <p>{post.id}</p>
        </div>
    )
}