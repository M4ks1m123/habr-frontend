import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import UserCard from "@/components/UserCard";

export default async function Home(){
    const session = await getServerSession(options)
    console.log("instanceof session")

    return(
        <>
        {console.log("instanceof session")}
        {session ? (
            <h1>Accessed</h1>
        ): (
            <h1>Blocked</h1>
        )}
        </>
    )
}