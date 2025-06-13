'use client'
import HeroSection from "@/components/HeroSection";
import { team } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { CiMedal } from "react-icons/ci";
import { IoChevronForward } from "react-icons/io5";
import { SlLike } from "react-icons/sl";


export default function AboutUs() {

    return (
        <div className="overflow-x-hidden">
            <HeroSection>
                <h1 className='text-[40px] md:text-[60px]  font-[700] leading-[120%]'>
                    About us
                </h1>
                <div className='flex gap-3 items-center text-white border-[1.4px] border-white rounded-[6px] w-fit py-2 px-4 mt-[16px]'>
                    <Link href='/' className='block text-white'>Home</Link>
                    <IoChevronForward className='block text-white' />
                    <Link href='/about-us' className='block text-white'>About us</Link>
                </div>
            </HeroSection>
            <main className="bg-white">
                <section className='mt-[60px] md:mt-[126px] min-h-[50vh] flex flex-col'>
                    <div className='w-[90%] mx-auto flex flex-col md:flex-row gap-16 flex-1'>
                        <div className='hidden md:flex gap-2 w-full md:w-3/5 '>
                            <div className="flex w-full gap-4">
                                <div className='relative w-[60%] h-[100%] rounded-[8px] '>
                                    <Image
                                        fill
                                        alt='about-us'
                                        src='/about-us.jpg'
                                        className='object-cover rounded-[8px]'
                                    />
                                </div>
                                <div className=" w-[40%] flex flex-col gap-3">
                                    <div className='w-full h-[30%] relative rounded-[8px]'>
                                        <Image
                                            fill
                                            alt='about-us-1'
                                            src='/about-us-1.jpg'
                                            className=' object-cover rounded-[8px]'
                                        />
                                    </div>
                                    <div className='w-full flex-1 relative rounded-[8px]'>
                                        <Image
                                            fill
                                            alt='about-us-2'
                                            className='object-cover rounded-[8px]'
                                            src='/about-us-2.jpg'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-2/5 h-full'>
                            <h2 className='text-[34px] md:text-[40px]  font-[700] leading-[120%] mt-[32px]'>
                                Our Company Been Working Successfully For
                                <span className='text-[#1986C3] ml-2'>
                                    Your Financial Business Growth
                                </span>
                            </h2>
                            <p className='mt-[32px] text-[18px] leading-[150%]'>
                               We are a business set-up and management consultancy firm. Our focus is not only on helping clients start new businesses or expand existing ones in African countries but also on developing management strategies for growth in those new territories.
                            </p>
                            <div className='mt-[68px]'>
                                <Link href='/contact-us'>
                                <button className='w-[224px] h-[56px] text-white rounded-[6px] bg-[#1986C3]'>
                                    Contact us
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mt-32 flex flex-col bg-gradient-to-t from-white to-[#F2F2F2]'>
                    <div className='w-[90%] mx-auto flex-1 '>
                        <div className="flex justify-center py-[24px] w-full">
                            <div className='w-full md:w-[50%]'>
                                <h2 className='text-[34px] md:text-[40px] text-center font-semibold'>Our Mission & Vision</h2>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                            <div className='w-full md:w-1/2 flex flex-col gap-[24px] p-[32px] rounded-[8px] shadow-md bg-white'>
                                <div className="rounded-[8px] w-[64px] h-[58px] flex justify-center items-center text-white bg-[#1986C3]">
                                    <SlLike />
                                </div>
                                <h4 className='text-[28px] md:text-[32px] font-[700]'>
                                    Our Mission
                                </h4>
                                <p className='text-[18px] leading-[150%]'>
                                    By opening up local offices in Africa, circumventing traditional channels and engaging with customers directly, we are able to provide higher-quality, secure and reliable business set-up, research and management services at a fraction market price.
                                </p>
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col gap-[24px] p-[32px] rounded-[8px] shadow-md bg-white'>
                                <div className=" w-[64px] h-[58px]  rounded-[8px] flex justify-center items-center text-white bg-[#1986C3]">
                                    <CiMedal />
                                </div>
                                <h4 className='text-[28px] md:text-[32px] font-[700]'>
                                    Our Vision
                                </h4>
                                <p className='text-[18px] leading-[150%]'>
                                    We believe that Expanding your business internationally should be Easy and Secure. It should leave you Happiness and Growth, with money in your bank. We also believe that every business should access global opportunities.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="mt-32 flex flex-col pb-16">
                    <div className='flex-1 w-[90%] mx-auto'>
                        <div className="flex justify-center py-[24px] w-full">
                            <div className='w-full md:w-[50%] flex flex-col items-center mb-8'>
                                <h2 className='text-[34px] md:text-[40px] text-center font-semibold'>Meet Our Global Experts</h2>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:w-[60%] mx-auto'>
                            {team.map((member) =>
                            (<div key={member.id} className="col-span-1 p-2 bg-white rounded-[20px] shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                {/* Image Section */}
                                <div className="relative h-[380px]  rounded-t-[20px]">
                                    <Image
                                        fill
                                        alt={member.name}
                                        src={member.profilePic}
                                        className="object-cover rounded-[8px]"
                                    />
                                </div>

                                {/* White Card Section - Overlapping */}
                                <div className="bg-white rounded-t-[20px] w-[90%] -mt-6 relative z-10 px-6 pt-8 pb-6">
                                    <h4 className="text-[24px] font-bold text-black mb-2">{member.name}</h4>
                                    <p className="text-[16px]  font-medium mb-6 text-[#89C550]">{member.title}</p>

                                    {/* Social Media Icons */}
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-inherit hover:border hover:border-[#006d5b] hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-[#006D5B]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-inherit hover:border hover:border-[#006d5b] hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-[#006D5B]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </div>
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-inherit hover:border hover:border-[#006d5b] hover:text-white transition-colors cursor-pointer">
                                            <svg className="w-5 h-5 text-[#006D5B]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.22.083.334-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.367 18.641.001.012 0z" />
                                            </svg>
                                        </div>
                                        <div className="w-10 h-10 bg-[#EDF5F4] rounded-lg flex items-center justify-center hover:bg-inherit hover:border hover:border-[#006d5b] hover:text-white transition-colors cursor-pointer">
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
            </main>
        </div >
    );
}
