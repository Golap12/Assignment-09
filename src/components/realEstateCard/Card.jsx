/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { Link } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

const Card = ({ card }) => {
  const {
    segment_name,
    description,
    price,
    status,
    area,
    bedrooms,
    bathrooms,
    image,
  } = card;

  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="bg-white flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="p-2 ">
        <img  className="w-full rounded-xl" src={image} alt="" />
      </div>

      <div className="p-3 flex flex-col gap-2 ">
        <div className="flex justify-between items-center">
          <p className="text-xl text-[#08CCC4] font-bold">Price: {price}</p>
          <p className="text-[#00000095] font-medium">Stutus : [{status}]</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-600">{segment_name}</h2>
        <p className="text-[#00000068]">{description.slice(0, 60)}...<span className="text-[#08CCC4] cursor-pointer">Read More</span></p>

        <div className="flex gap-5 text-[#00000068]">
          <div>
            <div className="flex gap-2">
              <span>
                <MdOutlineBedroomParent color='#08CCC4' size={20} />
              </span>
              <span>{bedrooms}</span>
            </div>
            Bedrooms
          </div>

          <div className="border"></div>

          <div>
            <div className="flex gap-2">
              <span>
                <MdOutlineBathroom color='#08CCC4' size={20} />
              </span>
              <span>{bathrooms}</span>
            </div>
            Bathrooms
          </div>

          <div className="border"></div>

          <div>
            <div className="flex gap-2 flex-col">
              <span>
                <FaRegSquareFull color='#08CCC4' size={15} />
              </span>
              <span>{area}</span>
            </div>
          </div>
          
        </div>

        <hr />

        <div className="flex justify-center items-center">
          <AwesomeButton type="twitter">
            <Link to={`/details/${card.id}`}>
              <p>View Property</p>
            </Link>
          </AwesomeButton>
        </div>

      </div>
    </div>
  );
};

export default Card;
