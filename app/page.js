import { useSession } from "next-auth/react"
import AuthProvider from "./context/AuthProvider"
import { redirect } from "next/dist/server/api-utils"
import UserCard from '../components/UserCard'
import Topbar from "@/components/shared/Topbar"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClientPage() {

  return (
    <section className="">
      <Topbar/>
      <button type="button" class="btn btn-primary">Primary</button>
    </section>
  )
}