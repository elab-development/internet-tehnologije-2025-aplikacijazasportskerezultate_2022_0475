import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getAuthUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { userId: number; role: string };

    return decoded;
  } catch {
    return null;
  }
}
