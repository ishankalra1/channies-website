import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="responsive-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


                    <div className="space-y-6">
                        <h2 className="font-bold text-[35px] font-Montserrat">
                            Mission & Vision
                        </h2>
                        <p className=" text-[22px] font-Montserrat">
                            Why We Exist and Where We're Going
                        </p>
                        <p className=" text-[#272727] font-OpenSans text-[14px]">
                            Money is personal — and our mission is to make sure you never have to navigate it alone.
                        </p>
                        <p className="text-[#727272] font-OpenSans text-[14px]">
                            At Legacy Wealth Redefined, our mission is simple but powerful:
                            To help everyday people make confident financial decisions, protect what matters most, and build legacies that reflect who they are and what they care about. We believe financial literacy is a right, not a privilege — and we’re here to guide you step by step, with honesty, education, and a strategy that fits your life.
                        </p>
                        <p className="text-[#727272] font-OpenSans text-[14px] pt-4">
                            Our vision is a world where families live with financial peace, not pressure.
                            Where people feel empowered to talk openly about money, plan with purpose, and pass down not just wealth — but wisdom. We dream of communities that are financially strong, emotionally secure, and future-focused. And we believe that starts with one conversation, one plan, and one person at a time.
                        </p>
                    </div>

                    <div className="relative h-80 md:h-96 lg:h-[500px]  overflow-hidden">
                        <Image
                            src="/images/removerbg-logo.png"
                            alt="Channie Nak, Founder of Legacy Wealth Redefined"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;