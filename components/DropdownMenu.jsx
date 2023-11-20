'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DropdownMenu() {
    const [navbar, setNavbar] = useState(true);

    return (
        <div className="absolute my-2.5">
            <button className="block sm:hidden ms-4" onClick={() => setNavbar(!navbar)}>
                <Image src="/assets/Hamburger_icon_white.svg" className="block" width={30} height={30} />
            </button>
            {navbar ? (
                <h1></h1>

            ) : (
                <div className="sm:flex inline ">
                    <ul className="bg-cyan-500">
                        <li className="border-solid py-3 ps-3 pe-10">
                            <Link onClick={() => setNavbar(!navbar)} className="text-white text-lg font-medium hover:text-slate-100" href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="border-solid border-2 border-cyan-500 py-3 ps-3 pe-10">
                            <Link onClick={() => setNavbar(!navbar)} className="text-white text-lg font-medium hover:text-slate-100" href="/featured">Posts</Link>
                        </li>
                        <li className=" border-solid border-2 border-cyan-500 py-3 ps-3 pe-10">
                            <Link onClick={() => setNavbar(!navbar)} className="text-white text-lg font-medium hover:text-slate-100" href="/">Bookmarks</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div >

    )
}