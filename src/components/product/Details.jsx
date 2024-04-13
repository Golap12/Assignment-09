/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { AwesomeButton } from 'react-awesome-button';
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Details = () => {
  
  const { id } = useParams();
  const idConvert = parseInt(id);
  const cardDetails = useLoaderData();

  const data = cardDetails.find((item) => item.id === idConvert);
  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    bedrooms,
    bathrooms,
  } = data;


  return (
    <div className="mt-10 px-5 space-y-5">
      <Helmet>
        <title>New Home-Details</title>
      </Helmet>

        {/* title */}
      <div className="md:flex justify-between items-center">
        <div className="space-y-3">
          <p className="md:text-4xl text-xl font-extrabold">{estate_title}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <p className="flex gap-2">
              <MdOutlineBedroomParent
                color="#08CCC4"
                size={20}
              ></MdOutlineBedroomParent>
              <span>{bedrooms}</span>
              <span>Bedrooms</span>
            </p>
            <div className="border border-gray-500 h-[20px] mx-2"></div>
            <p className="flex gap-2">
              <MdOutlineBathroom color="#08CCC4" size={20}></MdOutlineBathroom>
              <span>{bathrooms}</span>
              <span>Bathroom</span>
            </p>
            <div className="border border-gray-500 h-[20px] mx-2"></div>
            <p className="font-bold">{segment_name}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-3">
            <span className="cursor-pointer">
              <FaRegShareSquare size={20}></FaRegShareSquare>
            </span>
            <span className="cursor-pointer">
              <FaRegStar size={20}></FaRegStar>
            </span>

        </div>
      </div>

        {/* image */}
        <div className="md:h-[500px] grid grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-2 border p-2">
          <div className="md:col-span-3 col-span-2 md:row-span-2 overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>

          <div className="md:col-span-2 overflow-hidden">
            <img className=" w-full h-full object-cover" src={image} alt="" />
          </div>

          <div className="md:col-span-2 overflow-hidden">
            <img className=" w-full h-full object-cover" src={image} alt="" />
          </div>
        </div>

       <div className="md:flex space-y-5 md:space-y-0 gap-5">


          <div className="description p-5 flex-1">
               {/* description */}
        <div>
          <p className="text-2xl font-bold mb-2">
            Property Description
          </p>
          <p>{description}</p>
        </div>
        <p className="font-semibold text-[#08CCC4] cursor-pointer">Read More ...</p>

        <hr className="my-5" />

        {/* Property feature */}
        
        <div>
          <div className="mb-2">
            <h1 className="text-2xl font-bold">Property Feature</h1>
          </div>
        <div className="flex gap-10">
          <div className="space-y-3">
            <p>Price : </p>
            <p>Status : </p>
            <p>Area : </p>
            <p>Location :</p>
          </div>
          <div className="space-y-3">
            <p>{price}</p>
            <p>{status}</p>
            <p>{area}</p>
            <p>{location}</p>
          </div>
        </div>
        </div>
        <p className="font-semibold text-[#08CCC4] cursor-pointer">See More Feature ...</p>
        <hr className="my-5" />


        {/* Our Facilities */}
        <div>
          <h1 className="text-2xl font-bold">Our Facilities</h1>
          <div className="">
            {facilities.map((item, idx) => (
              <li className="uppercase my-2 ml-5" key={idx}>
                {item}
              </li>
            ))}
          </div>
        </div>
        <hr className="my-5" />
          </div>


          <div className="bg-[#effbff] p-5 flex-1 flex flex-col items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            <h1 className="md:text-3xl text-xl font-bold text-[#08ccc4]">Get In Touch</h1>

             <div className="border border-dashed w-2/4 my-3"></div>

             <form className="card-body p-4 md:p-8 w-[100%]">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">NAME</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="border px-5 py-3 outline-none input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">EMAIL</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="border px-5 py-3 outline-none input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">MESSAGE</span>
                        </label>
                        <textarea placeholder="YOUR MESSAGE (OPTIONAL)" className="border outline-none textarea-bordered textarea-lg w-full resize-none" ></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <AwesomeButton  type="secondary"><p>SEND ENQUIRY</p></AwesomeButton>
                    </div>

                    <h3 className="text-center mt-5 text-xl font-semibold">SEND MESSAGE BY WHATSAPP</h3>
                    <div className="gap-2 border-2 border-[#08ccc4] mx-auto p-3 flex justify-center items-center">
                      <span><FaWhatsapp size={25} color="green"></FaWhatsapp></span>
                      <span className=" font-bold">01xxxxxxxxx</span>
                    </div>
                </form>

          </div>


       </div>

    </div>
  );
};

export default Details;
