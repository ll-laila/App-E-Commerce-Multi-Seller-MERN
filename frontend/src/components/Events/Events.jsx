<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/styles';
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);  
   
  return (
    <div>
      {
        !isLoading && (
          <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
              <h1>Événements populaires</h1>
            </div>

            <div className="w-full grid">
              {
                allEvents?.length > 0 ? (
                  allEvents.map((event) => (
                    <EventCard key={event.id} data={event} />
                  ))
                ) : (
                  <h4>Aucun événement disponible !</h4>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Events;
=======
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../styles/styles';
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);  
   
  return (
    <div>
      {
        !isLoading && (
          <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
              <h1>Popular Events</h1>
            </div>

            <div className="w-full grid">
              {
                allEvents?.length > 0 ? (
                  allEvents.map((event) => (
                    <EventCard key={event.id} data={event} />
                  ))
                ) : (
                  <h4>No Events Available!</h4>
                )
              }
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Events;
>>>>>>> 70a7b4d18f820decbe5e08a8aff07762ed54d773
