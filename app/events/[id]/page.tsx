import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const eventId = parseInt(id, 10);

  if (Number.isNaN(eventId)) {
    notFound();
  }

  const event = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      sport: true,
      result: true,
      statistics: true,
    },
  });

  if (!event) {
    notFound();
  }

  const resultText = event.result
    ? `${event.result.homeScore} : ${event.result.awayScore} (${event.result.status})`
    : "Rezultat nije dostupan";

  return (
    <main className="event-details">
      <div className="event-banner-container">
        <img
          src={event.imageUrl ?? "/event1.jpg"}
          alt={event.title}
          className="event-banner-small"
        />
      </div>

      <div className="event-details-card">
        <h1 className="event-title-details">{event.title}</h1>

        <div className="event-meta" style={{ justifyContent: "center" }}>
          <span>🏆 {event.sport.name.toUpperCase()}</span>
          <span>📅 {event.date.toLocaleDateString("sr-RS")}</span>
        </div>

        <div className="event-score-details">{resultText}</div>

        <div className="stats-container">
          <div style={{ textAlign: "center" }}>
            <h3 className="stats-title">Statistika</h3>
          </div>

          {event.statistics.length > 0 ? (
            <div className="match-stats">
              {event.statistics.map((s) => {
                const home = s.homeValue ?? 0;
                const away = s.awayValue ?? 0;
                const total = home + away;

                const homePct = total > 0 ? (home / total) * 100 : 50;
                const awayPct = 100 - homePct;

                const labelMap: Record<string, string> = {
                  possession: "Posed lopte",
                  shots: "Šutevi",
                  shotsOnTarget: "Šutevi u okvir",
                  corners: "Korneri",
                  fouls: "Prekršaji",
                  yellowCards: "Žuti kartoni",

                  fieldGoalPercent: "FG %",
                  threePointers: "3PT",
                  rebounds: "Skokovi",
                  assists: "Asistencije",
                  steals: "Ukradene lopte",
                  turnovers: "Izgubljene lopte",
                  freeThrows: "Slobodna bacanja",

                  aces: "Asevi",
                  firstServe: "Prvi servis %",
                  breakPointsWon: "Brejk lopte",
                  winners: "Vineri",
                  unforcedErrors: "Neiznuđene greške",
                  totalPoints: "Ukupno poena",
                };

                const label = labelMap[s.statName] ?? s.statName;

                return (
                  <div key={s.id} className="stat-row">
                    <div className="stat-top">
                      <span className="stat-num">{home}</span>
                      <span className="stat-name">{label}</span>
                      <span className="stat-num">{away}</span>
                    </div>

                    <div className="stat-bar">
                      <div
                        className="stat-bar-home"
                        style={{ width: `${homePct}%` }}
                      />
                      <div
                        className="stat-bar-away"
                        style={{ width: `${awayPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{ textAlign: "center", opacity: 0.6 }}>
              Statistika nije dostupna za ovaj meč.
            </p>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" className="nav-button">
            ← NAZAD NA REZULTATE
          </Link>
        </div>
      </div>
    </main>
  );
}