'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getServerSession } from 'next-auth';
import UserCard from "@/components/UserCard";
import { useSession } from 'next-auth/react';
import { options } from '../../(auth)/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

export default function AccountPage() {

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
        <h1> {test} </h1>
      <UserCard user={session?.user}></UserCard>
    </section>
  )
}