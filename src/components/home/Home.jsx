/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { useLoaderData } from "react-router-dom";
import SwiperHero from "../swiper/SwiperHero";
import Card from "../realEstateCard/Card";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";

const Home = () => {
  const allResidential = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>New Home-Home</title>
      </Helmet>
      <div className="mt-10 relative">
        <SwiperHero></SwiperHero>
        <div>
          <div className="absolute top-[120px] left-[25%] w-2/4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            sequi iste illum accusamus nostrum laudantium soluta quos
            perferendis saepe quas.
          </div>
=======


const Home = () => {

    const allResidential = useLoaderData();
    console.log(allResidential);

    return (
        <div className="">
            <SwiperHero></SwiperHero>


            <div className="bg-white rounded-lg py-10 mt-14">
                <div className="text-center ">
                    <h1 className="md:text-4xl text-2xl  font-bold">Our choice of
                        popular real estate</h1>
                </div>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10 xl:px-20 md:px-10 px-5">
                    {
                        allResidential.map(card => (
                            <Card key={card.id} card={card}></Card>
                        ))
                    }
                </div>
            </div>

>>>>>>> origin/main
        </div>
      </div>

      <div className=" rounded-lg py-10 md:mt-14">
        <div className="text-center ">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="md:text-4xl text-2xl  font-bold"
          >
            Our Choice Of Popular Residential
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="my-3 text-[#0000008f w-3/4 mx-auto"
          >
            "Top Picks for Living" - Our curated selection highlights prime
            residential locales, emphasizing convenience, security, and quality
            amenities, ensuring an optimal living experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10 xl:px-20 md:px-10 px-5">
          {allResidential.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
