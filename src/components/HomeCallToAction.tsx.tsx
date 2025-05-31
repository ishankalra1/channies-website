import React from "react";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

const HomeCallToAction = () => {
  return (
    <div className="bg-primary py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-[27px] text-white mb-2">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-white/70 font-OpenSans text-[14px] max-w-2xl mx-auto  mb-4">
           You don’t have to do it alone. Let’s sit down, talk it through, and build a plan that truly fits your life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="https://calendly.com/channienak" target="_blank" className="flex justify-center items-center bg-white text-[#101010] px-10 py-2 rounded-[5px] text-[14px] mt-12 hover:bg-[#101010] hover:text-white gap4">
             <span><PlayCircle className="w-5 h-5 me-2"  /></span>
             <span>Schedule a Consultation</span>    
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCallToAction;