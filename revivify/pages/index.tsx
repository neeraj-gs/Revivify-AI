import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Revivify-AI</title>
      </Head>
      <Header />
      <main className="flex flex-col flex-1">
      <h1 className='MX-AUTO max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-6xl'>Revive Your Old Blurry Images{" "} Using Our {" "}
      <span className='relative whitespace-nowrap text-[#3290EE]'>
        AI.
      </span>
    </h1>
    <p className='mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7'>
      Have Old Blurry Images, Want to relive and regenerate your Old memoeries? Let Our AI Revive those memeories and love on.
      <br /> 100% Free - Revive Your Images Now.
    </p>

    </main>
    </div>
    
  )
}
