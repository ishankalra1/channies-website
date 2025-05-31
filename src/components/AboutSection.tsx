import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24">
            <div className="responsive-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="relative h-80 md:h-96 lg:h-[500px]  overflow-hidden">
                        <Image
                            src="/images/p1.jpg" 
                            alt="Channie Nak, Founder of Legacy Wealth Redefined"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="space-y-6">
                        <h2 className="font-bold text-[35px] font-Montserrat">
                            Meet Channie Nak
                        </h2>
                        <p className=" text-[#272727] font-OpenSans text-[14px]">
                            A financial strategist with a teacher’s heart and a deep commitment to helping others grow.
                        </p>
                        <p className="text-[#727272] font-OpenSans text-[14px]">
                            Channie Nak is the founder of Legacy Wealth Redefined and a woman who wears many hats — educator, financial guide, wife, and mother. With nearly twenty years of experience in teaching and coaching, she brings not just technical knowledge, but a genuine passion for empowering people. Her journey into finance wasn’t born from numbers, but from a desire to help individuals and families feel safe, confident, and equipped to build lives they’re proud of. Channie takes time to listen, understand, and walk beside her clients. For her, financial strategy isn’t about charts or checklists — it’s about real people and the futures they dream of. Every plan she crafts is personal, intentional, and designed to grow with you.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;