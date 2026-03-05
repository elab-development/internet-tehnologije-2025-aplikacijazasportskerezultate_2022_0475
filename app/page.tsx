import EventCard from "./components/EventCard";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const events = await prisma.event.findMany({
    include: {
      sport: true,
      result: true,
    },
    orderBy: { date: "asc" },
  });

  return (
    <main className="homepage">
      <h1 className="section-title">AKTUELNI DOGAĐAJI🔥</h1>

      <div className="events-grid">
        {events.map((event) => {
          const dateText = event.date.toLocaleDateString("sr-RS");

          const resultText = event.result
            ? `${event.result.homeScore} : ${event.result.awayScore} (${event.result.status})`
            : "Rezultat nije dostupan";

          return (
            <EventCard
              key={event.id}
              id={String(event.id)}
              title={event.title}
              sport={event.sport.name}
              date={dateText}
              location={event.location}
              image={event.imageUrl ?? "/event1.jpg"}
              result={resultText}
            />
          );
        })}
      </div>
    </main>
  );
}