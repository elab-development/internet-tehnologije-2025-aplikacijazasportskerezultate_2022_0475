import events from "@/data/events.json";
import EventCard from "./components/EventCard";

export default function Home() {
  return (
    <main className="homepage">
      <h1 className="section-title">AKTUELNI DOGAĐAJI🔥</h1>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            sport={event.sport}
            date={event.date}
            location={event.location}
            image={event.image}
            result={event.result}
          />
        ))}
      </div>
    </main>
  );
}
