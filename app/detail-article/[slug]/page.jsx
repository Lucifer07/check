"use client";
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
  const [dataOther, setDataOther] = useState();
  const [loading, setLoading] = useState(true);
  const [loadingOther, setLoadingOther] = useState(true);
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
        const response = await axios.get(`https://rest.1010-group.com/articles/article/${slug}`);
        const result = response.data.data;
        setData(result);

        setLoadingOther(true);
        let url = "";
        if (result.category === "silo") {
          url = `https://rest.1010-group.com/articles/othersArticle?product=silo&articlerelate=${slug}`;
        } else if (result.category === "sirloin") {
          url = `https://rest.1010-group.com/articles/othersArticle?product=sirloin&articlerelate=${slug}`;
        }
        const response2 = await axios.get(url);
        const result2 = response2.data.data.data;
        setDataOther(result2);
        setLoadingOther(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [slug]);

  return (
    <>
      <div className="nav-bg flex relative top-0 left-0 lg:h-[100px] h-16 w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
      <Nav id="article" />
      <main className="w-[90%] mx-auto relative">
        {!loading && (
          <>
            <div className="hero flex flex-col lg:flex-row justify-around items-center gap-5 p-10 mx-auto">
              <img
                src={`https://rest.1010-group.com/article/${data.image}`}
                width={500}
                height={200}
                alt="detail article img"
              />
              <div className="title flex flex-col items-start gap-5 flex-grow-[25%]">
                <h3 className="text-3xl font-semibold capitalize">
                  {data.title}
                </h3>
                <Description Content={data.description} />
                <h3>
                  Gallery | <span className="font-semibold">10/10 Group</span>
                </h3>
                <button className="px-5 py-3 text-[15px] bg-transparent border">
                  Book Now
                </button>
              </div>
            </div>

            <div className="copyright absolute right-2 bottom-10">
              <p>copyright</p>
              <img
                src="/images/logo/1010-hitam.png"
                width={150}
                height={50}
                alt="copyright 1010"
                className="py-5"
              />
            </div>
          </>
        )}
      </main>
      <img
        src="/images/logo/detail-bg.png"
        width={1000}
        height={400}
        className="w-screen"
        alt="detail article img"
      />
      <div className="hot mt-[-200px] lg:mt-[-300px] pb-24">
        <h1 className="font-extrabold text-2xl my-6 p-10 lg:text-4xl lg:p-10 lg:px-20 text-white ">
          OTHER ARTICLES THIS MONTH
        </h1>
        <div className="gap-3 ml-10 flex-wrap pb-20 mt-6">
          {!loadingOther && (
            <>
              <div className="mt-6">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  spaceBetween={10}
                  slidesPerView={isMobile ? 2 : 5}
                  navigation
                  scrollbar={{ draggable: true }}
                >
                  {dataOther.map((article, index) => (
                    <SwiperSlide
                      key={index}
                      className="p-5 flex flex-col gap-3"
                    >
                      <div className="w-full bg-contain object-contain">
                        <img
                          src={`https://rest.1010-group.com/article/${article.image}`}
                          width={200}
                          height={400}
                          alt={article.title}
                          className="w-full h-[200px] object-cover"
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
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
