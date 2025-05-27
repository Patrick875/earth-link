'use client';

import React, { ReactNode } from "react";
import HeaderNav from "./HeaderNav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/constants";

interface Props {
    children?: ReactNode;
}

function HeroSection({ children }: Props) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <section
            className={cn(
                isHome ? "md:min-h-[75vh] min-h-[40vh]" : "min-h-[30vh] md:min-h-[40vh]",
                "w-full flex flex-col bg-gradient-to-tr from-[#084B70] to-[rgba(58,69,150,0.2)] hero-section"
            )}
        >
            <HeaderNav />
            <div className="flex-1 flex flex-col justify-center gap-4 w-[90%] mx-auto text-white py-6">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="show"
                    className="w-full md:w-1/2"
                >
                    {children ?? null}
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
