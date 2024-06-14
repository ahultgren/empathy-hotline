"use client";

import { ReactElement, useEffect, useState } from "react";
import { default as WeekView, Event } from "./weekview";

type GCalEvent = {
  summary: string;
  id: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };
};

function formatEvents(events: GCalEvent[]): Event[] {
  return events.map(({ id, summary, start, end }) => {
    return {
      id,
      title: summary,
      startDate: new Date(start.dateTime),
      endDate: new Date(end.dateTime),
    };
  });
}

export default function Calendar({}: {}): ReactElement {
  const [loaded, setLoaded] = useState(false);
  const [events, setEvents]: [Event[], any] = useState([]);

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
      setEvents(formatEvents(data.items || []));
      return data.items;
    }

    fetchData();
  }, []);

  // TODO No-planned-sessions view
  console.log(events);

  if (!loaded) {
    return <Loading />;
  }

  return <WeekView events={events}></WeekView>;
}

function Loading() {
  return <div>Loading</div>;
}
