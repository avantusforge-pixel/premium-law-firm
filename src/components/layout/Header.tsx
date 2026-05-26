"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Attorneys", href: "/attorneys" },
    { label: "Case Results", href: "/case-results" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-navy-900/80 backdrop-blur-lg border-b border-navy-100 dark:border-navy-700">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              Premier<span className="text-gold-600">Legal</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  className="underline-premium text-navy-900 dark:text-white font-medium"
                  whileHover={{ color: "#d4af37" }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-lg bg-gold-500 text-navy-900 font-semibold hover:bg-gold-600 transition-colors"
          >
            Contact Now
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="block px-4 py-2 text-navy-900 dark:text-white hover:bg-navy-50 dark:hover:bg-navy-800 rounded-lg">
                  {item.label}
                </div>
              </Link>
            ))}
          </motion.nav>
        )}
      </Container>
    </header>
  );
}
