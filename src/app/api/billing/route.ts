import { NextRequest } from "next/server";
import { TIERS } from "@/core/tiers-config";
import { SUPER_ADMIN_EMAIL, PARTNER_EMAILS } from "@/core/user-tiers";

export async function POST(req: NextRequest) {
  const { email, tier } = await req.json();

  if (!email || !tier || !TIERS[tier]) {
    return Response.json({ error: "Invalid billing request" }, { status: 400 });
  }

  if (email === SUPER_ADMIN_EMAIL || PARTNER_EMAILS.includes(email)) {
    return Response.json({
      status: "ok",
      tier: "GOD",
      message: "Super Admin / Partner: free forever"
    });
  }

  return Response.json({
    status: "ok",
    tier,
    message: "Stripe subscription would be created here"
  });
}
