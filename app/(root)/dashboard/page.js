'use client'
import 'app/globals.css'
import UserCard from "@/components/UserCard";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Page() {

    //user id -> user

    const {data: session} = useSession({
        required: true,
        onUnauthenticated(){
            redirect('api/auth/signin?callbackUrl=/account')
        }
    })

    console.log({data: session})
    const test = session?.user.name;

  return (
    <section className="">
        <h1>Статистика</h1>
        <h1> {test} </h1>
      <UserCard user={session?.user}></UserCard>
    </section>
  )
}