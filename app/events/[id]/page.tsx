"use client";

import { use } from "react";
import Link from "next/link";
import events from "@/data/events.json";

export default function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const eventId = resolvedParams.id;
  const event = events.find((e) => e.id.toString() === eventId);

  if (!event) return <p>Događaj nije pronađen.</p>;

  const labels: { [key: string]: string } = {
    possession: "Posed lopte",
    shots: "Ukupno šuteva",
    shotsOnTarget: "Šutevi u okvir",
    corners: "Korneri",
    fouls: "Faulovi",
    yellowCards: "Žuti kartoni",
    fieldGoalPercent: "Šut iz igre %",
    threePointers: "Pogođene trojke",
    rebounds: "Skokovi",
    assists: "Asistencije",
    turnovers: "Izgubljene lopte",
    freeThrows: "Slobodna bacanja",
    steals: "Ukradene lopte",
    aces: "Asovi",
    firstServe: "Prvi servis %",
    breakPointsWon: "Brejk lopte",
    winners: "Vineri",
    unforcedErrors: "Neiznuđene greške",
    totalPoints: "Ukupno poena"
  };

  return (
    <main className="event-details">
      <div className="event-banner-container">
        <img src={event.image} alt={event.title} className="event-banner-small" />
      </div>

      <div className="event-details-card">
        <h1 className="event-title-details">{event.title}</h1>
        
        <div className="event-meta" style={{ justifyContent: "center" }}>
          <span>🏆 {event.sport.toUpperCase()}</span>
          <span>📅 {event.date}</span>
        </div>

        <div className="event-score-details">{event.result}</div>

        <div className="stats-container">
          <div style={{ textAlign: "center" }}>
            <h3 className="stats-title">Statistika meča</h3>
          </div>

          {event.stats ? (
            Object.entries(event.stats).map(([key, values]) => {
              const val = values as [number, number];
              const total = val[0] + val[1];
              // Izračunavanje širine bara u procentima
              const leftWidth = total > 0 ? (val[0] / total) * 100 : 50;
              const rightWidth = total > 0 ? (val[1] / total) * 100 : 50;

              return (
                <div className="stat-row" key={key}>
                  <div className="stat-labels">
                    <span>{val[0]}{key.toLowerCase().includes("percent") || key === "firstServe" || key === "possession" ? "%" : ""}</span>
                    <span>{labels[key] || key}</span>
                    <span>{val[1]}{key.toLowerCase().includes("percent") || key === "firstServe" || key === "possession" ? "%" : ""}</span>
                  </div>
                  <div className="stat-bar-bg">
                    <div 
                      style={{ width: `${leftWidth}%` }} 
                      className="stat-bar-left"
                    ></div>
                    <div 
                      style={{ width: `${rightWidth}%` }} 
                      className="stat-bar-right"
                    ></div>
                  </div>
                </div>
              );
            })
          ) : (
            <p style={{ textAlign: "center", opacity: 0.6 }}>Statistika nije dostupna za ovaj meč.</p>
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

