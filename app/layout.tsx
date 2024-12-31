import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GlobalContextProvider } from "@/context/globalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frosty",
  description: "Frosty is a simple weather website that shows real-time weather updates based on your location. Stay updated with the latest conditions in your area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <GlobalContextProvider>
              {children}
            </GlobalContextProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
