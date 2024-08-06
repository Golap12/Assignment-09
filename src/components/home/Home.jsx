/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { useLoaderData } from "react-router-dom";
import SwiperHero from "../swiper/SwiperHero";
import Card from "../realEstateCard/Card";
import { Helmet } from "react-helmet-async";
import Testimonial from "../testimonial/Testimonial";
import Faq from "../faq/Faq";

const Home = () => {
  const allResidential = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>PropertyPulse | Home</title>
      </Helmet>

      
      <div className="mt-10 relative">
        <SwiperHero></SwiperHero>
        <div className="absolute md:top-[100px] top-[100px] md:left-[10%] left-[5%] md:w-3/4 w-[90%] duration-300  ">
          <h1 data-aos="fade-down" data-aos-duration="1000" className="xl:text-5xl lg:text-4xl md:text-3xl text-3xl font-extrabold md:w-2/4 text-[#4dece6] w-full">
            Welcome to Your Dream Home
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" className="mt-5 text-[#ffffffb6] lg:w-2/4">
            Find the perfect property for your lifestyle and create lasting
            memories. Whether you're seeking a cozy apartment in the heart of
            the city or a luxurious villa overlooking the ocean, we have
            something for everyone. Let us help you find your ideal home sweet
            home.
          </p>
          <button data-aos="zoom-out-up" data-aos-duration="1000" className="duration-200 px-4 py-2 text-white bg-[#1f6b69] hover:bg-[#133332]  font-medium text-lg mt-5 rounded-lg">
            <a href="#card">View Properties</a>
          </button>
        </div>
      </div>

      <div id="card" className=" rounded-lg py-5 md:mt-16 mt-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center "
        >
          <h1 className="lg:text-4xl text-2xl  font-bold text-[#1f6b69]">
            Our Choice Of Popular Residential
          </h1>
          <p className="my-3 md:w-3/4 mx-auto text-[#1f6b69bc]">
            "Top Picks for Living" - Our curated selection highlights prime
            residential locales, emphasizing convenience, security, and quality
            amenities, ensuring an optimal living experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5 p-5 rounded-xl">
          {allResidential.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>

      <div>
        <Testimonial></Testimonial>
      </div>


      <div>
        <Faq></Faq>
      </div>

    </div>
  );
};

export default Home;
