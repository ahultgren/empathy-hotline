"use client";

import { ReactElement, useEffect, useState } from "react";
import styles from "./calendar.module.scss";
import { WeekView } from "react-weekview";

interface Event {
  summary: string;
  id: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
}

export default function Calendar({}: {}): ReactElement {
  const [loaded, setLoaded] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://content.googleapis.com/calendar/v3/calendars/c_cf675c480537741573479270681397bfc4cdd78fd7bffd5c92001ceb67a53d84@group.calendar.google.com/events?` +
          new URLSearchParams({
            timeMin: new Date().toISOString(),
            key: "AIzaSyAIa_4dUpz7C_z4yepaI_RpU8qDwl1R158",
          }),
        {
          referrerPolicy: "strict-origin-when-cross-origin",
          body: null,
          method: "GET",
          mode: "cors",
          credentials: "omit",
        }
      );
      const data = await response.json();

      // TODO handle error state
      setLoaded(true);
      setEvents(data.items || []);
    }

    fetchData();
  }, []);

  return loaded ? (
    <div>
      <WeekView />
      {events.map((event: Event) => (
        <Event key={event.id} {...event}></Event>
      ))}
    </div>
  ) : (
    <Loading></Loading>
  );
}

function Loading() {
  return <div>Loading</div>;
}

function Event({ id, summary, start }: Event) {
  return (
    <div key={id}>
      {summary} {start.dateTime}
    </div>
  );
}
