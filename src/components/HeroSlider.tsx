import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const slides = [
    {
      title: "Your Journey to Financial Freedom Begins Here",
      subtitle: "Agency Studio",
      description: "Redefining Your Financial Legacy",
      button1: "Schedule a Consultation",
      backgroundImage: "/images/slide1.jpg",
      alt: "/images/5233.jpg"
    },
    {
      title: "Your Journey to Financial Freedom Begins Here",
      subtitle: "For Your Business",
      description: "Redefining Your Financial Legacy",
      button1: "Schedule a Consultation",
      backgroundImage: "/images/slide2.jpg",
      alt: "image of a modern coffee"
    },
    {
      title: "Your Journey to Financial Freedom Begins Here",
      subtitle: "Digital Experiences",
      description: "Redefining Your Financial Legacy",
      button1: "Schedule a Consultation",
      backgroundImage: "/images/slide3.jpg",
      alt: "image of a modern office"
    }
  ];

  // Auto-rotate slides (pauses when hovered)
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.backgroundImage}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative h-full w-full flex items-center justify-center text-center px-4 z-10">
        <div className="max-w-4xl px-4">
          <p className="text-sm md:text-base uppercase tracking-widest text-white mb-4">
            {slides[currentSlide].description}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            {slides[currentSlide].title}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://calendly.com/channienak" target='_blank'
              className="bg-primary text-white hover:bg-white hover:text-black px-8 py-2 rounded-md transition-colors duration-300  text-[14px] mt-8"
              >
              {slides[currentSlide].button1}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-colors duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full transition-colors duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      
    </div>
  );
};

export default HeroSlider;