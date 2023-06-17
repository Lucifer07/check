import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export default function ImageComp(props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={props.isMobile ? 3 : 5}
      navigation
      scrollbar={{ draggable: true }}
    >
      {props.datas.map((gallery, key) => (
        <SwiperSlide key={key} className="p-5 flex flex-col gap-3">
          <div key={key} className="w-full bg-contain object-contain">
            <img
              src={`https://rest.1010-group.com/images/${gallery.name}`}
              alt={gallery.name}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
