"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulacija slanja poruke
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="contact-page">
      <h1>Kontakt</h1>
      <p>Ovde možete poslati poruku našem timu ili nas kontaktirati direktno.</p>

      <div className="contact-info">
        <div>
          <strong>Email:</strong> livescores@gmail.com
        </div>
        <div>
          <strong>Telefon:</strong> +381 61 172 0091
        </div>
        <div>
          <strong>Adresa:</strong> Bulevar Kralja Aleksandra 73, Beograd
        </div>
        <div>
          <strong>Radno vreme:</strong> Ponedeljak - Petak, 09:00 - 17:00
        </div>
      </div>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ime i prezime"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Vaša poruka"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="nav-button">
            Pošalji
          </button>
        </form>
      ) : (
        <p className="success-message">Hvala! Vaša poruka je poslata.</p>
      )}
    </main>
  );
}
