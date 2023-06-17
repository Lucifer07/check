import Nav from "@/components/Nav"

export const metadata = {
    title: 'About',
}

export default function aboutPage() {
    return (
        <>
            <div className="nav-bg flex relative top-0 left-0 lg:h-[100px] h-16 w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
            <Nav id="About Us" />
            <main className="h-screen w-full">
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
                        <div className="max-w-2xl mx-auto flex flex-col items-center">
                            <img
                                src="/images/logo/1010-hitam.png"
                                alt="Group of friends enjoying food"
                                className="w-full object-cover m-8"
                            />
                            <p className="text-lg text-center">
                                1010 Group established in 2018. We are a group of friends who are food enthusiasts and curiously innovative; aim to bring an elevated casual lifestyle of dining experience by redefining the boundaries of expectations and exciting your senses.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}