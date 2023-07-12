"use client"
import Link from "next/link";
import Articles from "@/components/Articles";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ImageComp from "@/components/ImageComp";

export default function Home() {
  const [dataart, setDataart] = useState(null);
  const [datagal, setDatagal] = useState(null);
  const [loadingart, setLoadingart] = useState(true);
  const [loadinggal, setLoadinggal] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoadingart(true);
        const responseArt = await axios.get("https://rest.1010-group.com/outlet");
        const resultArt = responseArt.data.data;
        setDataart(resultArt);
        setLoadingart(false);
      } catch (error) {
        console.log(error);
      }
    };

    const getGalery = async () => {
      try {
        setLoadinggal(true);
        const responseGal = await axios.get("https://rest.1010-group.com/galery");
        const resultGal = responseGal.data.data;
        setDatagal(resultGal);
        setLoadinggal(false);
      } catch (error) {
        console.log(error);
      }
    };

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    getData();
    getGalery();

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex relative top-0 left-0 lg:h-[1000px] h-screen w-full items-center bg-no-repeat justify-center bg-center bg-cover -z-20 dashboard-bg"></div>
      <Nav id="Home" />
      <main>
      <div className="w-[90%] mx-auto pb-20 pt-20">
      <h1 className="text-3xl mx-6 font-Caveat text-center pb-20 pt-20">Bring an elevated casual lifestyle of dining experience  by redefining the boundaries of expectations and exciting youre sense</h1>
        </div>
        <div className="w-[90%] mx-auto pb-20">
          <Articles title="outlet" more={"no"}/>
          {loadingart ? (
            <div className="flex h-screen items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-0 md:grid-cols-2 lg:grid-cols-5 ">
            {dataart &&dataart.data.map((item) => (
              <Link key={item.id} href={"/outlet/"+item.slug}>
              <div className="relative cursor-pointer">
                <div className="aspect-w-3 aspect-h-2">
                  <div className="relative">
                    <img
                      src={`https://rest.1010-group.com/outlate/${item.image}`}
                      alt={item.image}
                      width={500}
                      height={500}
                      className="w-full h-[200px]  shadow-lg border-5 border-gray-600 object-cover"
                      loading="lazy"
                    />
                    <div className="w-full h-[200px] absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300">
                      <span className="text-white bg-gray-800 h-full w-full  text-center flex items-center justify-center">{item.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            ))}
          </div>
          )}
        </div>
        {loadinggal ? (
          <div className="flex h-screen items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <article className="w-[90%] mx-auto pb-20">
            <Articles title="gallerys" more="gallerys" />
            {datagal?.data && (<ImageComp datas={datagal.data} isMobile={isMobile}/>)}
          </article>
        )}
        <div className="bg-gray-700 w-full">
        <div className="w-[90%] mx-auto pb-20 pt-20 ">
      <div className="text-3xl mx-6 font-montserrat  text-center pb-20 pt-20 text-white">
      <h1 className="">Contact Us:</h1>
      <h1 className="">Email: </h1>
      </div>
        </div>

        </div>
      </main>
    </>
  );
}