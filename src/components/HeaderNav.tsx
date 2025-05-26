'use client'

import Image from "next/image"
import Link from "next/link"
import { headers } from "../lib/constants"


function HeaderNav() {

    return (
        <div className="w-full">
            <div className='sticky w-[90%] mx-auto flex justify-between items-center  py-6 top-0  '>
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
                <nav className="w-2/6 flex items-center justify-between text-white">
                    {headers.map((item) => <Link key={item.id} href={item.link}>{item.title}</Link>)}
                </nav>
                <button className="px-6 rounded-[8px] w-[156px] h-[48px]  text-white bg-[#19B32F]" >Contact us</button>
            </div>
        </div>

    )
}

export default HeaderNav