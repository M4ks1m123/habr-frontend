'use client'
import { useSession } from "next-auth/react"
import AuthProvider from "./context/AuthProvider"
import { redirect } from "next/dist/server/api-utils"
import UserCard from '../../components/UserCard'
import Topbar from "@/components/shared/Topbar"
import { useEffect } from "react"
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClientPage() {
  function log(msg) {
    useEffect(() => {
      var logElem = document.querySelector(".log")
      logElem.innerHTML = msg;
    });
  }

  //const result = await fetchPosts();

  return (
    <section className="">
      {log('<div><ul><li>Item<li><li>Item<li><li>Item<li></ul> </div>')}
      <div className="log" >

      </div >
    </section >
  )
}