'use client'
import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { team, testimonials, whys } from "@/lib/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMedal } from "react-icons/ci";
import { IoCheckmarkCircle, IoChevronForward } from "react-icons/io5";
import { SlLike } from "react-icons/sl";


export default function AboutUs() {
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
                className={`w-5 h-5 ${i < rating ? "fill-green-500 text-green-500" : "fill-gray-200 text-gray-200"}`}
            />
        ))
    }
    return (
        <div className="overflow-x-hidden">
            <HeroSection>
                <h1 className='text-[60px]  font-[700] leading-[120%]'>
                    About us
                </h1>
                <div className='flex gap-3 items-center text-white border-[1.4px] border-white rounded-[6px] w-fit py-2 px-4 mt-[16px]'>
                    <Link href='/' className='block text-white'  >Home</Link>
                    <IoChevronForward className='block text-white' />
                    <Link href='/' className='block text-white'  >About us</Link>
                </div>
            </HeroSection>
            <main className="bg-[#FAFAFA] ">

                <section className='mt-[126px] min-h-[50vh] flex flex-col'>
                    <div className='w-[90%] mx-auto flex gap-6 flex-1'>
                        <div className='flex gap-2 w-1/2 '>
                            <div className="flex w-full ">
                                <div className=' relative w-[60%] rounded-[8px] '>
                                    <Image
                                        fill
                                        alt='about-us-1'
                                        src='/about-us-1.png'
                                        className='h-full object-contain'
                                    />
                                </div>
                                <div className=" w-[40%] flex flex-col gap-3">
                                    <div className='w-full h-[30%] relative rounded-[8px]'>
                                        <Image
                                            fill
                                            alt='about-us-2'
                                            src='/about-us-2.png'
                                            className=' object-cover rounded-[8px]'
                                        />
                                    </div>
                                    <div className='w-full flex-1 relative rounded-[8px]'>
                                        <Image
                                            fill
                                            alt='about-us-3'
                                            className='object-cover rounded-[8px]'
                                            src='/about-us-3.png'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 h-full'>
                            <h2 className='text-[40px]  font-[700] leading-[120%] mt-[32px]'>
                                Our Company Been Working Successfully For
                                <span className='text-[#1986C3]'>
                                    Your Financial Business Growth
                                </span>
                            </h2>
                            <p className='mt-[32px] text-[18px] leading-[150%]'>
                                EarthLink Group empowers businesses to expand internationally with confidence. We provide expert support in market entry, regulatory compliance, and local operations, helping clients navigate complex markets and unlock sustainable growth. With a global perspective and deep local insight, we turn challenges into opportunities
                            </p>
                            <div className='mt-[68px]'>
                                <button className='w-[224px] h-[56px] text-white rounded-[6px] bg-[#1986C3]'>
                                    Contact us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-[126px] min-h-[60vh] flex flex-col'>
                    <div className='w-[90%] mx-auto flex-1 flex gap-4 '>
                        <div className='w-1/2 mt-[32px]'>
                            <h2 className='text-[40px] font-[700] leading-[120%] '>
                                <p> Why Choose</p>
                                <p className='text-[#1986C3]'>
                                    Earth Link Group
                                </p>
                            </h2>
                            <p className='mt-[32px] text-[18px] leading-[150%]'>
                                From market entry strategies and regulatory compliance to local operations support and strategic partnerships, we provide end-to-end services that simplify international business. Our approach is guided by deep local knowledge, global perspective, and a commitment to delivering measurable impact.
                            </p>
                            <div className='mt-[68px] grid grid-cols-2 gap-4'>
                                {whys.map((item, index) => <div key={index + item} className='col-span-1 flex items-center gap-3'>
                                    <IoCheckmarkCircle className="text-[#1986C3]" />
                                    {item}
                                </div>)}
                            </div>
                        </div>
                        <div className='flex gap-2 w-1/2'>
                            <div className="w-full relative rounded-[8px] ">
                                <Image
                                    fill
                                    alt='about-us-4'
                                    src='/about-us-4.png'
                                    className='h-full object-cover rounded-[8px]'
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-[126px] min-h-[60vh] flex flex-col'>
                    <div className='w-[90%] mx-auto flex-1 '>
                        <div className="flex justify-center py-[24px] w-full">
                            <div className='w-[50%]'>
                                <h2 className='text-[40px] text-center font-semibold'>Our Mission & Core Values</h2>
                                <p className='mt-[32px] text-center text-[18px] leading-[150%]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-12">
                            <div className='w-1/2 flex flex-col gap-[24px] p-[32px] rounded-[8px] shadow-lg'>
                                <div className="rounded-[8px] w-[64px] h-[58px] flex justify-center items-center text-white bg-[#1986C3]">
                                    <SlLike />
                                </div>
                                <h4 className='text-[32px] font-[700]'>
                                    Our Mission
                                </h4>
                                <p className='text-[18px] leading-[150%]'>
                                    By opening up local offices in Africa, circumventing traditional channels and engaging with customers directly, we are able to provide higher-quality, secure and reliable business set-up, research and management services at a fraction market price.
                                </p>
                            </div>
                            <div className='w-1/2 flex flex-col gap-[24px] p-[32px] rounded-[8px] shadow-lg'>
                                <div className=" w-[64px] h-[58px]  rounded-[8px] flex justify-center items-center text-white bg-[#1986C3]">
                                    <CiMedal />
                                </div>
                                <h4 className='text-[32px] font-[700]'>
                                    Our Vision
                                </h4>
                                <p className='text-[18px] leading-[150%]'>
                                    We believe that Expanding your business internationally should be Easy and Secure. It should leave you Happiness and Growth, with money in your bank. We also believe that every business should access global opportunities.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="my-[114px] min-h-[60vh] flex flex-col">
                    <div className='flex-1 w-[90%] mx-auto'>
                        <div className="flex justify-center py-[24px] w-full">
                            <div className='w-[50%] flex flex-col items-center'>
                                <p className='text-[14px] w-fit leading-[120%] py-[10px] px-[38px] text-center rounded-[12px] bg-[#F2F2F2] text-[#5C6265] mb-[14px]'>OUR TEAM</p>
                                <h2 className='text-[40px] text-center font-semibold'>Expert Team Members</h2>
                                <p className='mt-[32px] text-center text-[18px] leading-[150%]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>

                        <div className='grid grid-cols-4 gap-6'>
                            {team.map((member) =>
                            (<div key={member.id} className="col-span-1 bg-white rounded-[20px] shadow-lg overflow-hidden">
                                {/* Image Section */}
                                <div className="relative h-[280px]  rounded-t-[20px]">
                                    <Image
                                        fill
                                        alt={member.name}
                                        src={member.profilePic}
                                        className="object-cover"
                                    />
                                </div>

                                {/* White Card Section - Overlapping */}
                                <div className="bg-white rounded-t-[20px] -mt-6 relative z-10 px-6 pt-8 pb-6">
                                    <h4 className="text-[24px] font-bold text-black mb-2">{member.name}</h4>
                                    <p className="text-[16px]  font-medium mb-6 text-[#89C550]">{member.title}</p>

                                    {/* Social Media Icons */}
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-[#1986C3] hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-[#006D5B]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-[#1986C3] hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-[#006D5B]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </div>
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-[#1986C3] hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-[#006D5B]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.22.083.334-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001.012 0z" />
                                            </svg>
                                        </div>
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-[#1986C3] hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-[#006D5B]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>))
                            }
                        </div>
                    </div>
                </section>
                <section className="mt-[114px]   min-h-[60vh] flex flex-col">
                    <div className='flex-1 w-[90%] mx-auto'>
                        <div className="flex justify-center py-[24px] w-full">
                            <div className='w-[50%] flex flex-col items-center'>
                                <p className='text-[14px] w-fit leading-[120%] py-[10px] px-[38px] text-center rounded-[12px] bg-[#F2F2F2] text-[#5C6265] mb-[14px]'>OUR TESTIMONIALS</p>
                                <h2 className='text-[40px] text-center font-semibold'>Don’t Believe Us? People Talk About It</h2>
                                <p className='mt-[32px] text-center text-[18px] leading-[150%]'>
                                    See what our clients say about working with us. Their success speaks for our dedication and expertise.
                                </p>
                            </div>
                        </div>
                        <Carousel setApi={setApi} className="w-full  mx-auto">
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {testimonials.map((testimonial) => (
                                    <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                        <Card className="h-full bg-[#EDF5F4] border-0 shadow-sm">
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
                </section>
                <section>
                    <div className='w-[90%] mx-auto py-[126px] flex'>
                        <div className="w-[40%]">
                            <p className='text-[40px] font-[700] leading-[120%]'>Our Worldwide Network of Trusted Partners</p>
                            <p className='mt-[35px] text-[18px] leading-[150%]'>
                                Each of these partners brings unique value, specialized expertise, and deep regional knowledge that helps us provide tailored solutions to our clients.
                            </p>
                        </div>
                        <div className="w-[60%]">
                            <Partners />
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
}
