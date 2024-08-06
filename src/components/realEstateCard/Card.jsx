/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { CiLocationOn } from "react-icons/ci";

import { Link } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Card = ({ card }) => {
  const {
    segment_name,
    location,
    price,
    status,
    area,
    bedrooms,
    bathrooms,
    image,
  } = card;

  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      className="bg-white flex flex-col gap-2 shadow-lg rounded-lg md:p-4 p-2"
    >
      <div className="">
        <img className="w-full" src={image} alt="" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="text-xl text-[#1f6b69] font-bold">Price: {price}</p>
          <p className=" font-medium text-yellow-600">Stutus : [{status}]</p>
        </div>

        <div className="flex flex-col gap-2 mb-2 ">
          <h2 className="text-2xl font-bold ">{segment_name}</h2>
          <p className="text-sm flex gap-3 justify-start items-center">
            <span><CiLocationOn color="#1f6b69" size={20}></CiLocationOn></span>
            <span>{location}</span>
          </p>
        </div>

        <div className="flex gap-5 text-sm ">
          <div>
            <div className="flex gap-2">
              <span className="mb-2">
                <MdOutlineBedroomParent color="#1f6b69" size={20} />
              </span>
              <span>{bedrooms}</span>
            </div>
            Bedrooms
          </div>

          <div className="border"></div>

          <div>
            <div className="flex gap-2">
              <span className="mb-2">
                <MdOutlineBathroom color="#1f6b69" size={20} />
              </span>
              <span>{bathrooms}</span>
            </div>
            Bathrooms
          </div>

          <div className="border"></div>

          <div>
            <div className="flex gap-2 flex-col">
              <span className="mb-2">
                <FaRegSquareFull color="#1f6b69" size={15} />
              </span>
              <span>{area}</span>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex justify-between items-center">
          <div>
            <AwesomeButton type="primary">
              <Link to={`/details/${card.id}`}>
                <p>View Property</p>
              </Link>
            </AwesomeButton>
          </div>
          <div className="space-x-2">
            <button
              aria-label="Share this post"
              type="button"
              className="p-2 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-[#1f6b69]"
              >
                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
              </svg>
            </button>
            <button
              aria-label="Bookmark this post"
              type="button"
              className="p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current text-[#1f6b69]"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
