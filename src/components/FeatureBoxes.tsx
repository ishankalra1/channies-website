import React from 'react';
import { Users, ShieldCheck, TrendingUp } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      title: "Client-Centered Approach",
      description: "We believe in meeting you where you are and understanding your unique goals. Every financial plan we create is built around what truly matters to you.",
      icon: <Users className="w-10 h-10 mx-auto mb-4" />
    },
    {
      title: "Experienced & Trustworthy",
      description: "With nearly two decades of experience, we've guided hundreds with confidence. Our values are rooted in honesty, clarity, and long-term support.",
      icon: <ShieldCheck className="w-10 h-10 mx-auto mb-4" />
    },
    {
      title: "Solutions with Stability",
      description: "Your financial future deserves a steady hand and thoughtful planning. We design resilient strategies to help you move forward with peace of mind.",
      icon: <TrendingUp className="w-10 h-10 mx-auto mb-4" />
    }
  ];

  return (
    <div className="relative">
      <div className="responsive-container relative z-10 -mt-[5%] mb-8 md:mb-20 xl:mb-40">
        <div className="bg-primary shadow-lg p-6 md:p-8 lg:p-10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-center">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-white py-8 px-5 xl:px-10 xl:py-20 relative"
              >
                {index !== 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-40 w-px bg-white/10 hidden md:block"></div>
                )}
                {/* Icon added here */}
                {feature.icon}
                <h3 className="text-[20px] mb-3 md:mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;