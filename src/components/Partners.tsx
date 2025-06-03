"use client";
import Image from "next/image";
import React from "react";

function Partners() {
    return (
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-4">
            <div className="py-[40px] bg-[#FBFBFB] px-[22px]">
                <div className="relative h-[30px] w-full">
                    <Image fill src="/logo-1.svg" alt="logo-1" className="block object-contain" />
                </div>
            </div>
            <div className="py-[40px] bg-[#FBFBFB] px-[22px]">
                <div className="relative h-[30px] w-full">
                    <Image fill src="/logo.svg" alt="logo-det" className="block object-contain" />
                </div>
            </div>
            <div className="py-[40px] bg-[#FBFBFB] px-[22px]">
                <div className="relative h-[30px] w-full">
                    <Image fill src="/logo-2.svg" alt="logo-2" className="block object-contain" />
                </div>
            </div>
            <div className="py-[40px] bg-[#FBFBFB] px-[22px]">
                <div className="relative h-[30px] w-full">
                    <Image fill src="/logo-3.svg" alt="logo-3" className="block object-contain" />
                </div>
            </div>
            <div className="py-[40px] bg-[#FBFBFB] px-[22px]">
                <div className="relative h-[30px] w-full">
                    <Image fill src="/logo-5.svg" alt="logo-5" className="block object-contain" />
                </div>
            </div>
            <div className="py-[40px] bg-[#FBFBFB] px-[22px]">
                <div className="relative h-[30px] w-full">
                    <Image fill src="/logo-2.svg" alt="logo-2" className="block object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Partners;
