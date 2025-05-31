import React from "react";
import { Award, Eye, Layers, Search } from "lucide-react";

const HomeAbout = () => {
  const stats = [
    { value: "600+ ", label: "Projects Completed", Icon: Eye },
    { value: "725+ ", label: "Happy Clients", Icon: Search },
    { value: "150+ ", label: "Community Workshops", Icon: Layers},
    { value: "15+", label: "Years of Experience", Icon: Award },
  ];

  return (
    <div className="bg-[#101010] py-16 px-4">
      <div className="responsive-container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get to Know Us
          </h2>
          <p className="text-gray-400 max-w-3xl ">
            At Legacy Wealth Redefined, we’re not just about strategies—we’re about service, education, and empowerment. Led by Channie Nak, a dedicated educator and financial strategist with nearly two decades of experience, our mission is to make financial literacy simple, accessible, and meaningful. We’re proud to have supported hundreds of families in building legacies they can be proud of, and we’re just getting started.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.Icon;
            return (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-white flex flex-col items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white mb-2" />
                </div>
                <div>
                    <span className="text-white text-[40px] font-bold">{stat.value}</span>
                </div>
                <h3 className="text-[18px] text-white">{stat.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;