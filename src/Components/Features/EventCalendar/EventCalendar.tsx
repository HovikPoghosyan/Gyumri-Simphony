import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Calendar } from 'react-date-range';
import { enUS } from 'date-fns/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './EventCalendar.module.scss';

type EventType = 'concert' | 'workshop' | 'rehearsal';

type CalendarEvent = {
   date: Date;
   title: string;
   time: string;
   type: EventType;
};

const events: CalendarEvent[] = [
   { date: new Date(2026, 2, 18), title: 'Spring Melodies', time: '19 : 00', type: 'concert' },
];

const dayKey = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

function EventCalendar() {
   const [selectedDate, setSelectedDate] = useState<Date>(events[0]?.date || new Date());
   const [shownDate, setShownDate] = useState<Date>(events[0]?.date || new Date());
   const eventsListRef = useRef<HTMLDivElement | null>(null);

   const eventsByDate = useMemo(() => {
      const grouped = new Map<string, CalendarEvent[]>();

      events.forEach((event) => {
         const key = dayKey(event.date);
         const existing = grouped.get(key) || [];
         grouped.set(key, [...existing, event]);
      });

      return grouped;
   }, []);

   const selectedEvents = useMemo(() => eventsByDate.get(dayKey(selectedDate)) || [], [eventsByDate, selectedDate]);

   useEffect(() => {
      const handleExternalDateSelect = (event: Event) => {
         const customEvent = event as CustomEvent<{ date?: string }>;
         const incomingDate = customEvent.detail?.date;

         if (!incomingDate) {
            return;
         }

         const parsedDate = new Date(incomingDate);

         if (Number.isNaN(parsedDate.getTime())) {
            return;
         }

         setSelectedDate(parsedDate);
         setShownDate(parsedDate);
      };

      window.addEventListener('event-calendar-select-date', handleExternalDateSelect);

      return () => {
         window.removeEventListener('event-calendar-select-date', handleExternalDateSelect);
      };
   }, []);

   const handleDateChange = (date: Date) => {
      setSelectedDate(date);

      const hasEventsForDate = (eventsByDate.get(dayKey(date)) || []).length > 0;

      if (hasEventsForDate && window.matchMedia('(max-width: 768px)').matches) {
         eventsListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
   };

   return (
      <section className={styles.eventCalendarSection} id="eventCalendarSection">
         <h2 className={styles.title}>Event Calendar</h2>
         <p className={styles.subtitle}>Plan your visit to our performances</p>

         <div className={styles.contentWrap}>
            <div className={styles.calendarCard}>
               <Calendar
                  date={selectedDate}
                  locale={enUS}
                  shownDate={shownDate}
                  onChange={handleDateChange}
                  onShownDateChange={(date: Date) => setShownDate(date)}
                  color="rgba(171, 101, 243, 0.85)"
                  className={styles.calendar}
                  dayContentRenderer={(date: Date) => {
                     const dateEvents = eventsByDate.get(dayKey(date));
                     const primaryType = dateEvents?.[0]?.type;

                     return (
                        <span
                           className={styles.dayContent}
                           data-highlight={dateEvents ? 'true' : 'false'}
                           data-type={primaryType || undefined}
                        >
                           <span>{date.getDate()}</span>
                        </span>
                     );
                  }}
               />

               <div className={styles.legend}>
                  <span><i className={styles.legendDot} data-type="concert" /> Concert</span>
                  <span><i className={styles.legendDot} data-type="workshop" /> Workshop</span>
                  <span><i className={styles.legendDot} data-type="rehearsal" /> Rehearsal</span>
               </div>
            </div>

            <aside className={styles.eventsPanel}>
               <h3 className={styles.panelTitle}>
                  <FontAwesomeIcon icon={faCalendarDays} /> Event Calendar
               </h3>

               <div className={styles.eventsList} id="eventsList" ref={eventsListRef}>
                  {selectedEvents.length > 0 ? (
                     selectedEvents.map((event, index) => (
                        <article key={`${event.title}-${event.time}-${index}`} className={styles.eventCard} data-type={event.type}>
                           <p className={styles.eventDate}>
                              {event.date.getDate()} {event.date.toLocaleString('en-US', { month: 'long' })}
                           </p>
                           <p className={styles.eventTitle}>{event.title}</p>
                           <div className={styles.eventMeta}>
                              <span>{event.time}</span>
                              <span>{event.type}</span>
                           </div>
                        </article>
                     ))
                  ) : (
                     <p className={styles.emptyState}>No events for selected date</p>
                  )}
               </div>
            </aside>
         </div>
      </section>
   );
}

export default EventCalendar;