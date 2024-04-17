import { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'How to schedule a property viewing?',
            answer: 'To schedule a property viewing, simply browse our listings and select the property you are interested in. Then, click on the "Schedule Viewing" button and fill out the form with your preferred date and time. Our team will get back to you to confirm the appointment.',
            open: false
        },
        {
            question: 'What are the steps to submit an offer?',
            answer: 'Submitting an offer is easy! Once you have found a property you love, click on the "Make an Offer" button on the property listing page. Fill out the required details and submit your offer. Our agents will review it and get in touch with you to discuss further.',
            open: false
        },
        {
            question: 'How can I request more information about a property?',
            answer: 'If you need more information about a property, simply click on the "Request Info" button on the property listing page. Fill out the form with your questions or specific information you are seeking, and our team will promptly provide you with the details you need.',
            open: false
        },
        {
            question: 'What are the financing options available?',
            answer: 'We offer a variety of financing options to suit your needs. Whether you are looking for a mortgage or other financing solutions, our team of experts is here to assist you. Simply reach out to us through our contact page, and we will guide you through the available options.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section data-aos="zoom-in"
        data-aos-duration="1000" className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-[#1f6b69] sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-[#1f6b69bc]">Explore some common questions below to get answers about our services.</p>
                </div>

                <div  className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Didn’t find the answer you are looking for? <a href="#" title="" className="font-medium text-[#1f6b69] transition-all duration-200 hover:text-[#183837] focus:text-[#275a57] hover:underline">Contact our support</a></p>
            </div>
        </section>
    );
}

export default Faq;