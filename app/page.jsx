"use client"
import Link from "next/link";
import Articles from "@/components/Articles";
import Nav from "@/components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/legacy/image";

export default function Home() {
  const [dataart, setDataart] = useState(null);
  const [loadingart, setLoadingart] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

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

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    getData();

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    if (dataart && dataart.data) {
      setTotalImages(dataart.data.length || 0);
    }
  }, [dataart]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === totalImages) {
      setLoadingart(false);
    }
  }, [imagesLoaded, totalImages]);

  return (
    <>
      <div className="flex relative top-0 left-0 h-[70vh] w-full items-center bg-no-repeat justify-center bg-center bg-cover -z-20 dashboard-bg"></div>
      <Nav id="Home" />
      <main className="bg-black">
        <div className="w-[90%] h-[50%] mx-auto">
          <div className="container mx-auto grid md:grid-cols-2 gap-8">
            <div className="text-md text-justify flex-col">
              <h1 className="text-base sm:text-md md:text-lg lg:text-xl xl:text-xl mx-6 pb-20 pt-20 uppercase text-white text-left">
                Bring an elevated casual lifestyle of dining experience by redefining the boundaries of expectations and exciting your sense
              </h1>
            </div>
            <p className="text-lg text-justify flex-col"></p>
          </div>
        </div>

        <div className="w-[90%] mx-auto pb-10">
          <Articles title="ESTABLISHMENTS" more={"no"} />
          {loadingart ? (
            <div className="flex h-screen items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-0 md:grid-cols-2 lg:grid-cols-5">
              {dataart &&
                dataart.data.map((item) => (
                  <Link key={item.id} href={"/ESTABLISHMENTS/" + item.slug}>
                    <div className="relative cursor-pointer aspect-w-3 aspect-h-2">
                      <div className="h-full w-full">
                        <Image
                          src={`https://rest.1010-group.com/outlate/${item.image}`}
                          alt={item.image}
                          layout="responsive"
                          width={3}
                          height={2}
                          objectFit="cover"
                          className="border-5 border-white"
                          onLoad={handleImageLoad}
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 transition-opacity duration-300">
                        <span className="text-white bg-black h-full w-full text-center flex items-center justify-center font-josefin uppercase">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}