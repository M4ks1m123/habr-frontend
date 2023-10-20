'use client'

import "app/globals.css"
import { getCsrfToken, signIn } from "next-auth/react"
import Link from "next/link";
import { useRef } from "react"

export default function SignIn({ csrfToken }) {
    const userName = useRef('');
    const password = useRef('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            username: userName.current,
            password: password.current,
            //redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <div className="bg-zinc-100">
            <div className='w-full max-w-xs m-auto py-16 flex min-h-screen flex-1 flex-col items-center'>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post" action="/api/auth/callback/credentials">
                    <div class="mb-4">
                        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" onChange={(e) => (userName.current = e.target.value)} />
                        </label>
                    </div>
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" onChange={(e) => (password.current = e.target.value)} />
                        </label>
                    </div>
                    <div className="flex justify-between">
                        <button class="bg-blue-500 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onSubmit}>Sign in</button>
                        <Link class="inline-block m-auto align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href='signup'>Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
/*
export async function getServerSideProps() {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}
*/