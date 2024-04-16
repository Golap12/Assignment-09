/* eslint-disable react/no-unescaped-entities */
import contact from "../../assets/images/contact.svg";

const Contact = () => {
  return (
    <div className="mt-10">
       <h1 className="text-2xl md:text-4xl font-bold text-center ">Contact Us</h1>
      <div className="border w-1/4 mx-auto"></div>

      <div className=" grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="">Vivamus in nisl metus? Phasellus.</div>
          </div>
          <img src={contact} alt="" className="p-6 h-52 md:h-64" />
        </div>
        <form noValidate="" className="space-y-6 bg-slate-100 p-10 rounded-lg">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-2 rounded  border "
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded  border "
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-2 rounded  border "
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 text-sm font-bold tracking-wide uppercase rounded bg-slate-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
