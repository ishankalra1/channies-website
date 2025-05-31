import React from 'react'
import DynamicBanner from '../components/DynamicBanner'
import YouTubeVideoCard from '@/components/YouTubeVideoCard'
import Head from 'next/head'
const contactUs = () => {
  const videos = [
    {
      videoUrl: 'https://youtu.be/wIuRkUiDRL4',
      title: 'Amazing Product Demo',
      // description: 'See how our product can transform your workflow.'
    },
    {
      videoUrl: 'https://youtu.be/9bZkp7q19f0',
      title: 'Customer Testimonial',
      // description: 'Hear what our customers say about our service.'
    },
    {
      videoUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8',
      title: 'How It Works',
      // description: 'Detailed explanation of our technology.'
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