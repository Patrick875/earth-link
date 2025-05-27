'use client'
import Image from "next/image";
import Services from "../components/Services";
import ExpansionDetails from "../components/ExpansionDetails";
import Partners from "../components/Partners";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { fadeInUpContainer, } from "@/lib/constants";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection>
        <h1 className='text-[40px] md:text-[60px]  font-[700] leading-[120%]'>
          Expand Your Business Globally with <span className='text-[#19B32F]'>Confidence</span>
        </h1>
        <p className='text-[18px] font-[400] mt-[12px] leading-[150%]'>We provide comprehensive solutions to help companies overcome cross-border challenges navigate complex markets, and unlock global growth opportunities.</p>
        <div className=" mt-[46px] flex gap-4 items-center">
          <button className='rounded-[6px] bg-[#19B32F] py-[21px] px-[24px] w-[207px] text-white '>Book consultation</button>
          <button className='rounded-[6px] text-white py-[21px] px-[24px] w-[207px] border-white border-[1.4px]'>Our service</button>
        </div>
      </HeroSection>
      <main className="bg-[#FAFAFA] ">
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          className='mt-[100px]'>
          <div className="w-full text-center">
            <h2 className='text-[34px] md:text-[40px] font-[700] leading-[120%]'>Our Global <span className='text-[#1986C3]'>Expansion Services</span></h2>
            <p className='mt-[32px] text-[#687588]'>See how EarthLink has grown and made a positive impact.</p>
          </div>
        </motion.section>
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          className="mt-[67px] ">
          <div className="w-[90%] mx-auto">
            <Services />
          </div>
        </motion.section>
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          className="mt-[60px] md:mt-[100px] ">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col-reverse md:flex-row md:justify-between">
              <div className="w-full md:w-[40%] my-[54px]">
                <div>
                  <h3 className='text-[34px] md:text-[40px] font-[700] leading-[120%] '>Why Choose</h3>
                  <h3 className='text-[40px] font-[700] leading-[120%] text-[#1986C3]'>Earth Link Group</h3>
                </div>
                <p className='mt-[32px]'>
                  We are a business set-up and management consultancy firm. Our focus is not only on helping clients start new businesses or expand existing ones in African countries but also on developing management strategies for growth in those new territories.
                </p>
                <div className='mt-[32px]'></div>
                <button className='mt-[32px] font-[600] text-[16px] px-[24px] py-[21px] bg-[#19B32F] rounded-[6px] text-white'>Learn More</button>
              </div>
              <div className="w-full md:w-[40%] h-[50vh] relative">
                <Image
                  fill
                  src="/cards-image-1.png"
                  alt='business-setup'
                  className='block object-cover'
                />
              </div>

            </div>
          </div>
        </motion.section>
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          className='bg-[#1986C3] mt-[118px] w-full md:min-h-[60vh]'>
          <div className="w-[90%] mx-auto py-[100px]">
            <div className="flex flex-col-reverse md:flex-row gap-6 text-white">
              <div className="w-full md:w-[40%] ">
                <p className='text-[40px] font-[700] mb-[36px]'>African Market Expansion Strategy </p>
                <ExpansionDetails />
              </div>
              <div className="w-full md:w-[60%] relative h-[50vh] ">
                <Image
                  fill
                  alt='word-map'
                  src='/word.svg'
                />
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
        >
          <div className='w-[90%] mx-auto py-[64px] md:py-[126px] flex flex-col md:flex-row'>
            <div className="w-full md:w-[40%]">
              <p className='text-[40px] font-[700] leading-[120%] text-center md:text-start'>Our Worldwide Network of Trusted Partners</p>
              <p className='mt-[35px] text-[18px]'>
                Each of these partners brings unique value, specialized expertise, and deep regional knowledge that helps us provide tailored solutions to our clients.
              </p>
            </div>
            <div className="w-full md:w-[60%]">
              <Partners />
            </div>
          </div>
        </motion.section>
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          className='bg-linear-tr from-[#084B70] to-[rgb(58,69,150,0.2)] text-white hero-section'>
          <div className='w-[90%] mx-auto py-[96px] flex flex-col gap-6 items-center'>
            <p className='text-[40px] font-[700] text-center md:text-start leading-[120%]'>Ready to Expand Your Business Globally?</p>
            <p className='mt-[35px] text-[18px] text-center md:text-start'>
              Schedule a consultation with our global expansion experts and transform your international business strategy
            </p>
            <button className=" rounded-[8px] w-[224px] h-[56px]   text-white bg-[#19B32F]" >Contact us</button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
