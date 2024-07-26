"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import {ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'

function Providers({ children }) {

  return (
      <ClerkProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        {children}
        <Toaster position="top-center" />
      </ThemeProvider>
      </ClerkProvider>
  );
}

export default Providers;
