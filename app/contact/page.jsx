'use client'
import Articles from "@/components/Articles";
import Nav from "@/components/Nav";
import SwiperComp from "@/components/Swiper";

import { articleData } from "@/components/articlesData";
import Image from "next/image";
import Link from "next/link";

export default function Contact(){
  return (
    <>
    <div className="nav-bg flex relative top-0 left-0 h-[100px] w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
    <Nav id="contact" />
    <main className="w-[90%] mx-auto pb-20">
        <h1 className="text-4xl text-center mx-auto font-black p-10">CONTACT US</h1>
        <section className="flex items-center justify-center gap-3">
            <Link href="https://www.instagram.com/sir.loin.jkt/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" className="ig p-10 flex flex-col items-center justify-center gap-3 w-1/3">
                <p className="font-bold text-3xl text-center">VISIT OUR INSTAGRAM</p>
                <Image
                    src="/images/silo/1.jpg"
                    height={300}
                    width={300}
                    alt="Instagram"
                />
                <p>Instagram: sir.loin.jkt</p>
            </Link>
        </section>
        <Articles title="See Our Articles" />
        <SwiperComp data={articleData} />
    </main>
    </>
  );
};
