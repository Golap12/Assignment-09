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
        <title>New Home-Home</title>
      </Helmet>

      
      <div className="md:mt-10 mt-[0.5rem] relative">
        <SwiperHero></SwiperHero>
        <div className="absolute md:top-[100px] top-[50px] left-[10%] md:w-3/4 w-3/4 duration-300  ">
          <h1 className="text-5xl font-extrabold md:w-2/4 text-white">
            Welcome to Your Dream Home
          </h1>
          <p className="mt-5 text-[#ffffffb6]">
            Find the perfect property for your lifestyle and create lasting
            memories. Whether you're seeking a cozy apartment in the heart of
            the city or a luxurious villa overlooking the ocean, we have
            something for everyone. Let us help you find your ideal home sweet
            home.
          </p>
          <button className="duration-200 px-4 py-2 text-white bg-[#1f6b69] hover:bg-[#133332]  font-medium text-lg mt-5 rounded-full">
            View Properties
          </button>
        </div>
      </div>

      <div className=" rounded-lg py-10 md:mt-14">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center "
        >
          <h1 className="lg:text-4xl text-2xl  font-bold ">
            Our Choice Of Popular Residential
          </h1>
          <p className="my-3 w-3/4 mx-auto">
            "Top Picks for Living" - Our curated selection highlights prime
            residential locales, emphasizing convenience, security, and quality
            amenities, ensuring an optimal living experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10 px-8">
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
