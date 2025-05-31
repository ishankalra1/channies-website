import React from 'react'
import DynamicBanner from '../components/DynamicBanner'
import ContactForm from '@/components/ContactForm'
import Head from 'next/head'
const contactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Channie Nak</title>
        <meta name="description" content="We’re here to answer your questions, guide your journey, and help you build lasting wealth. Reach out today!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-100">
        <DynamicBanner
          title="CONTACT"
          subtitle="We’re here to answer your questions, guide your journey, and help you build lasting wealth."
          bgImage="/images/header-inner-1.jpg"
          height="h-[45vh]"
          overlayOpacity={0.6}
        />
        <ContactForm />
      </div>
    </>
  )
}

export default contactUs