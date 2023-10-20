import { useSession } from "next-auth/react"
import AuthProvider from "./context/AuthProvider"
import { redirect } from "next/dist/server/api-utils"
import UserCard from '../../components/UserCard'
import Topbar from "@/components/shared/Topbar"
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClientPage() {

  //const result = await fetchPosts();

  return (
    <section className="">
      <button className="text-blue-500">Primary</button>
    </section>
  )
}