import Link from "next/link"

export default function Product() {
    return (
        <section id="product" className="p-20 relative lg:flex gap-10 lg:flex-row max-md:flex-col max-sm:flex-col justify-evenly dashboard-bg-2 max-md:justify-center max-sm:justify-center">
    <div className="md:right lg:right my-6 mx-auto max-md:text-center max-sm:text-center" id="c1">
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center items-center">
            <div>
                <img src="/images/logo/silo-white.png" alt="Silo" className="w-full md:full h-1/2" />
            </div>
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">SILO</div>
            <p className="text-white text-base">
                SILO offers an expression of Japanese grill where we source the best quality produce and enchance the flavors itself. All the umami flavour and the smokiness of the grill with an unique dining experience has made SILO a sought-after hidden gems in South Jakarta.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <Link href={"https://instagram.com/silo_jkt?igshid=MzRlODBiNWFlZA=="} className={"border-2 border-slate-100 text-center text-white p-2"}>Contact Silo</Link>
        </div>
    </div>
    <div className="md:left lg:left my-6 mx-auto max-md:text-center max-sm:text-center" id="c2">
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex justify-center items-center">
            <div>
                <img src="/images/logo/sirloin-white.png" alt="Sir Loin" className="w-full md:w-full h-1/2" />
            </div>
        </div>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">SIR LOIN</div>
            <p className="text-white text-base">
                Sir Loin is an institution solely dedicate to the creation of great steak.
                Each piece of steak is much more than just a meat. It is a precise balance of science and passions. It takes patiences and time; a result of experimentation, refinement and physical hard work. We love to experiment with dry-aged techniques as well as different cooking process,  to enhance the flavors and create the perfect balance of taste and textures.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <Link href={"https://instagram.com/sir.loin.jkt?igshid=MzRlODBiNWFlZA=="} className={"border-2 border-slate-100 text-center text-white p-2"}>Contact Sir Loin</Link>
        </div>
    </div>
    <img
        src="/images/logo/logo1.png"
        width={208}
        height={28}
        alt="logo"
        className="absolute right-10 bottom-10 px-5"
    />
</section>

    )
}