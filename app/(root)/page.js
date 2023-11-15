'use client'
import { useEffect } from "react"

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