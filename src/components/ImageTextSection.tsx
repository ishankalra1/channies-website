import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HorizontalSections = () => {
  const sections = [
    {
      image: '/images/1.jpg',
      title: 'Press Release',
      subtitle: 'Helping Families Build Lasting Wealth with Channie Nak',
      content: [
        'Featured in Grit Daily, Channie shares her mission to guide families toward financial freedom and generational security.'
      ],
      href: 'https://ceofficialmag.com/channie-nak-americans-take-control-of-wealth/'
    },
    {
      image: '/images/2.jpg',
      title: 'Press Release',
      subtitle: 'Channie Nak Empowers Americans to Take Control of Their Financial Future',
      content: [
        'In CEOFFICIALMAG, Channie discusses actionable strategies for building a strong and secure financial foundation.'
      ],
      href: 'https://gritdaily.com/channie-nak-helping-people-build-lasting-wealth/'
    }
  ];

  return (
    <div className="w-full">
      {/* Main container with two horizontal sections */}
      <div className="flex flex-col md:flex-row w-full">
        {sections.map((section, index) => (
          <div key={index} className="flex-1 flex flex-col lg:flex-row bg-[#1c1c1c] shadow-sm overflow-hidden">
            {/* Image - Full width on mobile, half width on desktop */}
            <div className="w-full md:w-2/2 h-[600px] lg:h-auto">
              <Image
                src={section.image}
                alt={section.title}
                width={600}
                height={400}
                className="w-full h-full lg:object-cover"
              />
            </div>
            
            {/* Content - Full width on mobile, half width on desktop */}
            <div className="w-full md:w-2/2 p-6 xl:px-16 lg:py-20">
              <h2 className="text-[18px] text-white/70 mb-2 font-OpenSans">
                {section.title}
              </h2>
              <h3 className="text-[22px] text-white mb-4 font-OpenSans">
                {section.subtitle}
              </h3>
              
              <div className="space-y-2 mb-6">
                {section.content.map((line, i) => (
                  <p key={i} className="text-[#727272] text-[14px] font-OpenSans">{line}</p>
                ))}
              </div>
              
              <Link href={section.href} target='_blank' className="flex justify-center items-center bg-[#101010] text-white px-10 py-2 rounded-[5px] text-[14px] mt-12">
                Read More 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSections;