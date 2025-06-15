'use client'
import Image from "next/image";
import Services from "../components/Services";
import ExpansionDetails from "../components/ExpansionDetails";
import Partners from "../components/Partners";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { fadeInUpContainer, } from "@/lib/constants";
import { ReactTyped } from "react-typed";
import { IoIosCheckmark } from "react-icons/io";
import { locations } from "../lib/constants";
import { cn } from "@/lib/utils";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import AnimatedWordMap from "@/components/AnimatedWordMap";

export default function Home() {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "fill-[#89C550] text-[#89C550]" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

  return (
    <div className="overflow-x-hidden scroll-smooth bg-[#FBFBFB]">
      <HeroSection>
        <h1 className='text-[40px] md:text-[60px]  font-[700] leading-[120%]'>
          Expand Your Business Globally with
          <ReactTyped
            className="text-[#19B32F] ml-3"
            strings={['Confidence', 'Assurance', 'Boldness']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />

        </h1>
        <p className='text-[18px] font-[400] mt-[12px] leading-[150%]'>EarthLink Business is your strategic partner in international business expansion. We provide comprehensive solutions to help companies overcome cross-border challenges, navigate complex markets, and unlock global growth opportunities.</p>
        <div className="mt-[46px] flex flex-col gap-4 items-center sm:flex-row sm:gap-4">
          <button
            className='rounded-[6px] bg-[#19B32F] py-[16px] px-[18px] w-full sm:w-[207px] text-white hover:bg-[#19B32F]/90'
            onClick={() => window.open('https://calendly.com/', '_blank')}
          >
            Book consultation
          </button>
          <button
            className='rounded-[6px] text-white py-[16px] px-[18px] w-full sm:w-[207px] border-white border-[1.4px] hover:bg-[#19B32F]/10 hover:border-[#19B32F]'
            onClick={(e) => {
              e.preventDefault();
              const target = document.getElementById('services');
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Our service
          </button>
        </div>
      </HeroSection>
      <main className="bg-[#FAFAFA] ">
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          id='services'
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
                <p className='mt-[32px] text-[18px]'>
                  We are a business set-up and management consultancy firm. Our focus is not only on helping clients start new businesses or expand existing ones in African countries but also on developing management strategies for growth in those new territories.
                </p>
                <div className='mt-[48px]'>
                  <div className="flex justify-between text-[16px]">
                    <div className="flex flex-col gap-2">
                      <h1 className="flex items-center"> <IoIosCheckmark className="bg-[#1986C3] text-white mr-2 rounded-full" /> Security and Privacy</h1>
                      <h1 className="flex items-center"> <IoIosCheckmark className="bg-[#1986C3] text-white mr-2 rounded-full" /> Scalability and Flexibility</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="flex items-center"> <IoIosCheckmark className="bg-[#1986C3] text-white mr-2 rounded-full" /> Expert Support</h1>
                      <h1 className="flex items-center"> <IoIosCheckmark className="bg-[#1986C3] text-white mr-2 rounded-full" /> Cost-Effective Solutions</h1>
                    </div>
                  </div>

                </div>
                {/* <button className='mt-[32px] font-[600] text-[16px] px-[24px] py-[16px] bg-[#19B32F] rounded-[6px] text-white'>Learn More</button> */}
              </div>
              <div className="w-full md:w-[40%] h-[50vh] relative">
                <Image
                  fill
                  src="/about-us.jpg"
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
                <p className='text-[40px] font-[700] mb-[36px]'>African Market Expansion Strategy and Economic Impact</p>
                <ExpansionDetails />
              </div>
              <div className="w-full md:w-[60%] relative h-[50vh] ">
                <AnimatedWordMap />
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          className="bg-white"
        >
          <div className='w-[90%] mx-auto py-[64px] md:py-[126px] flex flex-col md:flex-row md:gap-52'>
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
          className="bg-gradient-to-t from-[#EDF5F4] to-white pb-36"
        >
          <div className="w-[90%] mx-auto">
            <div className="mb-[60px]">
              <h1 className="text-[#03192E] text-[40px] font-[700] text-center"> Our Business Expansion Across Africa</h1>
            </div>
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {locations.map((el) => (
                  <div
                    key={el.country}
                    className="flex gap-4 items-center text-black bg-white p-2 mt-2 mb-2 rounded-lg shadow-sm hover:cursor-pointer"
                  >
                    <div className="p-3 h-10 w-10 bg-sky-700/10 flex items-center justify-center rounded-full">
                      <div className={cn(el.icon, "h-14 w-14")} />
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold">{el.country}</p>
                      <p className="text-xs text-gray-400">{el.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeInUpContainer}
          initial="hidden"
          animate="show"
          className="bg-white py-16"
        >
          <div className="w-[90%] mx-auto">
            <div>
              <h1 className='text-center text-[#03192E] text-[40px] font-[700]'>Success Stories from Global Partners</h1>
              <p className='text-center text-[#687588] my-[16px]'>Transform Businesses Across Continents</p>
            </div>
            <div>
              <Carousel setApi={setApi} className="w-full  mx-auto">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="h-full bg-[#FBFBFB] border-0 shadow-sm">
                        <CardContent className="p-8">
                          <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                          <blockquote className="text-gray-700 mb-6 leading-relaxed text-base">
                            {testimonial.quote}
                          </blockquote>
                          <div className="flex items-center">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                              <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-base">{testimonial.name}</div>
                              <div className="text-gray-600 text-sm">{testimonial.title}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: count }, (_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${index + 1 === current ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

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
            <Link href="/contact-us" >
              <button className=" rounded-[8px] w-[224px] h-[56px]  bg-[#19B32F]  text-white hover:bg-[#19B32F]/90">Contact us</button>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
