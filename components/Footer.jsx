import Link from "next/link"

export default function Footer() {
    return(
        <footer className="flex flex-col items-center bg-[#E7E7E7] p-7">
            <div className="logo-prod flex justify-center items-end">
                <Link href="/silo">
                <div className="silo w-full flex flex-col items-center justify-center gap-5 p-5">
                    <img
                        src="/images/logo/1010-hitam.png"
                        width={200}
                        height={200}
                        alt="1010 Group"
                    />
                    <p>1010 Group</p>
                </div>
                </Link>
            </div>
            <hr className="w-full h-[2px] my-5 bg-black" />
            <p className="p-10">&#169; 2023 <span className="font-bold">10/10</span></p>
        </footer>
    )
}