import React from 'react'
import DynamicBanner from '@/components/DynamicBanner'
import ServicesBanner from '@/components/ServicesBanner'
import ServicesPlan from '@/components/ServicesPlan'
import ServicesTerms from '@/components/servicesTerms'
import Head from 'next/head'
const Services = () => {
  return (
    <>
    <Head>
      <title>Services | Channie Nak</title>
      <meta name="description" content="Explore our personalized financial services designed to help you build generational wealth, protect your assets, and achieve your financial goals with confidence." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DynamicBanner
          title="Services"
          subtitle="Personalized Financial Solutions for Every Stage of Life"
          bgImage="/images/header-inner-1.jpg"
          height="h-[45vh]"
          overlayOpacity={0.6}
        />
      <ServicesBanner />
      <ServicesPlan />
      <ServicesTerms />
    </>
  )
}

export default Services