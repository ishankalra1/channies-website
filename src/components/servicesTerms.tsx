import React from 'react';
import Image from 'next/image';

const ServicesTerms = () => {
    return (
        <div className="w-full bg-[#f5f5f5] py-16 md:py-24">
            <div className="responsive-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 md:h-96 lg:h-[500px]  overflow-hidden">
                        <Image
                            src="/images/removerbg-logo.png"
                            alt="About our company"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Text Container - Right Side */}
                    <div className="space-y-6">
                        <h2 className="font-bold lg:text-[35px] font-Montserrat text-[24px] leading-[30px] md:leading-none">
                            Your Legacy, Your Terms
                        </h2>

                        <div className="">
                            <p className='text-[#272727] font-OpenSans text-[16px]'>
                                We offer more than just financial advice — we provide clarity, confidence, and a clear path forward. At Legacy Wealth Redefined, we believe your finances should serve your life, not the other way around. That’s why we take the time to understand what matters most to you — your goals, your family, your future. From building wealth to protecting what you’ve earned, we’re here to help you make smart decisions that reflect your values and support your vision of a meaningful legacy.
                            </p>

                            <div className='mt-6 text-[#727272] font-OpenSans text-[14px]'>
                                <p>
                                    Our services are designed to meet you where you are — and grow with you as life changes.
                                    Whether you're just starting out, building your wealth, or thinking ahead to the next generation, we’re here to help make each step easier and clearer.
                                </p>
                                <p className='mt-4 mb-2'>
                                    We specialize in:
                                </p>
                                <ul className="space-y-3">
                                    <li>
                                        <span className="font-bold text-black">Retirement Planning:</span> Prepare for the future you want, with peace of mind.
                                    </li>
                                    <li>
                                        <span className="font-bold text-black">Wealth Management:</span> Grow and manage your money with strategies built just for you.
                                    </li>
                                    <li>
                                        <span className="font-bold text-black">Estate Planning:</span> Make sure your legacy is protected and passed on the way you intend.
                                    </li>
                                    <li>
                                        <span className="font-bold text-black">Tax Planning:</span> Find smart, simple ways to keep more of what you earn.
                                    </li>
                                    <li>
                                        <span className="font-bold text-black">Risk Management:</span> Protect what matters — your income, your family, your future.
                                    </li>
                                    <li>
                                        <span className="font-bold text-black">Financial Education:</span> We explain everything in easy-to-understand terms, so you always feel confident in your decisions.
                                    </li>
                                </ul>
                                <p className='my-3'>
                                    With us, it’s not about complicated charts or confusing terms — it’s about real conversations, thoughtful planning, and long-term support you can count on.
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesTerms;