import { urbanist } from "@/fonts";
import "./globals.css";
import { ThemeContextProvider } from "@/context/themeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
