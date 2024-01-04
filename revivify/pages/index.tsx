import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Revivify-AI</title>
      </Head>
      <Header />
      <main className="flex flex-col flex-1 w-full items-center justify-center text-center px-4 sm:mt-28 mt-20">
      <h1 className='MX-AUTO max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-6xl'>Revive Your Old Blurry Images{" "} Using Our {" "}
      <span className='relative whitespace-nowrap text-[#3290EE]'>
        AI.
      </span>
    </h1>
    <p className='mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7'>
      Have Old Blurry Images, Want to relive and regenerate your Old memoeries? Let Our AI Revive those memories.
    </p>

    <div>
      <a href="">
        Learn How Its Built 
      </a>
      <Link href="/">Revive Your Images</Link>
    </div>

    </main>
    </div>
    
  )
}
