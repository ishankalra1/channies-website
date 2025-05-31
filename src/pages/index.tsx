import FeatureBoxes from '@/components/FeatureBoxes'
import HeroSlider from '@/components/HeroSlider'
import HomePageHero from '@/components/HomePageHero'
import HomeServices from '@/components/HomeServices'
import React from 'react'
import Head from 'next/head'
import ImageTextSection from '@/components/ImageTextSection'
import HomeLegacy from '@/components/HomeLegacy'
import HomeAbout from '@/components/HomeAbout'
import HomeCallToAction from '@/components/HomeCallToAction.tsx'
import Testimonials from '@/components/Testimonials'
const index = () => {
  return (
    <>
    <Head>
      <title>Legacy Wealth Redefined | Home</title>
      <meta name="description" content="Empowering families to build generational wealth and make confident financial decisions with clarity and purpose." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HeroSlider/>
    <FeatureBoxes />
    <HomePageHero />
    <HomeServices />
    <ImageTextSection />
    <HomeLegacy />
    <HomeAbout />
    <HomeCallToAction />
    <Testimonials />
    </>
  )
}

export default index