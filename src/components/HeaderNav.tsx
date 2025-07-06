'use client';
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState, useEffect } from "react";
import Image from "next/image";
import { headers, locations } from "../lib/constants";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Host_Grotesk } from 'next/font/google'

const hostGrotesk = Host_Grotesk({
    variable: "--font-host",
    subsets: ["latin"],
});


function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLocations, setShowLocations] = useState(false)
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [menuOpen]);

    return (
        <header className={cn(hostGrotesk.className, "w-full text-white sticky md:top-0 md:z-50")}>
            <div className="w-[90%] mx-auto flex justify-between items-center ">
                {/* Logo */}
                <div className="h-fit w-32">
                    <a href="/" className="block">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={30}
                            layout="responsive"
                            priority
                            className="object-cover"
                        />
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex w-3/6 items-center justify-between relative">
                    {headers.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            onClick={(e) => {
                                if (item.link.startsWith("#")) {
                                    e.preventDefault();
                                    const target = document.getElementById(item.id);
                                    if (target) {
                                        target.scrollIntoView({ behavior: "smooth" });
                                    }
                                } else if (item.id === "locations") {
                                    e.preventDefault();
                                    setShowLocations(prev => !prev);
                                }
                            }}
                            className="flex gap-3 items-center hover:text-green-400"
                        >
                            {item.title}
                            {item.id === "locations" && (
                                <ChevronDownIcon className={cn("h-4 w-4", showLocations && "rotate-180")} />
                            )}
                        </a>
                    ))}
                </nav>

                {showLocations && <div className='hidden md:flex flex-col  absolute  top-24 left-40 w-[80vw] min-h-[38vh] bg-white rounded-[12px]'>
                    <div className="grid  grid-cols-3  h-[36vh] justify-between w-[90%] m-auto">
                        {locations.map((el) =>
                            <div key={el.country} className='flex gap-4 items-center text-black'>
                                <div className='p-3 h-10 w-10 bg-sky-700/10 flex items-center justify-center rounded-full'>
                                    <div className={cn(el.icon, 'h-14 w-14')} />
                                </div>
                                <div className="pr-4">
                                    <p className='font-semibold'>{el.country}</p>
                                    <p className='text-xs text-gray-400'>{el.description}</p>
                                </div>
                            </div>)}
                    </div>

                </div>}

                {/* Desktop Contact Button */}
                <div className="hidden md:block">
                    <a href='/contact-us'>
                        <button className="rounded-[6px] bg-[#19B32F] py-[16px] px-[8px] w-[207px] text-white hover:bg-[#19B32F]/90">
                            Contact us
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={28} className='text-blue-900' /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="fixed top-0 left-0 z-[9999] bg-white text-sky-700 min-h-screen w-full px-6 pt-4 pb-4">
                    <div className="flex justify-between">
                        <div className="h-fit w-32">
                            <Image
                                src="/logo-dark-blue.png"
                                alt="Logo"
                                width={160}
                                height={30}
                                layout="responsive"
                                priority
                                className="object-cover"
                            />
                        </div>
                        <button onClick={() => setMenuOpen(false)}>
                            <X size={28} className='text-blue-900' />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-6 pt-20">
                        {headers.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                onClick={() => setMenuOpen(false)} // Close on link click
                                className="text-lg hover:text-sky-800"
                            >
                                {item.title}
                            </a>
                        ))}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 px-4 py-2 rounded-[8px] bg-[#19B32F]  text-white hover:bg-[#19B32F]/90"
                        >
                            Contact us
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default HeaderNav;
