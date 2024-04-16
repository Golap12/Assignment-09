import about from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div className=" p-5 mt-5">
      <h1 className="text-2xl md:text-4xl font-bold text-center">About Us</h1>
      <div className="border w-1/4 mx-auto"></div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center p-5 mt-10">


      <div className="flex-1">
          <img className="rounded-xl" src={about} alt="" />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl font-bold">
            Discover your dream home with us. From city apartments to suburban estates, find your perfect place to live today
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-5 md:gap-10 p-5 mt-10">
        <div className="flex-1">
          <p>
            Welcome to <strong>New Home</strong>, where we believe in
            transforming your dreams into tangible realities. With a passion for
            real estate and a commitment to exceptional service, we are
            dedicated to guiding you through every step of your property
            journey.
          </p>

          <p>
            At <strong>New Home</strong>, we understand that buying, selling, or
            renting a property can be one of the most significant decisions in
            your life. That is why we are here to provide you with the
            expertise, support, and personalized attention you deserve.
          </p>

          <p>
            Our team consists of seasoned professionals who bring a wealth of
            experience and knowledge to the table. From skilled real estate
            agents to dedicated administrative staff, each member of our team is
            committed to exceeding your expectations and ensuring your
            satisfaction.
          </p>

          <p>Contact us today to get started on your real estate journey!</p>
        </div>



        <div className="flex-1">
        <section className="p-6 bg-slate-100 rounded-xl">
	<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
			<p className="text-sm sm:text-base">Clients</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
			<p className="text-sm sm:text-base">Followers on social media</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
			<p className="text-sm sm:text-base">Published books</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
			<p className="text-sm sm:text-base">TED talks</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
			<p className="text-sm sm:text-base">Years of experience</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
			<p className="text-sm sm:text-base">Workshops</p>
		</div>
	</div>
</section>
        </div>
      </div>
    </div>
  );
};

export default About;
