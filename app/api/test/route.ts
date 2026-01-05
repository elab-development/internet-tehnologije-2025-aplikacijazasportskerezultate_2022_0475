import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify({ users }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Test endpoint error:", error.message);
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
