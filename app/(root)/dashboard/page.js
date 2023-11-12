import TopbarPosts from "@/components/shared/TopbarPosts"

export default function Page() {

    function Post(){
        return(
            <h1>Test</h1>
        )
    }
    return (

        <div>
            <TopbarPosts />
            <h1>Dashboard</h1>
        </div>
    )
}