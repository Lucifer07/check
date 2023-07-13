import Link from "next/link"

export default function Footer() {
    return(
        <footer className="font-inter flex flex-col items-center bg-[#E7E7E7] p-7">
            <p>Reserne now</p>
            <div className="flex">
                <a href="https://linktr.ee/sir.loin" className="p-5 m-5 bg-black text-white">Sir Loin</a>
                <a href="https://linktr.ee/si.lo" className="p-5 m-5 bg-black text-white">Silo</a>
            </div>
            <hr className="w-full h-[2px] my-5 bg-black" />
            <p className="p-10">&#169; 2023 <span className="font-bold">10/10</span></p>
        </footer>
    )
}