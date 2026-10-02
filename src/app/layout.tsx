import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne-face",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nabil Cambiaso — Senior Backend & AI Engineer",
  description:
    "Nabil Cambiaso, Senior Backend Engineer (AWS / Node.js) building cloud architecture, backend systems and AI-driven automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${grotesk.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="bg-grid-cyber relative min-h-full bg-void text-slate-200">
        {children}
      </body>
    </html>
  );
}
