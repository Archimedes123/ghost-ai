import type { Metadata } from "next";
import { Archivo, Archivo_Black, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ghost AI",
  description:
    "The collaborative canvas for designing and documenting software systems.",
};

/**
 * Clerk's `dark` theme is the base; every override points at an existing
 * globals.css design token so Clerk UI tracks the app's palette with no
 * hard-coded colors.
 */
const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--card)",
    colorForeground: "var(--card-foreground)",
    colorPrimary: "var(--primary)",
    colorPrimaryForeground: "var(--primary-foreground)",
    colorInput: "var(--input)",
    colorInputForeground: "var(--foreground)",
    colorNeutral: "var(--foreground)",
    colorMuted: "var(--muted)",
    colorMutedForeground: "var(--muted-foreground)",
    colorBorder: "var(--border)",
    colorRing: "var(--ring)",
    colorDanger: "var(--destructive)",
    borderRadius: "var(--radius)",
    fontFamily: "var(--font-sans)",
    fontFamilyMono: "var(--font-mono)",
  },
} as const;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html
        lang="en"
        className={`dark ${archivo.variable} ${archivoBlack.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    </ClerkProvider>
  );
}
