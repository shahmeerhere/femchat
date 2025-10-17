// app/layout.js
import { ClerkProvider } from "@clerk/nextjs";
import { GoHome } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { PiVideo } from "react-icons/pi";
import Link from "next/link";
import { PostsProvider } from "./post-context";
import "./globals.css";
// import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// ✅ Metadata for Next.js
export const metadata = {
  title: "Minegram",
  description: "A modern Instagram clone built with Next.js & Clerk",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
        >
          <PostsProvider>
            {children}

            <nav className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 flex justify-around items-center py-2 shadow-lg z-50">
              <Link
                href="/"
                className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition"
              >
                <GoHome size={24} />
              </Link>
              <Link
                href="/search"
                className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition"
              >
                <FiSearch size={24} />
              </Link>
              <button className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition">
                <TbSquareRoundedPlus size={26} />
              </button>
              <button className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition">
                <PiVideo size={24} />
              </button>
              <Link
                href="/profile"
                className="flex flex-col items-center text-gray-600 hover:text-indigo-600 transition"
              >
                <span className="text-sm">User</span>
              </Link>
            </nav>
          </PostsProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
