import React from 'react';
import Image from 'next/image';

const AboutBusiness = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-[#101010]">
      <div className="responsive-container">
        {/* Grid container with image and text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className=" overflow-hidden">
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image
                src="/images/p2.jpg"
                alt="Business showcase"
                fill
                className="object-cover "
                priority
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <h2 className="font-bold text-[35px] font-Montserrat text-white">
              Family at the Heart of It All
            </h2>
            
            <p className="text-[#acacac] text-[22px] font-Montserrat">
              More Than a Business — It’s a Family-Rooted Mission
            </p>
            
            <div className="text-[#727272] font-OpenSans text-[14px]">
              <p className='text-[#727272] font-OpenSans text-[14px]'>
                Channie’s biggest inspiration? Her own family — a loving husband and four beautiful children who remind her every day why this work matters.
              </p>
              <p className='pt-4'>
                What drives Channie isn’t just a vision for financial growth — it’s a deep love for family and community. She understands the juggle of raising children, managing a household, and still wanting to plan for something bigger. That’s why she treats every client like family. She brings the same care, attention, and thoughtfulness to your financial journey that she brings to her own. Because at the end of the day, it’s not just about wealth — it’s about creating peace of mind, building strong foundations, and making sure your loved ones are protected and provided for. Her personal experience as a mother helps her connect with clients on a deeply human level — no judgment, just support and real conversations.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;