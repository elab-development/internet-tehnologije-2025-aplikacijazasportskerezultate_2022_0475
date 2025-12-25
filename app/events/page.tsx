"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import events from "@/data/events.json";

export default function EventsPage() {
  const searchParams = useSearchParams();
  const sportFilter = searchParams.get("sport");

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
