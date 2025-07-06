'use client'
import Image from 'next/image'
import React from 'react'
import { PiArrowSquareOutThin } from "react-icons/pi";
import { services } from '@/lib/constants'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

function Services() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full rounded-[8px] shodow-sm'>
            {services.map((el) => <div className='bg-white' key={el.id}>

                <Dialog>
                    <DialogTrigger asChild>
                        <div>
                            <div className='h-[220px] relative overflow-hidden group'>
                                <Image
                                    fill
                                    src={el.cardImage}
                                    alt={el.id}
                                    className='block object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
                                />
                            </div>
                            <div className='p-[24px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-[24px] font-[700] leading-[120%]'>{el.title}</p>
                                    <div className='bg-[#F0F0F0] p-4 rounded-full hover:bg-[#e0e0e0] hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer'>
                                        <PiArrowSquareOutThin />
                                    </div>
                                </div>
                                <p className='text-[14px] mt-[12px]'>{el.short_description}</p>
                            </div>
                        </div>
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
                                    <div className="space-y-4 text-sm sm:text-base">
                                        <h1 className="text-[#060E19] font-[700] text-lg sm:text-xl">{el.title} </h1>
                                        <p className="leading-relaxed">
                                            {el.long_description.p1}
                                        </p>
                                        <p className="leading-relaxed">
                                            {el.long_description.p2}
                                        </p>

                                        <h2 className="text-[#060E19] font-[700] text-lg sm:text-xl">Key Benefits</h2>
                                        <ul className="list-none space-y-1 pl-4">
                                            {el.keyBenefits.map((benefit: string, idx: number) => (
                                                <li key={idx}>{benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>

                </Dialog>
            </div>)
            }
        </div >
    )
}

export default Services