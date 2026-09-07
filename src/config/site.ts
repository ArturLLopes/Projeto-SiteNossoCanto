const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "Memorial Digital",
  title: "Eleanor Hart — Memorial Digital",
  description:
    "Um espaço digital para preservar histórias, fotografias e memórias de Eleanor Hart.",
  url: siteUrl,
};
