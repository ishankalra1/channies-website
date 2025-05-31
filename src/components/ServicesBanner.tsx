import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesBanner = () => {
    return (
        <div className="relative w-full min-h-[500px] md:min-h-[600px]">
            <div className="absolute inset-0 z-0 bg-[url('/images/pattren37.png')] bg-repeat">
                <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-3/4">
                    <Image
                        src="/images/68.png"
                        alt="Service showcase"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                </div>
            </div>

            <div className="responsive-container relative z-10 h-full flex items-end">
                <div className="w-full flex justify-end">
                    <div className="w-full md:w-2/3 lg:w-4/6 xl:w-3/6 bg-white p-8 md:p-12 lg:p-16 xl:p-20 mb-8 mt-24 md:mb-16">
                        <h2 className="font-bold text-[35px] font-Montserrat leading-[35px]">
                            Empowering You to Achieve Financial Freedom
                        </h2>

                        <p className="text-[14px] text-[#727272] my-10">
                            Our tailored strategies help individuals and families build wealth with clarity, care, and confidence.

                        </p>

                        <div className='z-11 relative pt-5'>
                            <Link href="https://calendly.com/channienak" target='_blank' className='bg-[#101010] text-white rounded-[5px] px-10 py-3 '>
                                Start Your Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;