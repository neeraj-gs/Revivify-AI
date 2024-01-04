import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
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

    <div className='flex justify-center space-x-4'>
      <a href="" className='bg-white rounded-xl text-black font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-gray-100 border'>
        Learn How Its Built 
      </a>
      <Link href="/" className='bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80 border'>Revive Your Images</Link>
    </div>

    <div className='flex justify-between items-center w-full flex-col sm:mt-10 mt-6'>
      <div className='flex flex-col space-y-10 mt-4 mb-16'>
        <div className='flex items-center sm:space-x-2 sm:flex-row flex-col'>
          <div>
            <h2 className='mb-1 font-medium text-lg'>Original Image</h2>
            <Image src="" alt='original Image' className='w-96 h-96 rounded-xl' width={400} height={400}/>
          </div>
          <div>
            <h2 className='mb-1 font-medium text-lg'>Revived image</h2>
            <Image src="" alt='revived image' width={400} height={400} className='w-96 h-96 rounded-xl' />
          </div>
        </div>
      </div>
    </div>

    </main>
    <Footer />
    </div>
    
  )
}
