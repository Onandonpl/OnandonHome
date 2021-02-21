import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/pl";

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_CALENDAR_ID}/events?key=${process.env.REACT_APP_CALENDAR_KEY}`
      );
      const response = await res.json();
      setEvents(
        response.items.map((item) => ({
          id: item.id,
          title: item.summary,
          start: new Date(item.start.dateTime),
          end: new Date(item.end.dateTime),
        }))
      );
    };
    return fetchData();
  }, []);

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700, width: 1700 }}
      messages={{
        next: "Następny",
        previous: "Poprzedni",
        today: "Dziś",
        month: "Miesiąc",
        week: "Tydzień",
        day: "Dzień",
      }}
    />
  );
};

export default MyCalendar;
