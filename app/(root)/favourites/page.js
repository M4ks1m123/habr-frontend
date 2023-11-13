import AuthorCard from "@/components/cards/AuthorCard";
import HubCard from "@/components/cards/HubCard";
import TopbarPosts from "@/components/shared/TopbarPosts";
import { author, hub, post } from "@/constants";


export default function Page() {

    const array = [post, post, post];
    const hubList = [hub, hub, hub];
    const authorList = [author, author, author];
    return (
        <div>
            <TopbarPosts />
            <div className="mx-10">
                <h1 className="mt-7 mb-3">Любимые хабы</h1>
                <div className="flex space-x-4 mx-4">
                    {hubList.map((hub) => (
                        <div>
                            <HubCard
                                title={hub.title}
                                desc={hub.desc}
                            />
                        </div>
                    ))}
                </div>
                <h1 className="mt-7 mb-3">Любимые авторы</h1>
                <div className="flex space-x-4 mx-4">
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