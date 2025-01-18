import type { Metadata } from "next";
import { Inter, Ubuntu_Sans } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

// const inter = Inter({ subsets: ["latin"] });
const myFont = Ubuntu_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prasad Projects",
  description: "Project Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/G.png" sizes="any" />
      </head>
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}