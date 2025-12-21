import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* Glavni sadržaj */}
      <section style={{ marginTop: "2rem" }}>
        <h1>Sportski rezultati i statistika</h1>
        <p>Ovde možete pratiti sportske događaje, rezultate i statistike igrača.</p>

        <section style={{ marginTop: "2rem" }}>
          <h2>Popularni događaji</h2>
          <ul>
            <li>Fudbalska utakmica: Crvena Zvezda vs Partizan</li>
            <li>Teniski turnir: Novak Đoković Open</li>
            <li>Košarkaški meč: KK Partizan vs KK Crvena Zvezda</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
