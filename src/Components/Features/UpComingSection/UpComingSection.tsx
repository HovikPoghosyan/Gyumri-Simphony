import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faAngleLeft,
   faAngleRight
} from '@fortawesome/free-solid-svg-icons';


import ConcertCard from '../ConcertCard/ConcertCard';
import Button from 'Components/Commons/Button/Button';

import styles from './UpComingSection.module.scss';

type ConcertSlide = {
   title: string;
   time: string;
   location: string;
   price: string;
   imageUrl: string;
   data: string;
   calendarDate: Date;
   members: { position: string; name: string; imageUrl?: string }[];
};

function UpComingSection() {
   const [activeIndex, setActiveIndex] = React.useState(1);

   const itemsList = React.useMemo<ConcertSlide[]>(
      () => [
         {
            title: 'Spring Melodies',
            time: '19 : 00',
            location: 'Gyumri Vardan Ajemian Theatre',
            price: '2000 AMD - 6000 AMD',
            imageUrl: '\\Images\\image13.png',
            data: 'March 18',
            calendarDate: new Date(2026, 2, 18),
            members: [
               { position: 'Conductor', name: 'Yervand Varosyan', imageUrl: '\\Images\\Ervand.png' },
               { position: 'Soloist', name: 'Mery Mkrtchyan', imageUrl: '\\Images\\Meri.jpg' },
            ],
         },
      ],
      []
   );

   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

   const onSelect = React.useCallback(() => {
      if (!emblaApi) {
         return;
      }

      setActiveIndex(emblaApi.selectedScrollSnap() + 1);
   }, [emblaApi]);

   React.useEffect(() => {
      if (!emblaApi) {
         return;
      }

      onSelect();
      emblaApi.on('select', onSelect);
      emblaApi.on('reInit', onSelect);

      return () => {
         emblaApi.off('select', onSelect);
         emblaApi.off('reInit', onSelect);
      };
   }, [emblaApi, onSelect]);

   const handleCalendarButtonClick = React.useCallback((calendarDate: Date) => {
      window.dispatchEvent(
         new CustomEvent('event-calendar-select-date', {
            detail: { date: calendarDate.toISOString() },
         })
      );

      const eventCalendarSection = document.getElementById('eventCalendarSection');
      eventCalendarSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }, []);

   return (
      <section className={styles.upComingSection}>
         <h2 className={styles.title}>Upcoming Concerts <br /> <br />{`${activeIndex} / ${itemsList.length}`}</h2>

         <div className={styles.carouselWrap}>
            <Button
               isDisable={!emblaApi?.canScrollPrev()}
               functionality={() => emblaApi?.scrollPrev()}
               className={`${styles.sliderBtn} ${styles.prevBtn}`}
            >
               <FontAwesomeIcon icon={faAngleLeft} />
            </Button>

            <div className={styles.embla} ref={emblaRef}>
               <div className={styles.emblaContainer}>
                  {itemsList.map((item) => (
                     <div className={styles.emblaSlide} key={item.title}>
                        <ConcertCard
                           title={item.title}
                           time={item.time}
                           location={item.location}
                           price={item.price}
                           imageUrl={item.imageUrl}
                           data={item.data}
                           members={item.members}
                           onCalendarClick={() => handleCalendarButtonClick(item.calendarDate)}
                        />
                     </div>
                  ))}
               </div>
            </div>

            <Button
               isDisable={!emblaApi?.canScrollNext()}
               functionality={() => emblaApi?.scrollNext()}
               className={`${styles.sliderBtn} ${styles.nextBtn}`}
            >
               <FontAwesomeIcon icon={faAngleRight} />
            </Button>

            <div className={styles.dots}>
               {itemsList.map((item, index) => (
                  <button
                     key={item.title}
                     type="button"
                     className={`${styles.dot} ${activeIndex === index + 1 ? styles.dotActive : ''}`}
                     onClick={() => emblaApi?.scrollTo(index)}
                     aria-label={`Go to slide ${index + 1}`}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

export default UpComingSection;