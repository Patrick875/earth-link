'use client'
import Image from 'next/image'
import React from 'react'
import { PiArrowSquareOutThin } from "react-icons/pi";
import { services } from '@/lib/constants'

function Services() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full rounded-[8px] shodow-sm'>
            {services.map((el) => <div className='bg-white' key={el.id}>
                <div className='h-[220px] relative'>
                    <Image
                        fill
                        src={el.cardImage}
                        alt={el.id}
                        className='block object-cover'
                    />
                </div>
                <div className='p-[24px]'>
                    <div className='flex items-center justify-between'>
                        <p className='text-[24px] font-[700] leading-[120%]'>{el.title}</p>
                        <div className='bg-[#F0F0F0] p-4 rounded-full hover:cursor-pointer'> <PiArrowSquareOutThin /> </div>
                    </div>
                    <p className='text-[14px] mt-[12px]'>{el.description}</p>
                </div>
            </div>)
}
        </div >
    )
}

export default Services