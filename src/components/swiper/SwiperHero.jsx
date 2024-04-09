import { Swiper, SwiperSlide } from "swiper/react";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";

import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";

const SwiperHero = () => {
  return (
    <>
      
        <Swiper
          grabCursor={true}
          effect={"creative"}
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
          modules={[Autoplay, Pagination, EffectCreative]}
          loop={true}
          className="mySwiper mt-10 rounded-lg lg:h-[70vh] w-[100%] mx-auto"
        >
          <SwiperSlide>
            <div>
              <img src={img4} alt="Slide 5" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img src={img5} alt="Slide 5" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img6} alt="Slide 6" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img7} alt="Slide 7" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img8} alt="Slide 8" />
            </div>
          </SwiperSlide>
        </Swiper>
      
    </>
  );
};

export default SwiperHero;
