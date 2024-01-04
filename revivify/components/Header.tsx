import Image from "next/image"
import Link from "next/link"

const Header = ({photo}: {photo?:string|undefined}) => {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
        <Link href="/">
            <Image src="" alt="Logo" />
            <h1>Revivify-AI</h1>
        </Link>
    </header>
  )
}

export default Header