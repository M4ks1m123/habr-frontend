"use client";


import { signIn, signOut, useSession } from "next-auth/react";
//import "bootstrap";
//import 'tailwindcss/defaultConfig'
import Image from "next/image";
import Link from "next/link";
import { Input } from "postcss";
import DropdownMenu from "../DropdownMenu";

let sessionStatus = true;
const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}
export default function Topbar() {
  /*
  const session = useSession();
  if (session.status == "authenticated") {
    sessionStatus = true;
  }
  else {
    sessionStatus = false;
  }

  console.log(session);
  */

  const { data: session } = useSession();
  console.log({ session });
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
    <div className="bg-cyan-500">
      <DropdownMenu />
      {/*
      {sessionStatus ? (
        <h1>authenticated</h1>
      ) : (
        <h1 className="center">unauthenticated</h1>
      )}
      */}
      <div className="max-w-screen-lg mx-auto">

        <ul className="sm:justify-between justify-end flex sm:flex" >

          <div className="space-x-4 items-center ps-4 hidden sm:flex">

            <li className="border-solid border-2 border-cyan-500">
              <Link className="text-white text-2xl font-bold hover:text-slate-100" href="/dashboard">Хабр</Link>
            </li>
            <li className="border-solid border-2 border-cyan-500">
              <Link className="text-white text-lg font-medium hover:text-slate-100" href="/dashboard">Dashboard</Link>
            </li>
            <li className="border-solid border-2 border-cyan-500">
              <Link className="text-white text-lg font-medium hover:text-slate-100" href="/featured">Posts</Link>
            </li>
            <li className=" border-solid border-2 border-cyan-500">
              <Link className="text-white text-lg font-medium hover:text-slate-100" href="/bookmarks">Bookmarks</Link>
            </li>
          </div>
          <div className="flex justify-end me-4 items-center">
            <li className="content-center">
              <Link href="/search">
                <Image src="/assets/search.svg" width={50} height={50} className="m-auto" />
              </Link>
            </li>
            <li>
              {session?.user ? (
                <Link href="/dashboard">
                  <Image src="/assets/White-Profile.svg" width={50} height={50} />
                  <h1>{session.user.name}</h1>
                </Link>
              ) : (
                <div>
                  <Link className="text-white text-lg font-medium hover:text-slate-100" href="/api/auth/signin">Sign in?</Link>
                  <button className="text-green-600" onClick={() => signIn()}>SignIN?</button>
                </div>
              )}
            </li>
          </div>
        </ul>
      </div>
    </div>

  );
}