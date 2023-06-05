"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { data } from "autoprefixer";
import axios from "axios";
import Image from "next/image";
import { useState,useEffect } from "react";

export default function ArticlesPage({ params }) {
    const slug = params.slug;
    const [data, setData] = useState();
    const [data2, setData2] = useState();
    const [Loading, setLoading] = useState(true);
    const [Loading2, setLoading2] = useState(true);
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://rest.1010-group.com/articles/article/`+slug);
                const result = response.data.data;
                setData(result);
                console.log(result)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        // const getData2 = async () => {
        //     try {
        //         setLoading2(true);
        //         const response = await axios.get("https://rest.1010-group.com/galery");
        //         const result = response.data.data;
        //         setData2(result);
        //         // console.log(data2)
        //     } catch (error) {
        //         console.log(error);
        //     } finally {
        //         setLoading2(false);
        //     }
        // };
        getData();
        // getData2();
    }, []);
    return (
        <>
            <div className="nav-bg flex relative top-0 left-0 h-[100px] w-full items-center bg-no-repeat justify-center bg-center bg-cover"></div>
            <Nav id="article" />
            <main className="w-[90%] mx-auto relative">
                {!Loading ? (
                    <>
                    <div className="hero flex justify-around items-center gap-10 p-10 mx-auto">
                    <Image 
                        src={`https://rest.1010-group.com/article/${data.image}`}
                        width={600}
                        height={200}
                        alt="detail article img"
                    />
                    <div className="title flex flex-col items-start gap-5 flex-grow-[25%]">
                        <h3 className="text-4xl font-semibold ">
                        {data.title} 
                        </h3>
                        {data.description}                       
                        <h3>Gallery | <span className="font-semibold">10/10 Group</span></h3>
                        <button className="px-5 py-3 text-[15px] bg-transparent border">Book Now</button>
                    </div>
                </div>
  
                <div className="copyright absolute right-2 bottom-10">
                    <p>copyright</p>
                    <Image 
                        src="/images/logo/1010-hitam.png"
                        width={150}
                        height={50}
                        alt="copyright 1010"
                        className="py-5"
                    />
                </div>
                    </>
                ):""
                    }
            </main>
                <Image
                    src="/images/logo/detail-bg.png"
                    width={1000}
                    height={400}
                    className="w-screen"
                    alt="detail article img"
                />
                <div className="hot mt-[-300px] pb-24">
                    <h1 className="font-extrabold text-4xl p-10 px-20 text-white">OTHER ARTICLES THIS MONTH</h1>
                     <div className="gap-3 ml-10 flex-wrap pb-20" >

                     <Card link={"sirloin"} />         
                  </div>
                        
                </div>
        </>
    )
}