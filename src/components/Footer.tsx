'use client'
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import React from 'react';
import { FaGooglePlusG, FaYoutube } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { companyHeaders, headers, officeInfo } from '../lib/constants';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { MdOutlinePhone } from 'react-icons/md';

const Footer: React.FC = () => (
    <footer className='w-full bg-[#FBFBFB] text-[#687588]'>
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 py-[40px] md:py-[86px]'>
            <div className='col-span-1'>
                <div className="h-fit w-32">
                    <Image
                        src="/logo-dark-blue.png"
                        alt="Logo"
                        width={120}
                        height={30}
                        layout="responsive"
                        priority={true}
                        className="object-cover"
                    />
                </div>
                <p className='mt-[16px] text-[18px] w-[316px] font-[400]'>Earhtlink is a trusted financial partner, offering innovative solutions tailored to your business needs.</p>
                <div className='mt-[26px] flex gap-4'>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white hover:bg-[#19B32F]/90">
                        <TiSocialFacebook className='text-[18px]' />
                    </div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white hover:bg-[#19B32F]/90">
                        <FaGooglePlusG className='text-[18px]' />

                    </div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white hover:bg-[#19B32F]/90">
                        <TiSocialLinkedin className='text-[18px]' />

                    </div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white hover:bg-[#19B32F]/90">
                        <FaYoutube className='text-[18px]' />
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <p className='text-[24px]'>Quick Links</p>
                <div className='mt-[16px] flex flex-col gap-4 font-[400]'>
                    {headers.map((item) => <a key={item.id} href={item.link} className='block hover:hover:text-[#19B32F]/90'>{item.title}</a>)}
                </div>
            </div>
            <div className='col-span-1'>
                <p className='text-[24px]'>Company</p>
                <div className='mt-[16px] flex flex-col gap-4 font-[400]'>
                    {companyHeaders.map((item, index) => <a key={item.id + index} href={item.link} className='block hover:hover:text-[#19B32F]/90'>{item.title}</a>)}
                </div>
            </div>
            <div className='col-span-1'>
                <p className='text-[24px]'>Office</p>
                <div className='mt-[16px] flex flex-col gap-4'>
                    <div className="flex items-center gap-3 font-[400]">
                        <CiMail className='text-[#1986C3]' />
                        {officeInfo.email}
                    </div>
                    <div className="flex items-center gap-3 font-[400]">
                        <CiLocationOn className='text-[#1986C3]' />
                        {officeInfo.location}
                    </div>
                    <div className="flex items-center gap-3 font-[400]">
                        <MdOutlinePhone className='text-[#1986C3]' />
                        {officeInfo.phone}
                    </div>
                </div>
            </div>

        </div>
        <div className="w-full bg-[#1986C3] min-h-[8vh] flex justify-center">
            <div className="flex justify-between items-center  text-white w-[90%] mx-auto">
                <div className='flex items-center gap-4 '>
                    <a href='#' className='block'>Privacy policy</a>
                    <a href='#' className='block'>Terms and conditions</a>
                </div>
                <p>&copy;All rights reserved.  EarthLink Business  {new Date().getFullYear()}</p>
            </div>
        </div>
    </footer>
);

export default Footer;