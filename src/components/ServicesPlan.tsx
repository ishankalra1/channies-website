import React from 'react';
import { Telescope, SearchCheck, Brain, BellElectric, Shield, MapPinHouse } from 'lucide-react';
const ServicesPlan = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="responsive-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-bold lg:text-[35px] font-Montserrat text-[24px] leading-[30px] md:leading-none">
                        Who we are and what we do for successful business
                    </h2>
                    <p className="text-[#272727] w-[90%] md:w-[70%] xl:w-[80%]  mx-auto mt-6">
                        Present mailts commodo augue Aliquam ornare hendrerit augue Cras telles in pubriar lectus a est Cunabunt egot orci Cras laoneri lugua. Eliam sit amet dolor Vestibulum ante ipsum primis in faucibus orci tuctus et ultrices posuere cuchib Cruae Nullam tellus diam volutpat.
                    </p>
                </div>

                <div className="border-t border-gray-300 w-20 mx-auto my-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="pb-8">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <Telescope className='w-12 h-12' />
                            </div>
                            <div>
                                <h2 className="text-[18px] text-primary font-normal">Discovery</h2>
                                <h3 className="text-[18px] font-medium">CLARIFYING YOUR WHY</h3>
                                <p className="text-[#727272] font-sans mt-3">
                                    We begin with deep conversations to understand your values, lifestyle, and vision for the future. This step lays the foundation for everything that follows.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <SearchCheck className='w-12 h-12' />
                            </div>
                            <div>
                                <h2 className="text-[18px] text-primary font-normal">Exploration</h2>
                                <h3 className="text-[18px] font-medium">UNDERSTANDING YOUR OPTIONS</h3>
                                <p className="text-[#727272] font-sans mt-3">
                                    We map out the possibilities and walk you through potential paths — from investment opportunities to insurance solutions — tailored to your life stage and goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <Brain className='w-12 h-12' />
                            </div>
                            <div>
                                <h2 className="text-[18px] text-primary font-normal">Strategy</h2>
                                <h3 className="text-[18px] font-medium">BUILDING A PLAN THAT FITS</h3>
                                <p className="text-[#727272] font-sans mt-3">
                                    Using what we've learned, we create a custom financial strategy that aligns with your objectives and helps you move toward financial freedom.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <BellElectric className='w-12 h-12' />
                            </div>
                            <div>
                                <h2 className="text-[18px] text-primary font-normal">Attack</h2>
                                <h3 className="text-[18px] font-medium">ACTIVATING YOUR PLAN</h3>
                                <p className="text-[#727272] font-sans mt-3">
                                    This is where we take action — implementing smart financial tools, allocating resources, and moving step-by-step toward your financial goals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <Shield className='w-12 h-12' />
                            </div>
                            <div>
                                <h2 className="text-[18px] text-primary font-normal">Fortify</h2>
                                <h3 className="text-[18px] font-medium">PROTECTING WHAT YOU'VE BUILT</h3>
                                <p className="text-[#727272] font-sans mt-3">
                                    Through risk management, insurance planning, and regular reviews, we ensure your foundation stays strong even in uncertain times.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pb-8">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <MapPinHouse className='w-12 h-12' />
                            </div>
                            <div>
                                <h2 className="text-[18px] text-primary font-normal">Adapt</h2>
                                <h3 className="text-[18px] font-medium">EVOLVING AS LIFE CHANGES</h3>
                                <p className="text-[#727272] font-sans mt-3">
                                    We stay in touch, checking in regularly and adjusting your plan as your life, family, and financial needs evolve.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPlan;