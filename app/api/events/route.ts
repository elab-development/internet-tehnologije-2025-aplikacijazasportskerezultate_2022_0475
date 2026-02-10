import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const user = await getAuthUser();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await req.json();

  const event = await prisma.event.create({
    data: body,
  });

  return NextResponse.json(event);
}

// ================== UPDATE ==================
export async function PUT(req: Request) {
  const user = await getAuthUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id, ...data } = body;

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const event = await prisma.event.update({
    where: { id: Number(id) },
    data,
  });

  return NextResponse.json(event);
}

// ================== DELETE ==================
export async function DELETE(req: Request) {
  const user = await getAuthUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  await prisma.event.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ success: true });
}

