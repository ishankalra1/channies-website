import React from 'react'
import DynamicBanner from '../components/DynamicBanner'
import YouTubeVideoCard from '@/components/YouTubeVideoCard'
import Head from 'next/head'
const contactUs = () => {
  const videos = [
    {
      videoUrl: 'https://youtu.be/-9dgy5Ei5cY?si=9C3NWY8AZ2FgeRQb',
      title: 'How to Take Advantage of the "Retirement Income Valley" for Roth Conversions',
    },
    {
      videoUrl: 'https://youtu.be/t3eHZT9Erxo?si=YSZARV8cd9P55se4',
      title: 'Ed Slott IUL Tax Free Retirement',
    },
    {
      videoUrl: 'https://youtu.be/eNo9HLgbax0?si=gghekc7S8smE8muQ',
      title: '401K Fallout 60 Minutes Segment',
    },
    {
      videoUrl: 'https://youtu.be/ec4zIGvl1PE',
      title: 'New study reveals majority of Americans turning 65 soon are not financially prepared to retire',
    },
    {
      videoUrl: 'https://youtu.be/ZT9NpPe0wRg',
      title: 'Why it’s hard for Americans to retire',
    },
    {
      videoUrl: 'https://youtu.be/zmcpufAeCeM',
      title: 'Expert on why more Americans are withdrawing from their 401(k) retirement funds early',
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