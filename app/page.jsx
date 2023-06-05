"use client"
import Image from "next/image";
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

  useEffect(() => {
    const getDataart = async () => {
      try {
        setLoadingart(true);
        const response = await axios.get("https://rest.1010-group.com/articles");
        const result = response.data.data;
        setDataart(result);
        console.log(dataart)
        setLoadingart(false);
        getData();
      } catch (error) {
        console.log(error);
      } finally {
        
      }
    };

    const getData = async () => {
      try {
        setLoadinggal(true);
        const response = await axios.get("https://rest.1010-group.com/galery");
        const result = response.data.data;
        setDatagal(result);
        // console.log(datagal)
        setLoadinggal(false);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getDataart();
  }, []);

  return (
    <>
      <div className="flex relative top-0 left-0 h-[1000px] w-full items-center bg-no-repeat justify-center bg-center bg-cover -z-20 dashboard-bg"></div>
      <Nav id="Home" />
      <main>
        <div className="w-[90%] mx-auto pb-20">
          <Articles title="ARTICLES" more={"all"}/>
          {loadingart ? (
            <div className="flex h-screen items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {dataart && dataart.data.map((article, index) => (
                <SwiperSlide key={index} className="p-5 flex flex-col gap-3">
                  <div className="w-full bg-contain object-contain">
                    <Image
                      src={`https://rest.1010-group.com/article/${article.image}`}
                      width={200}
                      height={400}
                      alt={article.title}
                      className="w-full h-[300px] object-cover"
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
          <section className="bg-white w-full p-20">
            <div className="wrapper flex justify-between items-center">
              <div className="article-title flex-col items-center gap-5">
                <h1 className="text-[70px] font-bold">Gallerys</h1>
                <p className="text-[20px] font-light mt-5">Explore For More Experience With Our Awesome Gallery</p>
              </div>
              <Link href="/gallerys">View More</Link>
            </div>
           {datagal?.data != null && (<ImageComp datas={datagal.data}/>)}
          </section>
        )}
      </main>
    </>
  );
}
