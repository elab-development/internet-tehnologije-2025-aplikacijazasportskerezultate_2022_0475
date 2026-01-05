"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        setMessage(data.error || "Greška pri loginu");
        return;
      }

      setMessage("Uspešno ste prijavljeni! Bićete preusmereni...");
      setIsError(false);

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      setIsError(true);
      setMessage("Greška na serveru");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

        {message && (
          <p className={`auth-message ${isError ? "error" : "success"}`}>
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Prijavljivanje..." : "Login"}
          </button>
        </form>

        <p>
          Nemate nalog? <a href="/register">Registrujte se</a>
        </p>
      </div>
    </main>
  );
}
