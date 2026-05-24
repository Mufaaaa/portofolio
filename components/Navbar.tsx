"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/proyek", label: "Projects" },
  { href: "/kontak", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [currentHash, setCurrentHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncHash = () => {
      setCurrentHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sectionIds = ["projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const isActive = (href: string) => {
    const [pathPart, hashPart] = href.split("#");
    const path = pathPart || "/";

    if (hashPart) {
      return (
        pathname === "/" &&
        (activeSection === hashPart || currentHash === `#${hashPart}`)
      );
    }

    return pathname === path;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-300/20 bg-black/95 backdrop-blur-md [font-family:var(--font-poppins)]">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="rounded-md text-lg font-bold tracking-tight text-amber-300 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
        >
          Faiq Mufaaaa.
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40 ${
                  active
                    ? "text-amber-300 underline decoration-amber-300/80 underline-offset-8"
                    : "text-amber-200/80 hover:text-amber-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-amber-300 transition-colors hover:bg-amber-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:block">
          <Button
            asChild
            variant="outline"
            className="border-amber-300/60 bg-black text-amber-300 hover:bg-amber-300/10 hover:text-amber-200"
          >
            <Link href="/#contact">Consultation</Link>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18 }}
              className="relative z-50 border-t border-white/10 bg-black px-4 pb-5 pt-3 md:hidden"
            >
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
                {links.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "text-amber-300 underline decoration-amber-300/80 underline-offset-8"
                          : "text-amber-200/80 hover:bg-amber-300/10 hover:text-amber-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-lg border border-amber-300/50 px-4 py-3 text-sm font-semibold text-amber-300 transition-colors hover:bg-amber-300/10"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
