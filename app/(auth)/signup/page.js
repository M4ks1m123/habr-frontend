'use client'

import "app/globals.css"
import { useState } from "react";

export default function signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();


        try {
            const res = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, password
                })
            })


            if (res.ok) {
                const form = e.target;
                form.reset();
            } else {
                console.log('User reg failed')
            }
        } catch (error) {
            console.log('Error during reg', error);
        }
    }

    return (
        <div className="bg-zinc-100">
            <div className='w-full max-w-xs m-auto py-16 flex min-h-screen flex-1 flex-col items-center'>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit} method="post" action="/api/auth/callback/credentials">
                    <div className="mb-4">
                        <input name="csrfToken" type="hidden" /*defaultValue={csrfToken}*/ />
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => setName(e.target.value)} />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 m-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}