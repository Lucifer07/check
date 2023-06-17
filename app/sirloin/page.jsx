import SectionPage from "@/components/SectionPage"
import Nav from "@/components/Nav"
import { Metadata } from "next"
SectionPage

export const metadata = {
    title: 'Sirloin'
}

export default function SirloinPage() {
    return (
        <>
            <main>
                {/* bg */}
                <div className="sirloin-bg flex relative top-0 left-0 lg:h-[1000px] h-screen w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
                <Nav  id="Sirloin"/> 
                <SectionPage logo="Sirloin" h="400" w="500" alt="Sirloin logo" title="SIRLOIN" link="sirloin/articles" />

            </main>
        </>
    )
}

