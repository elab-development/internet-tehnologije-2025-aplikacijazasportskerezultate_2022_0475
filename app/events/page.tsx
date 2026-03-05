import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ sportId?: string }>;
}) {
  const { sportId } = await searchParams;
  const sportIdNum = sportId ? parseInt(sportId, 10) : undefined;

  let sportName = "Svi događaji";

  if (sportIdNum) {
    const sport = await prisma.sport.findUnique({
      where: { id: sportIdNum },
    });

    if (sport) {
      sportName = `${sport.name.toUpperCase()} događaji`;
    }
  }

  const events = await prisma.event.findMany({
    where: sportIdNum ? { sportId: sportIdNum } : undefined,
    include: { sport: true },
    orderBy: { date: "asc" },
  });

  return (
    <main className="homepage">
      <h1 className="section-title">{sportName}</h1>

      <div className="events-grid">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`} className="event-card">
            <img src={event.imageUrl ?? "/event1.jpg"} alt={event.title} />

            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="sport">{event.sport.name}</p>
              <p>📅 {event.date.toLocaleDateString("sr-RS")}</p>
              <p>📍 {event.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}