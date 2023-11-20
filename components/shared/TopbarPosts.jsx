'use client'

import { signOut, useSession } from "next-auth/react";
//import "bootstrap";
//import 'tailwindcss/defaultConfig'
import Image from "next/image";
import NavLink from "@/components/NavLink";
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
      <div className="max-w-screen-lg mx-auto border shadow-md">
        <ul className="flex" >
          <NavLink className="flex-1 text-center py-2 " href='/favourites'>Избранное</NavLink>
          <NavLink className="flex-1 text-center py-2" href='/featured'>Интересное</NavLink>
          <NavLink className="flex-1 text-center py-2" href='/latest'>Последнее</NavLink>
        </ul>
      </div>
    </div>
  );
}

export default TopbarPosts;
