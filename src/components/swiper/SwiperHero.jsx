import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.jpg";

import { Autoplay, Pagination, EffectCreative} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/bundle";


const SwiperHero = () => {
    return (
        <>
            <Swiper
             grabCursor={true}
             effect={'creative'}
             creativeEffect={{
               prev: {
                 shadow: true,
                 translate: [0, 0, -400],
               },
               next: {
                 translate: ['100%', 0, 0],
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
            
             className="mySwiper rounded-lg">
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img1} alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img2} alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img3} alt="Slide 3" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img4} alt="Slide 4" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img5} alt="Slide 5" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img6} alt="Slide 6" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img7} alt="Slide 7" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img8} alt="Slide 8" /></SwiperSlide>
            <SwiperSlide><img className=" lg:h-[80vh] w-[100%]" src={img9} alt="Slide 9" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperHero;