import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password || password.length < 6) {
      return new Response(JSON.stringify({ error: "تحقق من البيانات" }), { status: 400 });
    }
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return new Response(JSON.stringify({ error: "البريد مستخدم مسبقًا" }), { status: 400 });
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { email, name, passwordHash } });
    return new Response(JSON.stringify({ ok: true }), { status: 201 });
  } catch {
    return new Response(JSON.stringify({ error: "خطأ غير متوقع" }), { status: 500 });
  }
}
