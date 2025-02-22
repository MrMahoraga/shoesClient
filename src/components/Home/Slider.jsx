import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Banner1 from '../../assets/Banner/Banner1.jpg';
import Banner2 from '../../assets/Banner/Banner2.jpg';
import Banner3 from '../../assets/Banner/Banner3.jpg';

const images = [Banner1,
  'https://i.pinimg.com/736x/fb/26/c6/fb26c6857a13cde8de3c7bb2d5827699.jpg',
  Banner2,Banner3];

export default function Slider() {
  return (
    <div className="mt-5">
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-[500px] rounded-lg shadow-lg"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
}
