"use client";
import { useState } from "react";

export default function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p>
          Nemate nalog? <a href="/register">Registrujte se</a>
        </p>
      </div>
    </main>
  );
}

