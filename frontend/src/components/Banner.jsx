import React from 'react'

import { container, geometricOverlay, glassBox, headerText, paragraphText, subHeader } from '../assets/dummystyles'
const Banner = () => {
  return (
    <div className={container}>
        <div className={glassBox}>
           <div className={geometricOverlay}>
             <div className='absolute -top-10 -right-10 md:-top-20 md:-right-20 w-48 h-48 md:w-96 md:h-96 bg-[#F8FFAE]/10 rounded-full blur-xl md:blur-3xl ' />
                <div className='absolute -bottom-20 -left-20 md:bottom-40 md:-left-40 h-40 w-40 md:w-80 bg-[#43C6AC]/10 rounded-full blur-xl md:blur-3xl'/>
           </div>

           <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
            {/* Text Section */}
             <div className='space-y-6 md:space-y-8'>
                <div className='space-y-4 md:space-y-6'>
                    <h1 className={headerText}>
                      <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#2B5876] to-[#43C6AC]'>
                        Discover 
                      </span>
                      <br /> 
                      <span className={subHeader}>
                        Your Next Favorite Book
                      </span>
                    </h1>
                    <p className={paragraphText}>
                        Dive into our vast collection of books across all genres. Whether you're seeking thrilling adventures, heartfelt romances, or insightful non-fiction, we have something for every reader.
                    </p>
                </div>
             </div>
           </div>
        </div>
    </div>
  )
}

export default Banner