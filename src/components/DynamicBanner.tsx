import React from 'react';

interface DynamicBannerProps {
    title: string;
    subtitle: string;
    bgImage: string;
    height?: 'h-[40vh]' | 'h-[45vh]';
    overlayOpacity?: number;
}

const DynamicBanner: React.FC<DynamicBannerProps> = ({
    title,
    subtitle,
    bgImage,
    height = 'h-[45vh]',
    overlayOpacity = 0.5
}) => {
    return (
        <div
            className={`relative w-full ${height} flex items-center justify-center text-white`}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black"
                style={{ opacity: overlayOpacity }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-[20px] md:text-[30px] font-bold mb-4 uppercase leading-[10px]">
                    {title}
                </h1>
                <p className="text-[14px] md:text-[18px] font-medium w-[90%] md:w-[60%] mx-auto text-center">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default DynamicBanner;