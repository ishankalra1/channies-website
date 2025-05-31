import React from 'react';
import Image from 'next/image';
import { Eye, Mouse } from 'lucide-react';

const HomePageHero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div 
        className="absolute inset-0 z-0 bg-repeat"
        style={{
          backgroundImage: "url('/images/pattren37.png')",
          backgroundSize: 'auto'
        }}
      ></div>

      <div className="responsive-container relative z-10 h-full flex items-center py-20">
        <div className="w-full lg:grid lg:grid-cols-2 gap-8">
            <div className="relative h-80 lg:h-full overflow-hidden">
            <Image
              src="/images/40.png"
              alt="Content"
              fill
              className="object-contain"
            />
          </div>
          <div className="bg-primary shadow-xl p-8 md:p-10 xl:p-20 text-white">
            <h1 className="text-[20px] md:text-[24px] lg:text-[30px] xl:text-[35px] font-semibold mb-6">
              Building Legacies that Last
            </h1>
            
            <p className="mb-8">
              At Legacy Wealth Redefined, we don't just plan finances—we help you design a life. With a foundation rooted in education, trust, and personalized strategy, we walk with you through each stage of your financial journey. Whether it's building wealth, protecting assets, or preparing for retirement, we're here to support you with clarity and care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-2">
                <Mouse className="h-12 w-12 font-light mb-1 pl-3" />
                <h2 className="text-[18px] font-[500] mb-3 italic">Empowered Choices</h2>
                <p className="text-[14px]">
                  Education-driven advice to help you take control of your financial future.
                </p>
              </div>
              
              <div className="p-2">
                <Eye className="h-12 w-12 font-light mb-1 pl-3" />
                <h2 className="text-[18px] font-[500] mb-3 italic">Classic Styles</h2>
                <p className="text-[14px]">
                  Strategies crafted around what matters most to you.
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;