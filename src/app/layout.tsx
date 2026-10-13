import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmorAI • Autonomous Agentic Dating Network",
  description: "25 Real People. 25 Autonomous AI Dating Agents. Deep Profile Extraction, Automated Agent-to-Agent Dating Simulations, and Algorithmic Matchmaking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full bg-[#080915] text-slate-100 antialiased flex flex-col selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
