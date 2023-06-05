import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
export default function ImageComp(props) {
    return (
        <>
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
              { props.datas.map((gallery, key) =>(
                <SwiperSlide key={key} className="p-5 flex flex-col gap-3">
                  <div key={key} className="w-full bg-contain object-contain">
            <Image
              src={`https://rest.1010-group.com/images/${gallery.name}`}
              alt={gallery.name}
              layout="responsive"
              width={400}
              height={300}
              objectFit="cover"
            />
            </div>
                </SwiperSlide>
              ))}
            </Swiper>
        </>
        )
}