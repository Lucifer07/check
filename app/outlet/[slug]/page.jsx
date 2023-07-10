"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Nav from "@/components/Nav";
import Description from "@/components/Description";

export default function ArticlesPage({ params }) {
  const slug = params.slug;
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    handleResize(mediaQuery);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://rest.1010-group.com/outletSpesific/${slug}`);
        const result = response.data.data;
        setData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className="flex relative top-0 left-0 lg:h-[1000px] h-screen w-full items-center bg-no-repeat justify-center bg-center bg-cover" style={{ backgroundImage: `url("https://rest.1010-group.com/outlate/${data.image}")` }}>
          </div>
          <Nav id="Gallerys" />
      <main className="flex flex-col items-center justify-center">
            <section className="h-screen bg-white flex justify-center items-center">
              <div>
          <h1 className="text-3xl font-montserrat  text-center mt-6">{data.name.toUpperCase()}</h1>
                
                <div className=" mx-3 font-Caveat">
                <div dangerouslySetInnerHTML={createMarkup(data.description)}/>
                </div>
                <br></br>
                <Link href={data.link} className=" mt-6 py-2 px-4 text-center bg-gray-700 text-white">
                  View
                </Link>
              </div>
            </section>
            </main>
        </>
      )}
    </>
  );
}
