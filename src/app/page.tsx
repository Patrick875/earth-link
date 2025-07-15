'use client'
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Services from "../components/Services";
import ExpansionDetails from "../components/ExpansionDetails";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { fadeInUpContainer, } from "@/lib/constants";
import { ReactTyped } from "react-typed";
import { IoIosCheckmark } from "react-icons/io";
import { locations } from "../lib/constants";
import { cn } from "@/lib/utils";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { CircleDollarSign, Mail, PhoneCall, Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedWordMap from "@/components/map/AnimatedWordMap";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"

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
    <main className="bg-[#FAFAFA]">

      <HeroSection>
        <h1 className='text-[32px] sm:text-[40px] md:text-[40x] font-[700] leading-[120%] text-center md:text-left w-10/12'>
          Expand Your Business Globally with
          <ReactTyped
            className="text-[#19B32F] ml-3"
            strings={['Confidence', 'Assurance', 'Boldness']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </h1>
        <p className="font-normal mt-3 leading-relaxed text-center md:text-left max-w-2xl mx-auto md:mx-0">
          EarthLink Business is your strategic partner for international expansion. We help companies overcome cross-border challenges, navigate complex markets, and unlock global growth opportunities with comprehensive solutions.
        </p>
        <div className="mt-[32px] flex flex-col gap-4 items-center sm:flex-row sm:gap-4 w-full max-w-xl mx-auto md:mx-0">
          <button
            className='rounded-[6px] bg-[#19B32F] py-[14px] px-[18px] w-full sm:w-[207px] text-white hover:bg-[#19B32F]/90 text-base'
            onClick={() => window.open('https://calendly.com/', '_blank')}
          >
            Book consultation
          </button>
          <button
            className='rounded-[6px] text-white py-[14px] px-[18px] w-full sm:w-[207px] border-white border-[1.4px] hover:bg-[#19B32F]/10 hover:border-[#19B32F] text-base'
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
      {/* our global expansion services header*/}
      <motion.section
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        id='services'
        className='mt-[60px] sm:mt-[80px] md:mt-[100px]'
      >
        <div className="w-full text-center px-4">
          <h2 className='text-[28px] sm:text-[34px] md:text-[40px] font-[700] leading-[120%]'>Our Global <span className='text-[#1986C3]'>Expansion Services</span></h2>
          <p className='mt-[24px] sm:mt-[32px] text-[#687588] text-base sm:text-lg'>See how EarthLink has grown and made a positive impact.</p>
        </div>
      </motion.section>

      {/* our global expansion services content*/}
      <motion.section
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-0 sm:mt-[67px]"
      >
        <div className="w-[96%] sm:w-[90%] mx-auto">
          <Services />
        </div>
      </motion.section>

      {/* why choose  */}
      <motion.section
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mt-[40px] sm:mt-[60px] md:mt-[100px]"
      >
        <div className="w-[96%] sm:w-[90%] mx-auto">
          <div className="flex flex-col-reverse md:flex-row md:justify-between">
            <motion.div
              variants={fadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-[40%] h-[240px] sm:h-[320px] md:h-[50vh] flex flex-col justify-center items-start mt-16 md:mt-0"
            >
              <div>
                <h3 className='text-[28px] sm:text-[34px] md:text-[40px] font-[700] leading-[120%]'>Why Choose</h3>
                <h3 className='text-[32px] sm:text-[40px] font-[700] leading-[120%] text-[#1986C3]'>Earth Link Group</h3>
              </div>
              <p className='mt-[24px] sm:mt-[32px] text-[16px] sm:text-[18px]'>
                We are a business set-up and management consultancy firm. Our focus is not only on helping clients start new businesses or expand existing ones in African countries but also on developing management strategies for growth in those new territories.
              </p>
              <div className='mt-[32px] sm:mt-[48px]'>
                <div className="flex flex-col sm:flex-row justify-between text-[15px] sm:text-[16px] gap-4">
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

            </motion.div>
            <motion.div
              variants={fadeInUpContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-[48%] h-[240px] sm:h-[320px] md:h-[50vh] relative mb-8 md:mb-0 group overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                fill
                src="/about-us.jpg"
                alt="Earth Link Group team"
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              {/* Subtle border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#19B32F] rounded-lg transition-colors duration-300 pointer-events-none" />
              {/* Optional: Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm sm:text-base font-semibold bg-black/40 rounded px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Our experienced team, ready to help you expand globally.
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* map */}
      <motion.section
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="relative bg-[#1986C3] mt-[60px] sm:mt-[80px] md:mt-[118px] w-full md:min-h-[60vh] overflow-hidden"
      >
        <div className="w-[96%] sm:w-[90%] mx-auto py-[60px] sm:py-[100px]">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-6 text-white">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -60 },
                show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60, delay: 0.2 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-[40%]"
            >
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
                className='text-[28px] sm:text-[32px] md:text-[40px] font-[700] mb-[24px] sm:mb-[36px]'
              >
                African Market Expansion Strategy and Economic Impact
              </motion.p>
              <ExpansionDetails />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95, x: 60 },
                show: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 60, delay: 0.4 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-[60%] relative h-[240px] sm:h-[320px] md:h-[50vh]"
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
                className="w-full h-full"
              >
                <AnimatedWordMap />
                {/* Decorative animated circles */}
                <motion.div
                  className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/10 border border-white/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 w-8 h-8 rounded-full bg-white/10 border border-white/20"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* country */}
      <motion.section
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-gradient-to-t from-[#EDF5F4] to-white pb-16 sm:pb-24 md:pb-36"
      >
        <div className="w-[96%] sm:w-[90%] mx-auto">
          <div className="py-[40px] sm:py-[60px]">
            <h1 className="text-[#03192E] text-[28px] sm:text-[32px] md:text-[40px] font-[700] text-center"> Our Business Expansion Across Africa</h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-center p-2 sm:p-6">
            {locations.map((el) => (
              <Dialog key={el.country}>
                <DialogTrigger asChild>
                  <motion.div
                    variants={fadeInUpContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full sm:w-auto"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 bg-white shadow-sm rounded-sm p-3 sm:p-4 w-full sm:w-60 cursor-pointer hover:shadow-md transition-none">
                      <div className="p-1 h-10 w-10 sm:h-14 sm:w-14 bg-sky-700/10 flex items-center justify-center rounded-full">
                        <div className={cn(el.icon, "h-8 w-8 sm:h-14 sm:w-14")} />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold text-base sm:text-lg">{el.country}</div>
                        <div className="text-xs sm:text-sm text-[#475467] font-[400]">{el.city}</div>
                      </div>
                    </div>
                  </motion.div>
                </DialogTrigger>
                <DialogContent
                  className="!max-w-[98vw] sm:!max-w-[800px] !w-[98vw] sm:!w-auto !p-2 sm:!p-6 transition-none"
                  style={{
                    maxWidth: '98vw',
                    width: '98vw',
                    padding: '0.5rem',
                  }}
                >
                  <DialogHeader>
                    <DialogDescription>
                      <div className="max-w-2xl mx-auto p-2 space-y-8 overflow-y-auto max-h-[80vh] sm:max-h-none">
                        {/* Stats */}
                        <div className="flex items-center gap-2 text-[#060E19] font-bold text-2xl">
                          {el.country}
                          <div className={cn(el.icon, "h-8 w-8")} />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="bg-gray-50 rounded-sm px-2 py-1 flex flex-col items-start gap-1 shadow-sm">
                            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2">
                              <div className="bg-white p-2 rounded-lg shadow-sm">
                                <CircleDollarSign />
                              </div>
                              <div>
                                <div className="text-gray-400 text-xs font-semibold">LOCATION</div>
                                <div className="text-sm font-medium">{el.city}</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-sm px-2 py-1 flex flex-col items-start gap-1 shadow-sm">
                            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2">
                              <div className="bg-white p-2 rounded-lg shadow-sm">
                                <CircleDollarSign />
                              </div>
                              <div>
                                <div className="text-gray-400 text-xs font-semibold">FUND SIZE</div>
                                <div className="text-sm font-medium">{el.fundSize || "N/A"}</div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-sm px-2 py-1 flex flex-col items-start gap-1 shadow-sm">
                            <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2">
                              <div className="bg-white p-2 rounded-lg shadow-sm">
                                <CircleDollarSign />
                              </div>
                              <div>
                                <div className="text-gray-400 text-xs font-semibold">GDP</div>
                                <div className="text-sm font-medium">{el.gdp || "N/A"}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Country Overview */}
                        <div>
                          <h2 className="text-[#060E19] font-bold text-2xl">Country Overview</h2>
                          <p className="text-gray-500 mt-2">
                            {el.description || "A strategic African market with a growing digital economy and stable business environment."}
                          </p>
                        </div>

                        {/* Economic Landscape */}
                        <div>
                          <h2 className="text-[#060E19] font-bold text-2xl">Economic Landscape</h2>
                          <p className="text-gray-500 mt-2">
                            {el.economicLandscape || "Diverse economy with strong focus on services and digital transformation."}
                          </p>
                        </div>

                        {/* Key Industries */}
                        <div>
                          <h3 className="font-semibold text-lg">Key Industries</h3>
                          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                            {(el.industries || ["Telecommunications", "Agriculture", "Fishing", "Tourism"]).map((industry, i) => (
                              <li key={i}>{industry}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Business Opportunities */}
                        <div>
                          <h3 className="font-semibold text-lg">Business Opportunities</h3>
                          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 ml-4">
                            {(el.opportunities || [
                              "Digital Banking Solutions",
                              "Agritech Innovations",
                              "Smart City Development",
                              "E-commerce Platforms"
                            ]).map((op, i) => (
                              <li key={i}>{op}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Contact */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 shadow-sm">
                            <div className="bg-green-500 text-white text-xss p-2 rounded-full">
                              <Mail />
                            </div>
                            <div>
                              <div className="font-semibold">Email Address</div>
                              <div className="text-xs text-gray-400">{el.email || "info@earthlinkgroup.com"}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 shadow-sm">
                            <div className="bg-green-500 text-white text-xss p-2 rounded-full">
                              <PhoneCall />
                            </div>
                            <div>
                              <div className="font-semibold">Phone Number</div>
                              <div className="text-xs text-gray-400">{el.phone || "+250 788447599"}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </motion.section>

      {/* success stories */}
      <motion.section
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="bg-white py-10 sm:py-16"
      >
        <div className="w-[96%] sm:w-[90%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <h1 className='text-center text-[#03192E] text-[28px] sm:text-[32px] md:text-[40px] font-[700]'>
              Success Stories from Global Partners
            </h1>
            <p className='text-center text-[#687588] my-[12px] sm:my-[16px] text-base sm:text-lg'>
              Transform Businesses Across Continents
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
          >
            <Carousel setApi={setApi} className="w-full mx-auto">
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <Card className="h-full bg-[#FBFBFB] border-0 shadow-sm group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-[#e6f9ec] hover:to-[#eaf6fb]">
                        <CardContent className="p-4 sm:p-8">
                          <div className="flex mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <blockquote className="text-gray-700 mb-6 leading-relaxed text-base transition-colors duration-300">
                            {testimonial.quote}
                          </blockquote>
                          <div className="flex items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-transparent group-hover:border-[#19B32F] transition-all duration-300">
                              <Image
                                src={testimonial.avatar || "./placeholder.svg"}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900 text-base transition-colors duration-300">{testimonial.name}</div>
                              <div className="text-gray-600 text-sm  transition-colors duration-300">{testimonial.title}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-8 md:-left-12" />
              <CarouselNext className="hidden md:flex -right-8 md:-right-12" />
            </Carousel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="flex justify-center mt-6 sm:mt-8 space-x-2"
            >
              {Array.from({ length: count }, (_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${index + 1 === current ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* contact us section */}
      <motion.section
        variants={fadeInUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="relative overflow-hidden bg-gradient-to-tr from-[#084B70] via-[#1986C3]/60 to-[#3A4596]/20 text-white hero-section"
      >
        {/* Decorative animated circles */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#19B32F]/20 blur-2xl z-0"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#1986C3]/30 blur-2xl z-0"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
        />
        <div className="relative z-10 w-[96%] sm:w-[90%] mx-auto py-[48px] sm:py-[96px] flex flex-col gap-4 sm:gap-6 items-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
            className="text-[28px] sm:text-[32px] md:text-[40px] font-[700] text-center md:text-start leading-[120%] text-white"
          >
            Ready to Expand Your Business Globally?
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="mt-[20px] sm:mt-[35px] text-[16px] sm:text-[18px] text-center  max-w-2xl"
          >
            Schedule a consultation with our global expansion experts and transform your international business strategy
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            <a href="/contact_us">
              <button className="rounded-[8px] w-[180px] sm:w-[224px] h-[48px] sm:h-[56px] bg-[#19B32F] text-white hover:bg-[#19B32F]/80 text-base shadow-lg shadow-[#19B32F]/20 transition-all duration-200 hover:scale-105">
                Contact us
              </button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
