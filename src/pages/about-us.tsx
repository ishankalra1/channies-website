import AboutSection from '@/components/AboutSection'
import AboutBusiness from '@/components/AboutBusiness'
import DynamicBanner from '@/components/DynamicBanner'
import AboutMission from '@/components/AboutMission'
import React from 'react'
import Head from 'next/head'

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us | Channie Nak</title>
        <meta name="description" content="Discover our mission to empower families to build generational wealth and make confident financial decisions with clarity and purpose." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner
        title="About Us"
        subtitle="Built on purpose, driven by people: we’re here to help you take control of your financial future with clarity, heart, and a strategy that fits your life."
        bgImage="/images/header-inner-1.jpg"
        height="h-[45vh]"
        overlayOpacity={0.6}
      />
      <AboutSection />
      <AboutBusiness />
      <AboutMission />
    </>
  )
}

export default AboutUs