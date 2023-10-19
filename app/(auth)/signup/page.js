'use client'
import { useRef, useState } from "react";

export default function signup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) =>{
        e.preventDefault();
        

        try{
            const res = await fetch('/api/signup', {
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
        <div>
            <form onSubmit={onSubmit} method="post" action="/api/auth/callback/credentials">
                <input name="csrfToken" type="hidden" /*defaultValue={csrfToken}*/ />
                <label>
                    Username
                    <input onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Password
                    <input onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Sign up</button>
            </form>
        </div>
    )
}