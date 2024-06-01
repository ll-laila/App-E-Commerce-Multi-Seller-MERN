import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

const BestEvent = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [shuffledEvents, setShuffledEvents] = useState([]);

  useEffect(() => {
    if (allEvents?.length > 0) {
      setShuffledEvents(shuffleArray([...allEvents]));
    }
  }, [allEvents]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex === shuffledEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [shuffledEvents]);

  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section} `}>
          <div className={`${styles.heading}`}>
            <h1>Les promotions limitées</h1>
          </div>

          <div className="w-full grid">
            {shuffledEvents.length !== 0 && (
              <EventCard key={shuffledEvents[currentEventIndex].id} data={shuffledEvents[currentEventIndex]} />
            )}

            <h4>{shuffledEvents?.length === 0 && "Aucun événement disponible !"}</h4>
          </div>
        </div> 
      )}
    </div>
  );
};

export default BestEvent;
