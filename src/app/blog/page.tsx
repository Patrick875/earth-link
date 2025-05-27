import HeroSection from "@/components/HeroSection"
import BlogLayout from "./BlogLayout"
import Link from "next/link"
import { IoChevronForward } from "react-icons/io5";

function page() {
    return (
        <div className='overflow-x-hidden'>
            <HeroSection>
                <h1 className='text-[40px] md:text-[60px]  font-[700] leading-[120%]'>
                    News and Blog
                </h1>
                <div className='flex gap-3 items-center text-white border-[1.4px] border-white rounded-[6px] w-fit py-2 px-4 mt-[16px]'>
                    <Link href='/' className='block text-white'>Home</Link>
                    <IoChevronForward className='block text-white' />
                    <Link href='/' className='block text-white'>Blog</Link>
                </div>
            </HeroSection>
            <section>
                <div className="w-[90/%] mx-auto">
                    <BlogLayout />
                </div>
            </section>
        </div>
    )
}

export default page