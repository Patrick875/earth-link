'use client'

import React from 'react'
import { expansions } from '@/lib/constants'


function ExpansionDetails() {
    return (
        <div className='grid md:grid-cols-2 gap-12'>
            {expansions.map(item => <div key={item.id}>
                <p className='text-[35px]'>${item.numerical}</p>
                <p className='mt-[1.8px] text-[20px] py-[2px] '>{item.title}</p>

            </div>)}
        </div>
    )
}

export default ExpansionDetails