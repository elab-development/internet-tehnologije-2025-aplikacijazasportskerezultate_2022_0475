"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  sport: string;
  date: string;
  location: string;
  image: string;
  score: string;
  status: string;
};

const events: Event[] = [
  { id: "1", title: "Crvena Zvezda vs Partizan", sport: "fudbal", date: "25.03.2026", location: 'Stadion "Rajko Mitić"', image: "/event1.jpg", score: "3 : 1", status: "Završeno" },
  { id: "2", title: "Crvena Zvezda vs Olympiacos", sport: "kosarka", date: "28.01.2026", location: "Belgrade Arena", image: "/event2.png", score: "88 : 82", status: "Završeno" },
  { id: "3", title: "Djokovic vs Sinner", sport: "tenis", date: "02.01.2026", location: "Wimbledon – Centre Court", image: "/event3.jpg", score: "3 : 2", status: "Završeno" },
  { id: "4", title: "BC Barcelona vs Partizan", sport: "kosarka", date: "28.02.2026", location: "Palau Blaugrana", image: "/event4.jpg", score: "90 : 85", status: "Završeno" },
];

export default function EventsPage() {
  const searchParams = useSearchParams();
  const sportFilter = searchParams.get("sport");

  // filtriramo događaje
  const filteredEvents = sportFilter
    ? events.filter((e) => e.sport.toLowerCase() === sportFilter.toLowerCase())
    : events;

  return (
    <main className="homepage">
      <h1 className="section-title">
        {sportFilter ? `${sportFilter.toUpperCase()} događaji` : "Svi događaji"}
      </h1>

      <div className="events-grid">
        {filteredEvents.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`} className="event-card">
            <img src={event.image} alt={event.title} />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="sport">{event.sport}</p>
              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

