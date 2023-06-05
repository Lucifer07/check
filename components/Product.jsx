import Image from "next/image"
import Link from "next/link"

export default function Product() {
    return(
        <section id="product" className="py-40 relative flex justify-evenly dashboard-bg-2">
            <div className="right">
                <Image 
                    src="/images/silo/2.png"
                    width={640}
                    height={800}
                    alt="silo"
                />
            </div>
            <div className="left text-white">
                <h1 className="text-center text-4xl mb-14">Our Product</h1>
                <div className="brands flex justify-evenly gap-14">
                    <div className="b-l-silo flex flex-col gap-8 items-center">
                        <Image
                            src="/images/logo/silo-white.png"
                            width={173}
                            height={175}
                            alt="silo"
                        />
                        <hr className="h-2 w-full bg-white"/>
                        <Link href="/silo" className="px-5 py-3 text-[15px] bg-transparent border">MORE INFORMATION</Link>
                    </div>
                    <div className="b-l-sirloin flex flex-col gap-8 items-center">
                        <Image
                            src="/images/logo/sirloin-white.png"
                            width={278}
                            height={175}
                            alt="sirloin"
                        />
                        <hr className="h-2 w-full bg-white"/>
                        <Link href="/sirloin" className="px-5 py-3 text-[15px] bg-transparent border">MORE INFORMATION</Link>
                    </div>
                </div>
                <p className="text-xl py-14">Reviews the development of environmental management, <br /> 
with specific reference to its effects on service industries <br />
in general and the hospitality industry specifically. <br />
The impact of environmental management on the <br />
hospitality industry was tested using a postal <br />
survey of hotel managers. The likely effects of <br />
environmental management on the <br />
hotel were determined.</p>
                <button className="px-10 py-3 text-[15px] bg-transparent border">HELP ME</button>
            </div>
            <Image
                src="/images/logo/logo1.png"
                width={208}
                height={28}
                alt="logo"
                className="absolute right-10 bottom-10 px-5"
            />
        </section>
    )
}