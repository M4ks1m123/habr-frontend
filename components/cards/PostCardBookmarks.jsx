import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PostCardBookmarks(post) {
  const [isLiked, setLiked] = useState(false);

  const [isReadLater, setReadLater] = useState(false);
  console.log(post.post.author);


  
  const { data: session } = useSession();
  console.log(post.post.author);

  const fetchBookmark = async (bookmarkId) => {
      const res = await fetch("http://localhost:8080/api/bookmark/" + bookmarkId, {
          method: "POST",
          headers: {
              authorization: 'Bearer ' + session?.user.token,
              "Content-Type": "application/json",
          },
      });

      //const response = await res.json();
      console.log(res);
      setLiked(!isLiked);
  }
  const fetchReadlater = async (bookmarkId) => {
      const res = await fetch("http://localhost:8080/api/readlater/" + bookmarkId, {
          method: "POST",
          headers: {
              authorization: 'Bearer ' + session?.user.token,
              "Content-Type": "application/json",
          },
      });

      //const response = await res.json();
      console.log(res);
      setReadLater(!isReadLater);
  }
  return (
    <arcticle className="snap-start m-2">
      <div className="border-2 border-cyan-500 rounded-lg shadow-lg w-56 h-40">
        <ul>
          <div className="flex justify-between space-x-1 pt-2 px-2">
            <div className="flex">
              <li className="flex">
                <Link href={"/account/" + post.post.author}>
                  <Image src="/assets/profile.svg" width={30} height={30}></Image>
                </Link>
              </li>
              <li>{post.post.author}</li>
            </div>
            <div>
              <div className="space-x-1">
                <button onClick={() => fetchBookmark(post.post.articleId)}>
                  {isLiked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                  )}
                </button>
                <button onClick={() => fetchReadlater(post.post.articleId)}>
                  {isReadLater ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                    </svg>

                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>


                  )}
                </button>
              </div>
            </div>
          </div>
          <li className="text-center">
            <Link className="text" href={"/post/" + post.post.arcticleId}>
              {post.post.articleName}
            </Link>
          </li>

        </ul>
      </div>
    </arcticle>
  );
}
