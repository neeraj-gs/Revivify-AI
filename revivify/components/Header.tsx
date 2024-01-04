import Image from "next/image"
import Link from "next/link"

const Header = ({photo}: {photo?:string|undefined}) => {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
        <Link href="/" className="flex items-center justify-center gap-2">
            <Image src="" alt="Logo" className="sm:w-12 sm:h-12 w-7 h-7" width={25} height={25} />
            <h1 className="sm:text-3xl text-2xl font-bold ml-2 tracking-tight">Revivify-AI</h1>
        </Link>
        {photo ? (
            <Image alt="profile" src={photo} className="w-10 rounded-full" width={32} height={32} />
        ):(
            <a href="" target="_blank">
                <Image src="" alt="vercel icon" className="sm:w-10 sm:h-[34px] 2-8 h-[28px]" width={32} height={28} />
            </a>
        )}
        
    </header>
  )
}

export default Header