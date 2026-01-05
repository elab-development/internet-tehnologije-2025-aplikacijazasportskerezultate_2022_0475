"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../components/Input";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSuccess(false);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Greška pri registraciji");
        setSuccess(false);
      } else {
        setMessage("Uspešno ste registrovani! Bićete preusmereni na login...");
        setSuccess(true);

        console.log("Registrovani korisnik:", data.user);

        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("Greška pri registraciji:", err);
      setMessage("Greška pri registraciji");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
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
          <button
            type="submit"
            className="auth-button"
            disabled={loading}
          >
            {loading ? "Registracija..." : "Register"}
          </button>
        </form>

        {message && (
          <p className={`auth-message ${success ? "success" : "error"}`}>
            {message}
          </p>
        )}

        <p>
          Već imate nalog? <a href="/login">Prijavite se</a>
        </p>
      </div>
    </main>
  );
}
