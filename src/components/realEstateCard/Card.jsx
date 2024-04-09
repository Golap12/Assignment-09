/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
import { AwesomeButton } from 'react-awesome-button';
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
    <div className="flex flex-col gap-5 rounded-lg shadow-[0px_0px_6px_1px_#00000024] ">
      <div className="p-2 ">
        <img  className="w-full rounded-lg" src={image} alt="" />
      </div>

      <div className="p-3 flex flex-col gap-5 ">
        <div className="flex justify-between items-center">
          <p className="text-xl text-cyan-600 font-bold">Price: {price}</p>
          <p className="text-2xl text-[#852095] font-bold">{status}</p>
        </div>

        <h2 className="text-2xl font-bold text-black">{segment_name}</h2>
        <p className="text-[#00000068]">{description}</p>

        <div className="flex gap-5 text-[#00000068]">
          <div>
            <div className="flex gap-2">
              <span>
                <MdOutlineBedroomParent size={20} />
              </span>
              <span>{bedrooms}</span>
            </div>
            Bedrooms
          </div>

          <div className="border"></div>

          <div>
            <div className="flex gap-2">
              <span>
                <MdOutlineBathroom size={20} />
              </span>
              <span>{bathrooms}</span>
            </div>
            Bathrooms
          </div>

          <div className="border"></div>

          <div>
            <div className="flex flex-col">
              <span>
                <FaRegSquareFull size={15} />
              </span>
              <span>{area}</span>
            </div>
          </div>
          
        </div>

        <hr />

        <div className="">
          

          <AwesomeButton type="secondary">
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
