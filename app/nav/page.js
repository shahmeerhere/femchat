import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <ClerkProvider>
      <nav className="w-full border-b bg-black backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-purple-600 to-indigo-500 w-8 h-8 flex items-center justify-center rounded-md text-white font-bold">
                M
              </div>
              <span className="text-lg font-semibold tracking-tight">Minegram</span>
            </div>

           

            {/* Right: Auth / User */}
            <div className="flex items-center gap-3">
              <SignedOut>
                <SignInButton>
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton>
                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm font-medium hover:opacity-90">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>
    </ClerkProvider>
  );
};

export default Navbar;
