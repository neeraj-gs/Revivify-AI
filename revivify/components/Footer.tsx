import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
        <div className="">
            Powered by{" "}
            <a href="" className="font-bold transition hover:text-black/50">
                Replicate AI,{" "}
            </a>
            <a href="" className="font-bold transition hover:text-black/50">Upload,{" "}</a>
            <a href="" className="font-bold transition hover:text-black/50">Next.JS,{" "}</a>
            and{" "}
            <a href="" className="font-bold transition hover:text-black/50">Vercel{" "}</a>
        </div>

        <div className="flex items-center gap-1">
            <Link href="/">Download Source Code</Link>{" | "}
            <p>Created With Love By Neeraj GS</p>

        </div>
    </footer>
  )
}

export default Footer