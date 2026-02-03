import React from 'react'

import { container, geometricOverlay, glassBox } from '../assets/dummystyles'
const Banner = () => {
  return (
    <div className={container}>
        <div className={glassBox}>
           <div className={geometricOverlay}>
             <div className='absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl ' />
                <div className='absolute -bottom-20 -left-20 md:bottom-40 md:-left-40 h-40 w-40 md:w-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl'/>
           </div>
        </div>
    </div>
  )
}

export default Banner