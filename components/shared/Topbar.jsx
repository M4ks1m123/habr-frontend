"use client";

import { signOut, useSession } from "next-auth/react";
//import "bootstrap";
//import 'tailwindcss/defaultConfig'
import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";

let sessionStatus = true;
function Topbar() {
  const session = useSession();
  if (session.status == "authenticated") {
    sessionStatus = true;
  } 
  else {
    sessionStatus = false;
  }

  console.log(session);
  /*
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
      {sessionStatus ? (
        <h1>authenticated</h1>
      ) : (
        <h1 className="center">unauthenticated</h1>
      )}
      <div className="max-w-screen-lg mx-auto">
        <ul className="flex" >
          <li className="flex-1 border-solid border-2 border-indigo-600">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="flex-1 border-solid border-2 border-indigo-600">
            <Link href="/">Posts</Link>
          </li>
          <li className="flex-1 border-solid border-2 border-indigo-600">
            <Link href="/">Bookmarks</Link>
          </li>
          <li className="flex-1 border-solid border-2 border-indigo-600">
          </li>
          {sessionStatus ? (
            <Link href="/account">
              <Image src="/assets/profile.svg" width={40} height={40} />
            </Link>
          ) : (
            <Link href="/api/auth/signin">Sign in?</Link>
          )}
        </ul>
      </div>
      <div className="max-w-screen-lg mx-auto">
        <ul className="flex" >
          <li className="flex-1 border-solid border-2 text-center border-indigo-600">
            <a>Link</a>
          </li>
          <li className="flex-1 border-solid border-2 text-center border-indigo-600">
            <a>Link</a>
          </li>
          <li className="flex-1 border-solid border-2 text-center py-2 border-indigo-600">
            <a className="">Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
