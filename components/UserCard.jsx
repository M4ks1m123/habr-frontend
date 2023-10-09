import Image from "next/image"

export default function Card({user, pagetype}){

  const greeting = user?.name ?(
    <div>
      Hello {user?.name}
    </div>
  ): null



  return (
    <section>
      {greeting}
      <p></p>
    </section>
  )
}