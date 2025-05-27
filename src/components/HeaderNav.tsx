'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { headers } from "../lib/constants";
import { Menu, X } from "lucide-react";

function HeaderNav() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden'); // clean up
        };
    }, [menuOpen]);

    return (
        <header className="w-full text-white md:sticky md:top-0 md:z-50">
            <div className="w-[90%] mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <div className="h-fit w-14">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={60}
                        height={10}
                        layout="responsive"
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex w-2/6 items-center justify-between">
                    {headers.map((item) => (
                        <Link key={item.id} href={item.link} className="hover:text-green-400">
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Contact Button */}
                <div className="hidden md:block">
                    <button className="px-6 rounded-[8px] w-[156px] h-[48px] bg-[#19B32F] hover:bg-green-600">
                        Contact us
                    </button>
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
                        <div className="h-fit w-14">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={60}
                                height={10}
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
                            <Link
                                key={item.id}
                                href={item.link}
                                onClick={() => setMenuOpen(false)} // Close on link click
                                className="text-lg hover:text-sky-800"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 px-4 py-2 rounded-[8px] bg-[#19B32F] text-white hover:bg-green-600"
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
