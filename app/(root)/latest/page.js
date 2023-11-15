'use client'
import TopbarPosts from "@/components/shared/TopbarPosts"
import { post } from "@/constants";
import { useEffect } from "react"

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