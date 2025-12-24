"use client";
import { useState } from "react";

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p>
          Već imate nalog? <a href="/login">Prijavite se</a>
        </p>
      </div>
    </main>
  );
}
