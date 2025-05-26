'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGooglePlusG, FaYoutube } from 'react-icons/fa';
import { TiSocialFacebook, TiSocialLinkedin } from 'react-icons/ti';
import { companyHeaders, headers, officeInfo } from '../lib/constants';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { MdOutlinePhone } from 'react-icons/md';

const Footer: React.FC = () => (
    <footer>
        <div className='w-[90%] mx-auto grid grid-cols-4 gap-4 py-[86px]'>
            <div className='col-span-1'>
                <div className="h-fit w-14">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={60}
                        height={10}
                        layout="responsive"
                        priority={true}
                        className="object-cover"
                    />
                </div>
                <p className='mt-[16px] text-[18px]'>Earhtlink is a trusted financial partner, offering innovative solutions tailored to your business needs.</p>
                <div className='mt-[26px] flex gap-4'>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white">
                        <TiSocialFacebook className='text-[18px]' />
                    </div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white">
                        <FaGooglePlusG className='text-[18px]' />

                    </div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white">
                        <TiSocialLinkedin className='text-[18px]' />

                    </div>
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#19B32F] rounded-full text-white">
                        <FaYoutube className='text-[18px]' />
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <p className='text-[24px]'>Quick Links</p>
                <div className='mt-[16px] flex flex-col gap-4'>
                    {headers.map((item) => <Link key={item.id} href={item.link} className='block'  >{item.title}</Link>)}
                </div>
            </div>
            <div className='col-span-1'>
                <p className='text-[24px]'>Company</p>
                <div className='mt-[16px] flex flex-col gap-4'>
                    {companyHeaders.map((item, index) => <Link key={item.id + index} href={item.link} className='block'  >{item.title}</Link>)}
                </div>
            </div>
            <div className='col-span-1'>
                <p className='text-[24px]'>Office</p>
                <div className='mt-[16px] flex flex-col gap-4'>
                    <div className="flex items-center gap-3">
                        <CiMail className='text-[#1986C3]' />
                        {officeInfo.email}
                    </div>
                    <div className="flex items-center gap-3">
                        <CiLocationOn className='text-[#1986C3]' />
                        {officeInfo.location}
                    </div>
                    <div className="flex items-center gap-3">
                        <MdOutlinePhone className='text-[#1986C3]' />
                        {officeInfo.phone}
                    </div>
                </div>
            </div>

        </div>
        <div className="w-full bg-[#1986C3] min-h-[8vh] flex justify-center">
            <div className="flex justify-between items-center  text-white w-[90%] mx-auto">
                <div className='flex items-center gap-4 '>
                    <Link href='#' className='block'>Privacy policy</Link>
                    <Link href='#' className='block'>Terms and conditions</Link>
                </div>
                <p>&copy;All rights reserved.  EarthLink Business  {new Date().getFullYear()}</p>
            </div>
        </div>
    </footer>
);

export default Footer;