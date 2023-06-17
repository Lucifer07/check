"use client"
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState, useLayoutEffect } from "react";
import axios from "axios";
import Articles from "./Articles";

export default function SectionPage(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const content = props.logo;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";
        if (content === "Sirloin") {
          url = `https://rest.1010-group.com/articles?product=sirloin`;
        } else if (content === "silo") {
          url = `https://rest.1010-group.com/articles?product=silo`;
        }

        const response = await axios.get(url);
        setData(response.data.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        // Tambahkan penanganan kesalahan sesuai kebutuhan Anda
      }
    };

    fetchData();
  }, [content]);

  useLayoutEffect(() => {
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    handleResize(mediaQuery);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-evenly items-center p-10">
        <div className="logo">
          <img
            src={`/images/logo/${props.logo}-black.png`}
            width={props.w}
            height={props.h}
            alt={props.alt}
            className="object-contain p-5"
          />
        </div>
        <div className="section-text flex mt-10 lg:mt-0 flex-col gap-5">
          <h1 className="text-3xl font-semibold">
            HOW <span>{props.title}</span> SERVE YOU
          </h1>
          {isMobile ? (
            <p className="text-xl font-normal leading-10">
              Reviews the development of environmental management, with specific
              reference to its effects on service industries in general and the
              hospitality industry specifically. The impact of environmental
              management on the hospitality industry was tested using a postal
              survey of hotel managers. The likely effects of environmental
              management on the hotel were determined.
            </p>
          ) : (
            <p className="text-xl font-normal leading-10">
              Reviews the development of environmental management, <br />
              with specific reference to its effects on service industries <br />
              in general and the hospitality industry specifically. <br /> The
              impact of environmental management on the <br /> hospitality
              industry was tested using a postal <br /> survey of <br /> hotel
              managers. The likely effects of environmental <br />
              management on the hotel were determined.
            </p>
          )}

          <Link
            href={`/${props.link}`}
            className="px-5 py-3 w-1/3 font-medium text-center text-[18px] bg-transparent border-2"
          >
            Read More
          </Link>
        </div>
      </section>

      <div className="w-[90%] mx-auto">
        <Articles title="Articles" more={props.logo} />
      </div>

      <div className="dashboard-bg-2 w-full p-10 text-white">
        {loading ? (
          <div className="flex h-screen items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={isMobile ? 2 : 5}
            navigation
            scrollbar={{ draggable: true }}
          >
            {data &&
              data.map((article, index) => (
                <SwiperSlide key={index} className="p-5 flex flex-col gap-3">
                  <div className="w-full bg-contain object-contain">
                    <img
                      src={`https://rest.1010-group.com/article/${article.image}`}
                      width={200}
                      height={400}
                      alt={article.title}
                      className="w-full h-[300px] object-cover"
                    />
                    <h1 className="font-semibold text-xl mt-5">
                      {article.title}
                    </h1>
                  </div>
                  <Link
                    href={`detail-article/${article.slug}`}
                    className="font-semibold"
                  >
                    Read More
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </>
  );
}
