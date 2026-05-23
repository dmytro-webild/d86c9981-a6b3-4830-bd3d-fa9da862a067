import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";
import Tag from "@/tag/Tag";



export const metadata: Metadata = {
  title: "Gomez Landscaping - Houston Service Experts",
  description: "Professional  services in Houston. Over 30 years of experience in landscape maintenance. Free quotes.",
  openGraph: {
    "title": "Gomez Trees & Landscaping - Houston",
    "description": "Your trusted local tree and landscaping professionals.",
    "type": "website",
    "siteName": "Gomez Trees & Landscaping"
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        <Tag />
</body>
      </ServiceWrapper>
    </html>
  );
}
