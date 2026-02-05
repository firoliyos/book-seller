import React, { useRef } from 'react'

import { ourBestSellersStyles as styles } from '../assets/dummystyles'
import { ChevronLeft, ChevronRight } from 'lucide-react'
const OurBestSellers = () => {

    const scrollLeft = useRef(null)

    const handleScrollLeft = () => scrollLeft.current.scrollBy({left:-400, behaviour:'smooth'}) 
    const handleScrollRight = () => scrollLeft.current.scrollBy({left:400, behaviour:'smooth'})
    
  return (
    <section className={styles.section}>
       <div className={styles.container}>
          {/* Header */}
            <div className={styles.headerWrapper}>
               <div className={styles.headerText}>
                 <h1 className={styles.title}>
                   <span className={styles.gradientText}>
                        Curated Excellence
                   </span>
                 </h1>
                 <p className={styles.subtitle}>Top Rated by Our Readers </p>
               </div>

               {/* RIGHT BTNS FOR MOVING LEFT AND RIGHT */}
               <div className={styles.navWrapper}>
                  <div className={styles.navLine}/>
                  <div className={styles.navButtons}>
                    <button onClick={scrollLeft} className={styles.navBtn}>
                        <ChevronLeft className={styles.navIcon} size={20}/>
                    </button>
                    <button onClick={scrollRight} className={styles.navBtn}>
                        <ChevronRight className={styles.navIcon} size={20}/>
                    </button>
                  </div>
               </div>
            </div>
       </div>
    </section>
  )
}

export default OurBestSellers