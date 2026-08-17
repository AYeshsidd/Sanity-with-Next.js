"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, ShoppingCart } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);


useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 1024px)");

  const handleResize = (e: MediaQueryListEvent) => {
    if (e.matches) {
      setOpen(false);
    }
  };

  mediaQuery.addEventListener("change", handleResize);

  // Close immediately if already on desktop
  if (mediaQuery.matches) {
    setOpen(false);
  }

  return () => {
    mediaQuery.removeEventListener("change", handleResize);
  };
}, []);

  return (
    <>
      {/* Menu Button */}
      <button
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
        className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 lg:hidden"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[300px] md:w-[500px] flex-col bg-white shadow-2xl  lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b px-5 py-4">

                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 text-gray-400 hover:bg-gray-100"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-5 py-6 uppercase tracking-wider">
                <ul className="space-y-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 text-base font-light  text-gray-500 transition hover:bg-gray-100 hover:text-black"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="my-6 border-t" />

                {/* Icons */}
                <div className="space-y-2 text-gray-400">
                  <Link
                    href="/search"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3  hover:bg-gray-100"
                  >
                    <Search size={20} />
                    Search
                  </Link>

                  <Link
                    href="/cart"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-gray-100"
                  >
                    <ShoppingCart size={20} />
                    Cart
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="border-t p-5 text-sm text-gray-500">
                © 2026 United Home
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}