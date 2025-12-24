import Link from "next/link";

export default function Home() {
  return (
    <main className="homepage">
      <h1 className="section-title">AKTUELNI DOGAĐAJI🔥</h1>

      <div className="events-grid">
        {/* Event 1 */}
        <Link href="/events/1" className="event-card">
          <img src="/event1.jpg" alt="Football match" />
          <div className="event-info">
            <h3>Crvena Zvezda vs Partizan</h3>
            <p className="sport">Fudbal</p>
            <p>📅 25.03.2026</p>
            <p>📍 Stadion "Rajko Mitić"</p>
          </div>
        </Link>

        {/* Event 2 */}
        <Link href="/events/2" className="event-card">
          <img src="/event2.png" alt="Basketball match" />
          <div className="event-info">
            <h3>Crvena Zvezda vs Olympiacos</h3>
            <p className="sport">Košarka</p>
            <p>📅 28.01.2026</p>
            <p>📍 Belgrade Arena</p>
          </div>
        </Link>

        {/* Event 3 */}
        <Link href="/events/3" className="event-card">
          <img src="/event3.jpg" alt="Tennis tournament" />
          <div className="event-info">
            <h3>Djokovic vs Sinner</h3>
            <p className="sport">Tenis</p>
            <p>📅 02.01.2026</p>
            <p>📍 Wimbledon Centre Court</p>
          </div>
        </Link>

        <Link href="/events/4" className="event-card">
          <img src="/event4.jpg" alt="Basketball match" />
          <div className="event-info">
            <h3>BC Barcelona vs Partizan</h3>
            <p className="sport">Košarka</p>
            <p>📅 28.02.2026</p>
            <p>📍Palau Blaugrana</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
