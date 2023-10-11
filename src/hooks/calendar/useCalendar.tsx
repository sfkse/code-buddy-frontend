import { useEffect, useState } from "react";
import Calendar from "@toast-ui/calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

const events = [
  {
    id: "event1",
    calendarId: "cal2",
    title: "Weekly meeting",
    start: "2023-10-08T09:00:00",
    end: "2023-10-08T10:00:00",
  },
  {
    id: "event2",
    calendarId: "cal1",
    title: "Lunch appointment",
    start: "2023-10-09T12:00:00",
    end: "2023-10-09T13:00:00",
  },
  // {
  //   id: "event3",
  //   calendarId: "cal2",
  //   title: "Vacation",
  //   start: "2023-10-08",
  //   end: "2023-10-08",
  //   isAllday: true,
  //   category: "allday",
  // },
];

const useCalendar = (view: string) => {
  const [calendar, setCalendar] = useState<Calendar | null>(null);
  useEffect(() => {
    const calendarInstance = new Calendar("#calendar", {
      defaultView: view,
      useFormPopup: true,
      useDetailPopup: true,
      timezone: {
        zones: [
          {
            timezoneName: "Europe/London",
            displayLabel: "London",
          },
        ],
      },
      calendars: [
        {
          id: "cal1",
          name: "Personal",
          backgroundColor: "#03bd9e",
        },
        {
          id: "cal2",
          name: "Work",
          backgroundColor: "#00a9ff",
        },
      ],
    });
    setCalendar(calendarInstance);
    // calendar.createEvents(events);
  }, [view]);
  return { calendar, events };
};

export default useCalendar;

