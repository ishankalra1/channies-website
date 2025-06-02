import React from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

const HomeLegacy = () => {
    return (
        <div className="w-full bg-primary py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Image on left - takes half width */}
                    <div className="w-full lg:w-1/2 relative h-64 lg:h-[500px] mb-8 lg:mb-0">
                        <Image
                            src="/images/removerbg-logo.png"
                            alt="Legacy Wealth"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>

                    {/* Text content on right with space from right */}
                    <div className="w-full lg:w-1/2 lg:pl-16 xl:pl-24">
                        <div className="bg-primary p-8 md:p-10 lg:p-12">
                            <h2 className="font-bold text-2xl md:text-3xl lg:text-[35px] leading-normal text-white">
                                Why Legacy Wealth Redefined?
                            </h2>

                            <p className="text-base md:text-[16px] py-6 md:py-10 text-white/90">
                                At Legacy Wealth Redefined, we believe that financial planning is about more than just numbers—it's about people, families, and futures. With nearly 20 years of experience, Channie Nak leads with both expertise and heart, offering customized strategies that align with your goals and values. Whether you're building a legacy, protecting your loved ones, or planning for retirement, we're here to walk with you every step of the way.
                            </p>

                            <Link 
                                href="/about-us" 
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#101010] transition-colors text-sm md:text-[14px] font-medium px-6 md:px-10 py-2 md:py-3 w-[200px] rounded-[5px] hover:bg-[#101010] hover:text-white"
                            >
                                <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
                                <span>READ MORE</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeLegacy;