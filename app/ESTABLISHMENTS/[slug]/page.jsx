"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Nav from "@/components/Nav";

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
          <div className="flex relative top-0 left-0  h-[70vh] w-full items-center bg-no-repeat justify-center bg-center bg-cover" style={{ backgroundImage: `url("https://rest.1010-group.com/outlate/img/${data.image2}")` }}>
          </div>
          <Nav />
          <main className="flex flex-col items-center justify-center bg-black py-10">
            <section className="flex justify-center items-center text-white">
              <div className="">
                <h1 className="text-3xl  text-center mt-2 font-josefin">{data.name.toUpperCase()}</h1>
                <div className="flex justify-center items-center">
                <div className="w-1/2">
                  <div dangerouslySetInnerHTML={createMarkup(data.description)} />
                </div>
                </div>
                <br></br>
                <div className="flex justify-center items-center ">
                  <div className="h-10 w-40 border-2 border-white flex justify-center items-center">
                    <Link href={data.link} className="text-sm text-center text-white uppercase">
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
