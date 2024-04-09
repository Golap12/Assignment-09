/* eslint-disable react/no-unescaped-entities */

import { useLoaderData } from "react-router-dom";
import SwiperHero from "../swiper/SwiperHero";
import Card from "../realEstateCard/Card";


const Home = () => {

    const allResidential = useLoaderData();
    // console.log(allResidential);

    return (
        <div className="">
            <SwiperHero></SwiperHero>


            <div className=" rounded-lg py-10 mt-14">
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

        </div>
    );
};

export default Home;