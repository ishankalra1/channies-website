import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Channie has been an outstanding resource when it comes to Finance and Retirement. She is very pleasant to talk to and makes sure to hear you out. She is very thorough and knows her stuff. I definitely recommend working with her and seeking her advice about personal finance.",
            author: "Dennis Florendo",
            role: "Manager",
            image: "/images/26.jpg"
        },
        {
            id: 2,
            quote: "Channie and I have been working together for many years. She will always work with you to create the best solution for your situation",
            author: "Valerie Rowe",
            role: "Developer",
            image: "/images/27.jpg"
        },
        {
            id: 3,
            quote: "I have worked with Channie for the past several years. In that time, she has assisted me with strategizing and building a sustainable retirement portfolio along with a proven ecosystem to be completely debt free within the next six years! I am very grateful to Channie and her team!",
            author: "Perry N",
            role: "Designer",
            image: "/images/28.jpg"
        },
        {
            id: 4,
            quote: "...Channie Nak is one of kindest, charismatic and most knowledgeable financial advisors I have worked with. I started working with Channie a little over a year ago now and it has been one of the best things that has happened for myself and my family in regard to debt management and financial planning for the future. Channie introduced us to some innovation debt management programs that have allowed us to have a very clear path on how we can accelerate getting out of debt while building wealth for the future at the same time...",
            author: "Ben",
            role: "Designer",
            image: "/images/28.jpg"
        },
        {
            id: 5,
            quote: "I am pleased to recommend Channie Nak for her exceptional work in the financial services and insurance sectors, particularly in the realm of non-traditional alternatives. I had the privilege of meeting Channie several years ago, when we worked in the same building. She always had a hunger for knowledge, and consistently demonstrated her deep understanding of innovative financial solutions...",
            author: "Lonnie Allen",
            role: "Designer",
            image: "/images/28.jpg"
        },
        {
            id: 6,
            quote: "Channie is one of the most professional, dynamic and talented financial specialist I have met in a long time. Her genuine concern for her clients and what's the best for them and her knowledge and experience in tax-free retirement options, makes her a much sought after advisor. She has an engaging presence about her and is the kind of professional that can give any client the confidence they need to make important financial decisions. | highly recommend Channie and it has been my joy to work with her in the recent months.",
            author: "Len Curtis",
            role: "Designer",
            image: "/images/28.jpg"
        },
        {
            id: 7,
            quote: "Channie is a great friend and client, She helped me with my finance and insurance by recommending products to grow my wealth, she is patient and understanding and answers all my questions! she explained the concept clearly too!!",
            author: "Ngoc Truong",
            role: "Designer",
            image: "/images/28.jpg"
        }
    ];

    return (
        <div className="relative py-32 overflow-hidden">
            <div
                className="absolute inset-0 z-0 bg-repeat"
                style={{
                    backgroundImage: "url('/images/pattren25.jpg')",
                    backgroundPosition: "0 0"
                }}
            />


            <div className="relative z-20 max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-[18px] mb-2">What our people and clients says</h1>
                    <h2 className="text-[24px] md:text-[35px] font-semibold leading-tight">Helping clients achieve peace of mind , through every financial milestone.</h2>
                </div>

                <div className="relative pb-20">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet bg-white border-2 border-primary w-3 h-3 mx-1",
                            bulletActiveClass: "swiper-pagination-bullet-active !bg-primary !w-3 !h-3",
                            el: ".testimonial-pagination",
                            type: "bullets"
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col border border-gray-200 text-center hover:-translate-y-5 transition-transform duration-400 ease-in-out justify-between items-center">
                                    {/* <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary mx-auto mb-6">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    </div> */}

                                    <div className="mb-4">
                                        <Image
                                            src="/images/29.png"
                                            alt="Quote Icon"
                                            width={40}
                                            height={40}
                                            className="mx-auto"
                                        />
                                    </div>

                                    <div className="mb-6 text-gray-600">
                                        <p className="text-[14px] text-gray-400 font-OpenSans">{testimonial.quote}</p>
                                    </div>

                                    <div className="mt-auto">
                                        <h4 className="text-[18px]">{testimonial.author}</h4>
                                        {/* <p className="text-primary font-OpenSans text-[14px]">{testimonial.role}</p> */}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="testimonial-pagination absolute bottom-0 left-0 right-0 flex justify-center mt-8 !h-4" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;