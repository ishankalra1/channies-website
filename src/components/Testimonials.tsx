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
            quote: "Ett odo ext:vel eget consortium/ a/Boring eti Suspendisse et justo Presetent mesta commodo.",
            author: "Margaret",
            role: "Manager",
            image: "/images/26.jpg"
        },
        {
            id: 2,
            quote: "Elta odo ext:vel eget consortium/ a/Boring eti Suspendisse et justo Presetent mesta commodo.",
            author: "Matthew",
            role: "Developer",
            image: "/images/27.jpg"
        },
        {
            id: 3,
            quote: "Ett odo ext:vel eget consortium/ a/Boring eti Suspendisse et justo Presetent mesta commodo.",
            author: "Nicholas",
            role: "Designer",
            image: "/images/28.jpg"
        },
        {
            id: 4,
            quote: "Ett odo ext:vel eget consortium/ a/Boring eti Suspendisse et justo Presetent mesta commodo.",
            author: "Nicholas",
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
                    <h2 className="text-[24px] md:text-[35px] font-semibold leading-tight">Our Customers and people Says <br />we deliver quality products</h2>
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
                                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col border border-gray-200 text-center hover:-translate-y-5 transition-transform duration-400 ease-in-out">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary mx-auto mb-6">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

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
                                        <p className="text-primary font-OpenSans text-[14px]">{testimonial.role}</p>
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