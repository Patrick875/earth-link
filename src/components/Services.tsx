'use client'
import Image from 'next/image'
import React from 'react'

const services = [
    {
        id: 'registration',
        title: 'Company registration',
        description: 'Develop tailored strategies for entering new international dsfsd',
        cardImage: '/cards-image-1.png'
    },
    {
        id: 'advisory',
        title: 'Corporate advisory services',
        description: 'Develop tailored strategies for entering new international dsfsd',
        cardImage: '/cards-image-1.png'

    },
    {
        id: 'support',
        title: 'Business support services',
        description: 'Develop tailored strategies for entering new international dsfsd',
        cardImage: '/cards-image-1.png'

    },
    {
        id: 'partnerships',
        title: 'Strategic partnerships',
        description: 'Develop tailored strategies for entering new international dsfsd',
        cardImage: '/cards-image-1.png'

    },
    {
        id: 'investment',
        title: 'Financial and investment services',
        description: 'Develop tailored strategies for entering new international dsfsd',
        cardImage: '/cards-image-1.png'

    },
    {
        id: 'tour',
        title: 'Business tour services',
        description: 'Develop tailored strategies for entering new international dsfsd',
        cardImage: '/cards-image-1.png'
    }
]

function Services() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full rounded-[8px] shodow-sm '>
            {services.map((el) => <div className='bg-white' key={el.id}>
                <div className='h-[220px] relative'>
                    <Image
                        fill
                        src={el.cardImage}
                        alt={el.id}
                        className='block object-cover'
                    />
                </div>
                <div className='pl-[24px] pt-[32px] pb-[24px]'>
                    <p className='text-[24px] font-[700] leading-[120%]'>{el.title}</p>
                    <p className='text-[14px] mt-[12px]'>{el.description}</p>
                </div>

            </div>)}
        </div>
    )
}

export default Services