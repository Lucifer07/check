import Link from "next/link"

export default function Footer() {
    const CurrentDate= new Date().getFullYear()
    return (
        <footer className="font-inter flex flex-col items-center bg-black p-7 uppercase text-white">
            <p className="font-josefin ">Reserve now</p>
            <div className="flex">
                <a href="https://linktr.ee/sir.loin" className="h-10 w-40 m-5  text-white px-2 py-2 border-white border-2 rounded-lg text-center hover:text-sky-500 hover:underline hover:border-sky-500">Sir Loin</a>
                <a href="https://linktr.ee/si.lo" className="h-10 w-40  m-5 text-white px-2 py-2 border-white border-2 rounded-lg text-center hover:text-sky-500 hover:underline hover:border-sky-500">Silo</a>
            </div>

            <hr className="w-full h-[2px] my-5 bg-black" />
            <div className="w-full flex justify-end">
                
            <p className="">&#169; {CurrentDate} <span className="font-bold">1010-GROUP</span></p>

            </div>
        </footer>
    )
}