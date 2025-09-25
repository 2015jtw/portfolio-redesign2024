'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import Button from './ui/Button'

const links = [
  { href: '/', label: 'Home' },                 // logo goes to page.tsx
  { href: '/work', label: 'Freelance' },        // work/page.tsx
  { href: '/projects', label: 'Projects' },     // projects/page.tsx
  { href: '/about', label: 'About' },           // about/page.tsx
  { href: '/JoshuaWorden_Resume.pdf', label: 'Resume', external: true }, // resume download
]

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => setMounted(true), [])
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-6">
          {/* Left: Logo */}
          <Link href="/" className="group relative inline-flex items-center gap-2">
            <div className="relative w-10 h-10">
              <img 
                src="/hipster-logo.svg" 
                alt="JTW Logo" 
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          {/* Center: underline nav */}
          <ul className="hidden items-center gap-8 md:flex">
          {links.slice(1).map(({ href, label, external }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    download
                    className={clsx(
                      'relative px-1 py-1 text-lg/6 transition-colors',
                      'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 hover:scale-x-100" />
                    </span>
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={clsx(
                      'relative px-1 py-1 text-lg/6 transition-colors',
                      active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <span className="relative">
                      {label}
                      <span
                        className={clsx(
                          'absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-300',
                          active && 'scale-x-100'
                        )}
                      />
                    </span>
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-4">
          {/* Desktop: Contact Button and Theme toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="solid"
              size="medium"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in Touch
            </Button>

            <button
              type="button"
              onClick={() => setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark')}
              className="inline-flex h-12 w-12 items-center justify-center rounded-lg border text-foreground transition-colors hover:bg-accent"
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme ?? theme) === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile: Hamburger menu */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex h-12 w-12 items-center justify-center rounded-lg border text-foreground transition-colors hover:bg-accent"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile hamburger menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-6">
            {/* Navigation Links */}
            <div className="space-y-4 mb-6">
              {links.slice(1).map(({ href, label, external }) => {
                const active = pathname === href || (href !== '/' && pathname.startsWith(href))
                return (
                  <div key={href}>
                    {external ? (
                      <a
                        href={href}
                        download
                        className={clsx(
                          'block px-4 py-3 text-lg font-medium rounded-lg transition-colors',
                          'text-muted-foreground hover:text-foreground hover:bg-accent'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className={clsx(
                          'block px-4 py-3 text-lg font-medium rounded-lg transition-colors',
                          active 
                            ? 'text-foreground bg-accent' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-start space-y-4">
              <Button
                variant="solid"
                size="large"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                Get in Touch
              </Button>

              <button
                type="button"
                onClick={() => {
                  setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-3 px-4 py-3 text-lg font-medium rounded-lg border text-foreground transition-colors hover:bg-accent"
              >
                {mounted && (resolvedTheme ?? theme) === 'dark' ? (
                  <>
                    <Sun className="h-5 w-5" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
