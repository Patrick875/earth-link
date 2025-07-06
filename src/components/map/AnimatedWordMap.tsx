'use client'
import React from 'react'
import Map from './Map'
import AnimatedPoints from './AnimatedPoints'
import AnimatedWordMapDefs from './AnimatedWordMapDefs'
function AnimatedWordMap() {
    return (
        <svg width="705" height="461" viewBox="0 0 705 461" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="World Map">
                <Map />
                <AnimatedPoints />
                <AnimatedWordMapDefs />
            </g>
        </svg>
    )
}

export default AnimatedWordMap