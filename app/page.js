'use client';
import Head from "next/head";
import HomePage from "./Home/page";
import Loader from "./Loader";
import { useState, useEffect} from "react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  
   useEffect(() => {
    const fakeFetch = () => {
      setTimeout(() => {
        setLoading(false)
      }, 4200)
    }
   fakeFetch();
  }, [])
  
  return loading ? (
    <>
    <Head>
    <link
  rel="apple-touch-icon"
  href="/apple-icon?<generated>"
  type="image/<generated>"
  sizes="32x32"
/>
    </Head>
    <Loader />
    </>
  ) : (
    <main>
      <HomePage />  
    </main>
  );
}
