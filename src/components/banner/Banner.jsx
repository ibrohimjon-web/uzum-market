import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://images.uzum.uz/curc8h3vgbkm5ehfsp50/main_page_banner.jpg",
  "https://images.uzum.uz/curg006i4n32hnc2im20/main_page_banner.jpg",
  "https://images.uzum.uz/cuuosvtpb7f9qcnebk8g/main_page_banner.jpg",
];

const Banner = () => {
  return (
    <div className="banner-swiper">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Banner ${index + 1}`}
                className="banner-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
