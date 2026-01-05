import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const { username, email, password } = body;

    if (!username || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "Email or username already taken" }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

    const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: "7d" });
    
    return new Response(JSON.stringify({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error: any) {
    console.error("Register error:", error.message);
    console.error(error);
    return new Response(JSON.stringify({ error: error.message || "Internal server error" }), { status: 500 });
  }
}
