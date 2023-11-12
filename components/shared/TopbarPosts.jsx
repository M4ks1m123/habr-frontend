"use client";

import { signOut, useSession } from "next-auth/react";
//import "bootstrap";
//import 'tailwindcss/defaultConfig'
import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";

let sessionStatus = true;
function TopbarPosts() {
  const session = useSession();
  if (session.status == "authenticated") {
    sessionStatus = true;
  }
  else {
    sessionStatus = false;
  }
 /*
  console.log(session);
 
  if (session.status =="unauthenticated"){
    return(
      <h1>Blocked</h1>
    )
  }
  else{
    return(
      <h1>Accessed</h1>
    )
  }
  */
  return (
    <div>
      <div className="max-w-screen-lg mx-auto">
        <ul className="flex" >
          <li className="flex-1 border-solid border-2 text-center py-2 border-cyan-500">
            <Link href='/posts'>Избранное</Link>
          </li>
          <li className="flex-1 border-solid border-2 text-center py-2 border-cyan-500">
            <Link href='/post2'>Интересное</Link>
          </li>
          <li className="flex-1 border-solid border-2 text-center py-2 border-cyan-500">
            <Link href='/post/5'>Последнее</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopbarPosts;
