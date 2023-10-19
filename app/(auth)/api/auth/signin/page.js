'use client'
import { getCsrfToken, signIn } from "next-auth/react"
import { useRef } from "react"

export default function SignIn({ csrfToken }) {
    const userName = useRef('');
    const password = useRef('');

    const onSubmit = async (e) =>{
        e.preventDefault();
        const result = await signIn('credentials', {
            username: userName.current,
            password: password.current,
            //redirect: true,
            callbackUrl: '/'
        })
    }

    return (
        <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
                Username
                <input name="username" type="text" onChange={(e) => (userName.current = e.target.value)}/>
            </label>
            <label>
                Password
                <input name="password" type="password" onChange={(e) => (password.current = e.target.value)} />
            </label>
            <button onClick={onSubmit}>Sign in</button>
        </form>
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