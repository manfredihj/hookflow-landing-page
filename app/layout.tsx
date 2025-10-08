
import "./globals.css";
import type { Metadata } from "next";
import { FacebookPixel } from "@/components/FacebookPixel";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "HookflowAI — Agentes de IA para crecer",
  description: "Landings rápidas generadas con Next.js para HookflowAI.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <FacebookPixel />
        {children}
        <WhatsAppButton />
        <SpeedInsights />
      </body>
    </html>
  );
}
