import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercator",
  description: "Talk to the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon/mercator.png" type="image/png" />
      <body>
        {children}
      </body>
    </html>
  );
}