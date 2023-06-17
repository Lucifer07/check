import SectionPage from "@/components/SectionPage"
import Nav from "@/components/Nav"
import { Metadata } from "next"

export const metadata = {
    title: 'Silo'
}

export default function SiloPage() {
    return (
        <>
            <main className="">
            <div className="silo-bg flex relative top-0 left-0 lg:h-[1000px] h-screen w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
                <Nav id="Silo" />
                {/* bg */}
                <SectionPage logo="silo" h="400" w="400" alt="silo logo" title="SILO" link="silo/articles" />
            </main>
        </>
    )
}