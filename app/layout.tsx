import type { Metadata } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";

const SpaceGroteskFont = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-space-grotesk"
})
const SourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});
const MonaspaceArgon_Regular = localFont({
  src: "./fonts/MonaspaceArgon-Regular.woff",
  variable: "--font-argon",
  weight: "300"
})

export const metadata: Metadata = {
  title: "Exploring STEM Literacy",
  description: "Teaching high schoolers STEM skills and empowers them to teach their peers. A project offered by The Young People's Project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGroteskFont.variable} ${SourceSans.variable} ${MonaspaceArgon_Regular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
