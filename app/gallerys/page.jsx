'use client'
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import axios from "axios";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Autoplay} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import '../gal.css'

export default function GallerysPage() {
  const [photos, setPhotos] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [count,setCount]=useState(0)
  const [length,setLength]=useState(0)
  const onChangeHandler=()=>{
    if(count<length-1){
      setCount(count+1)
    }else{
      setCount(0)
    }
  }
  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://rest.1010-group.com/galery?page=${currentPage}`
        );
        const data = response.data;
        setPhotos(data);
        setLength(data.data.data.length)
        setCount(data.data.data.length-1)
        setTotalPages(data.data.last_page);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
          }`}
        >
          {i}
        </button>
      );
    }
    return pagination;
  };

  return (
      <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div
            className="flex relative top-0 left-0 lg:h-[1000px] h-screen w-full items-center bg-no-repeat justify-center bg-center bg-cover rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url("https://rest.1010-group.com/images/${photos?.data?.data[count].name}")`,
            }}
          >
            <div className="w-full">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 40,
                  modifier: 20,
                  slideShadows: false,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay, EffectCoverflow]}
                className="swiper_container"
                onSlideChange={onChangeHandler}
              >
                {photos?.data?.data?.map((photo, index) => (
                  <SwiperSlide key={index} >
                    <img
                      key={index}
                      src={`https://rest.1010-group.com/images/${photo.name}`}
                      alt={photo.name}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <Nav />
        </>
      )}
    </>
  );
}
