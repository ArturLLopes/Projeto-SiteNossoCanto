const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "Canto Coral",
  title: "Solange  & Canto Coral",
  description:
    "Um espaço digital para preservar a história, trajetória musical e memórias de Solange Pinto Mendonça.",
  url: siteUrl,
  imageUrl: "/images/galeria/capa/favicon.ico",
};
