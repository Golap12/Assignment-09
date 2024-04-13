import { Swiper, SwiperSlide } from "swiper/react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";

import { Autoplay, Pagination, EffectCreative, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import "swiper/css";
import "swiper/css/bundle";

const SwiperHero = () => {
  return (
    <div data-aos="flip-up" data-aos-duration="1000" className="">
      <Swiper
        grabCursor={true}
        effect={"fade"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectCreative, EffectFade]}
        loop={true}
        className="mySwiper  w-[98%] h-[500px] rounded-"
      >
        <SwiperSlide className="">
          <div className=""
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img5})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: "WHITE",
              fontSize: "5rem",
            }}>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=""
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img6})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: "WHITE",
              fontSize: "5rem",
            }}>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=""
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: "WHITE",
              fontSize: "5rem",
            }}>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=""
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img7})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: "WHITE",
              fontSize: "5rem",
            }}>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=""
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img8})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: "WHITE",
              fontSize: "5rem",
            }}>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHero;
