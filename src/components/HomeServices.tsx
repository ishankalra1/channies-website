import React from 'react';
import { HandCoins, BadgeDollarSign, ShieldCheck, Handshake } from 'lucide-react';
const ServicesPlan = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="responsive-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <HandCoins className='w-12 h-12' />
                            </div>
                            <div>
                                <h3 className="text-[18px] font-medium">Tailored Financial Solutions</h3>
                                <p className="text-[#727272] font-sans mt-3 text-[14px]">
                                    We craft customized plans to align with your goals, values, and future vision.
                                </p>
                                <p className="text-[#727272] font-sans text-[14px]">
                                    Your path to financial freedom starts with a strategy designed just for you.
                                </p>
                            </div>
                        </div>
                    </div>

                     <div className="">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <BadgeDollarSign className='w-12 h-12' />
                            </div>
                            <div>
                                <h3 className="text-[18px] font-medium">Empowering Financial Literacy</h3>
                                <p className="text-[#727272] font-sans mt-3 text-[14px]">
                                    We believe that knowledge builds confidence.
                                </p>
                                <p className="text-[#727272] font-sans text-[14px]">
                                    Through simple conversations, we make finances easy to understand.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <ShieldCheck className='w-12 h-12' />
                            </div>
                            <div>
                                <h3 className="text-[18px] font-medium">Smart Protection & Planning</h3>
                                <p className="text-[#727272] font-sans mt-3 text-[14px]">
                                    Safeguard your income, family, and legacy with well-rounded strategies.
                                </p>
                                <p className="text-[#727272] font-sans text-[14px]">
                                    Plan today to protect what matters tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className='flex gap-8'>
                            <div className='text-primary'>
                                <Handshake className='w-12 h-12' />
                            </div>
                            <div>
                                <h3 className="text-[18px] font-medium">Lifelong Partnership</h3>
                                <p className="text-[#727272] font-sans mt-3 text-[14px]">
                                    More than just advisors—we’re your financial partners.
                                </p>
                                <p className="text-[#727272] font-sans text-[14px]">
                                    As life changes, we adapt your plan together.
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