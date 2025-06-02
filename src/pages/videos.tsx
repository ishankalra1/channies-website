import React from 'react'
import DynamicBanner from '../components/DynamicBanner'
import YouTubeVideoCard from '@/components/YouTubeVideoCard'
import Head from 'next/head'
const contactUs = () => {
  const videos = [
    {
      videoUrl: 'https://youtu.be/wIuRkUiDRL4',
      title: 'Legacy Wealth: Protect What Matters Most',
    },
    {
      videoUrl: 'https://youtu.be/o8PoNsYyZgI',
      title: 'How to Leverage Your Income for Long-Term Wealth',
    },
    {
      videoUrl: 'https://youtu.be/L_QwRWop3os',
      title: 'Breaking Down Financial Myths: What You Really Need to Know',
    },
    {
      videoUrl: 'https://youtu.be/9q19nfQ04l0',
      title: 'Planning for the Future: Life Insurance & Wealth Building',
    },
    {
      videoUrl: 'https://youtu.be/w-kls5vnx1M',
      title: 'Why You Need a Financial Strategy, Not Just a Budget',
    },
    {
      videoUrl: 'https://youtu.be/V4DiGkPPxKM',
      title: 'Helping Families Achieve Financial Freedom',
    },
  ];
  return (
    <>
      <Head>
        <title>Videos | Channie Nak</title>
        <meta name="description" content="Explore our collection of insightful and practical videos created to help you take control of your finances, build generational wealth, and protect what matters most." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <DynamicBanner
          title="Videos"
          subtitle="Empower Your Financial Journey, One Video at a Time"
          bgImage="/images/header-inner-1.jpg"
          height="h-[45vh]"
          overlayOpacity={0.6}
        />
      </div>
      {/* <div className="responsive-container py-10">
          <p>Explore our collection of insightful and practical videos created to help you take control of your finances, build generational wealth, and protect what matters most. Whether you're just starting out or refining your financial game plan, these resources are designed to meet you where you are—with clarity, compassion, and expertise.</p>
      </div> */}
      <div className="responsive-container py-12 ">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <YouTubeVideoCard
              key={index}
              videoUrl={video.videoUrl}
              title={video.title}
            // description={video.description}
            />
          ))}
        </div>
      </div>
      );
    </>
  )
}

export default contactUs