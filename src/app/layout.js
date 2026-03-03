import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "VidBuddy - Universal Video Downloader",
  description: "The fastest and most reliable video downloader.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
