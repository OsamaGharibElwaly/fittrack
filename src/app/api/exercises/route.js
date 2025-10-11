// app/api/exercises/route.js
import { NextResponse } from "next/server";
export const runtime = "nodejs";

export async function GET(req) {
  try {
    const BASE = process.env.EXERCISE_API_BASE;
    if (!BASE) {
      return NextResponse.json({ error: "Server misconfigured (missing API base)" }, { status: 500 });
    }

    const { searchParams } = new URL(req.url);

    // هنسمح بمداخلتك القديمة كمان ونعمل mapping:
    const name            = searchParams.get("name") || searchParams.get("q") || "";
    const keywords        = searchParams.get("keywords") || "";
    const targetMuscles   = searchParams.get("targetMuscles") || searchParams.get("target") || "";
    const secondaryMuscles= searchParams.get("secondaryMuscles") || "";
    const exerciseType    = searchParams.get("exerciseType") || "";
    const bodyParts       = searchParams.get("bodyParts") || searchParams.get("bodyPart") || "";
    const equipments      = searchParams.get("equipments") || searchParams.get("equipment") || "";
    const limit           = searchParams.get("limit") || "20";
    // دعم cursor القديم بتاعك كـ after
    const after           = searchParams.get("after") || searchParams.get("cursor") || "";
    const before          = searchParams.get("before") || "";

    const extUrl = new URL(`${BASE}/exercises`);
    if (name)             extUrl.searchParams.set("name", name);
    if (keywords)         extUrl.searchParams.set("keywords", keywords);
    if (targetMuscles)    extUrl.searchParams.set("targetMuscles", targetMuscles);
    if (secondaryMuscles) extUrl.searchParams.set("secondaryMuscles", secondaryMuscles);
    if (exerciseType)     extUrl.searchParams.set("exerciseType", exerciseType);
    if (bodyParts)        extUrl.searchParams.set("bodyParts", bodyParts);
    if (equipments)       extUrl.searchParams.set("equipments", equipments);
    if (limit)            extUrl.searchParams.set("limit", limit);
    if (after)            extUrl.searchParams.set("after", after);
    if (before)           extUrl.searchParams.set("before", before);

    const extRes = await fetch(extUrl.toString(), {
      // مش محتاجين هيدرز خاصة هنا
      cache: "no-store",
    });

    if (!extRes.ok) {
      const txt = await extRes.text();
      return NextResponse.json(
        { error: `Upstream error ${extRes.status}`, details: txt.slice(0, 500) },
        { status: 502 }
      );
    }

    const json = await extRes.json();

    // توقعات شائعة للـ pagination: after/before أو pagination.next.cursor
    const nextCursor =
      json?.pagination?.next?.cursor ??
      json?.meta?.nextCursor ??
      json?.nextCursor ??
      null;

    // لو الـ API بيرجع Array مباشرة
    const data = Array.isArray(json) ? json : (json.data ?? json.items ?? json);

    return NextResponse.json({
      data,
      meta: { nextCursor },
    });
  } catch (e) {
    return NextResponse.json({ error: e.message || "Internal error" }, { status: 500 });
  }
}
