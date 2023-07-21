import Nav from "@/components/Nav"

export const metadata = {
    title: 'About',
}

export default function aboutPage() {
    return (
        <>
            <div className="nav-bg flex relative top-0 left-0 lg:h-[100px] h-16 w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
            <Nav id="About Us" />
            <main className="h-screen w-full bg-black text-white">
                <section className=" py-16 uppercase">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center font-josefin ">About Us</h2>
                        <div className="max-w-2xl mx-auto flex flex-col items-center">
                            <p className="text-lg text-justify">
                            Established in 2018, 1010 Group started with a group of friends who are food enthusiasts and curiously innovative. We focused to bring an elevated casual lifestyle of dining experience by redefining the boundaries of expectations and exciting your senses. 
                            </p>
                            <br />
                            <p className="text-lg text-justify">We hope, our presence can satisfy every customer with the best quality while providing services that create memorable experience.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}