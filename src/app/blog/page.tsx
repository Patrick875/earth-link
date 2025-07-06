'use client'
/* eslint-disable @next/next/no-html-link-for-pages */
import HeroSection from "@/components/HeroSection"
import BlogLayout from "./BlogLayout"
import { IoChevronForward } from "react-icons/io5";

function page() {
    return (
        <div className='overflow-x-hidden'>
            <HeroSection>
                <h1 className='text-[40px] md:text-[60px]  font-[700] leading-[120%]'>
                    News and Blog
                </h1>
                <div className='flex gap-3 items-center text-white border-[1.4px] border-white rounded-[6px] w-fit py-2 px-4 mt-[16px]'>
                    <a href='/' className='block text-white'>Home</a>
                    <IoChevronForward className='block text-white' />
                    <a href='/' className='block text-white'>Blog</a>
                </div>
            </HeroSection>
            <section>
                <div className="">
                    <BlogLayout />
                </div>
            </section>
        </div>
    )
}

export default page