import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperComp(props) {
    return(        
        <Swiper
        // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
         {props.data.map((article, index) => {
             return (
                 <SwiperSlide key={index} className="p-5 flex flex-col gap-3">
                <div className="w-full bg-contain object-contain">
                <Image
                    src={article.photo}
                    width={200}
                    height={400}
                    alt={article.name}
                    className="w-full h-[300px] object-cover"                    
                    />
                <h1 className="font-semibold text-xl mt-5">{article.name}</h1>
                <p>{article.desc}</p>
                </div>
                {/* <Link href={article.src} className="font-semibold">Read More</Link> */}
            </SwiperSlide>
            )
        })}
      
    </Swiper>
        )
    }