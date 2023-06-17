"use client"
import Link from "next/link";
import Articles from "@/components/Articles";
import Product from "@/components/Product";
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
        const responseArt = await axios.get("https://rest.1010-group.com/articles");
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
        <div className="w-[90%] mx-auto pb-20">
          <Articles title="articles" more={"all"}/>
          {loadingart ? (
            <div className="flex h-screen items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={isMobile ? 2 : 5}
              navigation
              scrollbar={{ draggable: true }}
            >
              {dataart && dataart.data.map((article, index) => (
                <SwiperSlide key={index} className="p-5 flex flex-col gap-3">
                  <div className="w-full bg-contain object-contain">
                    <img
                      src={`https://rest.1010-group.com/article/${article.image}`}
                      width={200}
                      height={400}
                      alt={article.title}
                      className="w-full h-[200px] object-cover"
                    />
                    <h1 className="font-semibold text-xl mt-5">{article.title}</h1>
                  </div>
                  <Link href={`detail-article/${article.slug}`} className="font-semibold">Read More</Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <Product />
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
      </main>
    </>
  );
}
