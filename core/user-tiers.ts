export type Tier = "FREE" | "PRO" | "ULTRA" | "GOD";

export interface User {
  id: string;
  email: string;
  tier: Tier;
  isSuperAdmin: boolean;
  isPartner: boolean;
}

export const SUPER_ADMIN_EMAIL = "jesse@apex.local";

export const PARTNER_EMAILS: string[] = [
  "partner1@apex.local",
  "partner2@apex.local"
];

export function getDefaultTier(email: string): Tier {
  if (email === SUPER_ADMIN_EMAIL) return "GOD";
  if (PARTNER_EMAILS.includes(email)) return "GOD";
  return "FREE";
}
