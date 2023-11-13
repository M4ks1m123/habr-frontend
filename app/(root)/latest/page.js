'use client'
//import { useSession } from "next-auth/react"
//import AuthProvider from "./context/AuthProvider"
//import { redirect } from "next/dist/server/api-utils"
//import UserCard from '../../components/UserCard'
//import Topbar from "@/components/shared/Topbar"
import TopbarPosts from "@/components/shared/TopbarPosts"
import { post } from "@/constants";
import { useEffect } from "react"

//import 'bootstrap/dist/css/bootstrap.min.css';

export default function ClientPage() {
  function ShowPost(msg) {
    useEffect(() => {
      var logElem = document.querySelector(".log")
      logElem.innerHTML = msg;
    });
  }

  //const result = await fetchPosts();

  return (
    <div>
      <section className="">
        <TopbarPosts />
        {ShowPost(post.content)}
        <div className="log" >
        </div >
        <ul>
          <li>{post.title}</li>
          <li>{post.author}</li>
          <li>{post.tags}</li>
          <li>{post.likesCount}</li>
        </ul>
      </section >
    </div>
  )
}