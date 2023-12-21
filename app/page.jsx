'use client'
import { signIn, useSession } from "next-auth/react"
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
      <button className="text-green-600" onClick={() => signIn()}>SignIN?</button>
    </section >
  )
}