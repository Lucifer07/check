import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return(
        <footer className="flex flex-col items-center bg-[#E7E7E7] p-7">
            <h1 className="font-semibold text-2xl p-2">Our Product</h1>
            <div className="logo-prod flex justify-center items-end">
                <Link href="/silo">
                <div className="silo w-full flex flex-col items-center justify-center gap-5 p-5">
                    <Image
                        src="/images/logo/silo-black.png"
                        width={80}
                        height={80}
                        alt="silo logo"
                    />
                    <p>Silo</p>
                </div>
                </Link>
                <Link href="/sirloin">
                <div className="sirloin w-full flex flex-col items-center justify-center gap-5 p-5">
                    <Image
                        src="/images/logo/sirloin-black.png"
                        width={136.77}
                        height={85.39}
                        alt="sirloin logo"
                        className="object-contain"
                    />
                    <p>Sirloin</p>
                </div>
                </Link>
            </div>
            <hr className="w-full h-[2px] my-5 bg-black" />
            <p className="p-10">&#169; 2023 <span className="font-bold">10/10</span></p>
        </footer>
    )
}