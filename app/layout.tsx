
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HookflowAI — Agentes de IA para crecer",
  description: "Landings rápidas generadas con Next.js para HookflowAI.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
