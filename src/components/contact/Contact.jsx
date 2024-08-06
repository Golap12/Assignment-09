/* eslint-disable react/no-unescaped-entities */
import contact from "../../assets/images/contact.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
AOS.init();


const Contact = () => {
  return (
    <div className="mt-10">
      <Helmet>
        <title>PropertyPulse | Contact</title>
      </Helmet>
      <h1 data-aos="flip-up"
        data-aos-duration="1000" className="text-2xl md:text-4xl font-bold text-center text-[#1f6b69]">Contact Us</h1>
      <div className="border w-1/4 mx-auto mt-3"></div>

      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div data-aos="zoom-out-right"
              data-aos-duration="1000" className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-[#1f6b69]">
              Let's talk!
            </h2>
          </div>
          <img src={contact} alt="" className="p-6 h-52 md:h-64" />
        </div>

        <form data-aos="zoom-in-left"
              data-aos-duration="1000" noValidate="" className="space-y-6 bg-[#148b8724] p-10 rounded-lg animate-fade-in">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-2 rounded border"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded border"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-2 rounded border"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-sm font-bold tracking-wide uppercase rounded text-white bg-[#1f6b69] transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
