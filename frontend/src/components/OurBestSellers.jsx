import React, { useRef } from 'react'

import { ourBestSellersStyles as styles } from '../assets/dummystyles'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { bgColors, obsbooks } from '../assets/dummydata'
const OurBestSellers = () => {

    const scrollRef = useRef(null)
    
    const scrollLeft = () => scrollLeft.current.scrollBy({left:-400, behaviour:'smooth'}) 
    const scrollRight = () => scrollLeft.current.scrollBy({left:400, behaviour:'smooth'})
    
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

            {/* BOOKS SECTION */}
             <div className={styles.scrollContainer} ref={scrollRef}>
                {obsbooks.map((book, index) => (
                    <div key={book.id} className={styles.card(bgColors[index % bgColors.length])}>
                        <div className={styles.cardInner}>
                           <div className='space-y-3 md:space-y-4'>
                              <div className={styles.stars}>
                                 {[...Array(5)].map((_, i) => (
                                    <Star key={i} className='h-4 w-4 md:h-5 md:w-5 text-amber-400 fill-amber-400' size={16}/>
                                 ))}
                              </div>

                              <div className={styles.bookInfo}>
                               <h2 className={styles.bookTitle}>{book.title}</h2>
                               <p className={styles.bookAuthor}>{book.author}</p>
                              </div>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
           
       </div>
    </section>
  )
}

export default OurBestSellers