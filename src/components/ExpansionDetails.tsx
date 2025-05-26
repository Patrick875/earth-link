'use client'

import React from 'react'

const expansions = [
    {
        id: 'total',
        numerical: '322+',
        title: 'Total Funundig',
        description: 'Urna duis convallis convallis tellus interdum velit laoreet.'
    },
    {
        id: 'total-2',
        numerical: '322+',
        title: 'Total Funding',
        description: 'Urna duis convallis convallis tellus interdum velit laoreet.'
    },
    {
        id: 'funding-2',
        numerical: '322+',
        title: 'Funding round',
        description: 'Urna duis convallis convallis tellus interdum velit laoreet.'
    },
    {
        id: 'round',
        numerical: '322+',
        title: 'Total Funding',
        description: 'Urna duis convallis convallis tellus interdum velit laoreet.'
    },

]
function ExpansionDetails() {
    return (
        <div className='grid md:grid-cols-2 gap-12'>
            {expansions.map(item => <div key={item.id}>
                <p className='text-[35px]'>{item.numerical}</p>
                <p className='mt-[1.8px] text-[20px] py-[2px] '>{item.title}</p>
                <p className='py-[4px]'>{item.description}</p>
            </div>)}
        </div>
    )
}

export default ExpansionDetails