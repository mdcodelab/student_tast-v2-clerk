"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import {ClerkProvider} from '@clerk/nextjs'

function Providers({ children }) {

  return (
      <ClerkProvider>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        {children}
        <Toaster position="top-center" />
      </ThemeProvider>
      </ClerkProvider>
  );
}

export default Providers;
