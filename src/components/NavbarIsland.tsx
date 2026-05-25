import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";

export default function NavbarIsland() {
  const [currentLang, setCurrentLang] = useState<"en" | "pt">("en");

  // Detect the current language from the URL on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if the current URL path starts with /pt
      const isPt = window.location.pathname.startsWith("/pt") || window.location.pathname === "/pt";
      setCurrentLang(isPt ? "pt" : "en");
    }
  }, []);

  const toggleLanguage = () => {
    if (typeof window === "undefined") return;
    
    const pathname = window.location.pathname;
    let newPath = "/";

    if (currentLang === "en") {
      // Switch to Portuguese: Add /pt to the current route
      newPath = pathname === "/" ? "/pt" : `/pt${pathname}`;
    } else {
      // Switch to English: Remove /pt from the route
      newPath = pathname.replace(/^\/pt\/?/, "/") || "/";
      // Clean up double slashes just in case
      newPath = newPath.replace(/\/\//g, "/");
    }

    // Trigger the navigation
    window.location.href = newPath;
  };

  return (
    // Changed defaultTheme to "dark" to fix your initial load preference!
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider delayDuration={0}>
        <Navbar />
        
        {/* Floating Language Switcher - Top Right */}
        <button
          onClick={toggleLanguage}
          className="fixed top-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border text-sm font-bold text-foreground shadow-sm hover:bg-muted transition-colors cursor-pointer"
          aria-label="Toggle language"
          title={currentLang === "en" ? "Mudar para Português" : "Switch to English"}
        >
          {currentLang === "en" ? "PT" : "EN"}
        </button>

      </TooltipProvider>
    </ThemeProvider>
  );
}