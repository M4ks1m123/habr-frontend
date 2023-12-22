'use client'


import 'app/globals.css'
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Page() {

  //user id -> user
  const [posts, setPost] = useState(null);


  let res = undefined;

  const { data: session } = useSession();
  console.log("!!!!", session?.user.token);
  console.log("bearer " + session?.user.token);


  const fetchUser = async () => {
    const res = await fetch("http://localhost:8080/api/articles", {
      method: "GET",
      headers: {
        authorization: 'Bearer ' + session?.user.token,
        "Content-Type": "application/json",
      },
    });

    const response = await res.json();
    console.log(response);
    setPost(response);
  }

  const handleClick = () => {
    fetchUser();
  }


  // console.log({ data: session })

  return (
    <section className="">
      <h1 className="mx-10 mt-7 text-2xl font-bold">Статистика</h1>
      <button onClick={fetchUser}>FEEETCH</button>
      <h1>
        {/*posts?.map((post, i) => (
          <div key={i} className="space-y-2">
            {post?.author}
            {is}
          </div>
        ))*/

          posts && JSON.stringify(posts)}
      </h1>
    </section>
  )
}