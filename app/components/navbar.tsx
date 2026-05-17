'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'
import Button from './ui/Button'
import { SocialIcons } from './ui/SocialIcons'
import type { SocialMediaItem, SanityFile } from '@/sanity/lib/types'

const links = [
  { href: '/', label: 'Home' },
  { href: '/agency-work', label: 'Career Projects' },
  { href: '/work', label: 'Freelance' },
  { href: '/projects', label: 'Side Projects' },
  { href: '/about', label: 'About' },
]

interface NavbarProps {
  socialMedia: SocialMediaItem[]
  resume?: SanityFile
}

export default function Navbar({ socialMedia, resume }: NavbarProps) {
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
          {/* Logo */}
          <Link href="/" className="group relative inline-flex items-center gap-2">
            <div className="relative w-14 h-14">
              <Image
                src="/hipster-logo.svg"
                alt="JTW Logo"
                width={56}
                height={56}
                priority
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-6 lg:gap-8 lg:flex">
            {links.slice(1).map(({ href, label }) => {
              const active = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={clsx(
                      'relative px-1 py-1 text-lg/6 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-purple',
                      active ? 'text-blue-500 dark:text-purple font-medium' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <span className="relative">
                      {label}
                      <span
                        className={clsx(
                          'absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-blue-500 dark:bg-purple transition-transform duration-300',
                          active && 'scale-x-100'
                        )}
                      />
                    </span>
                  </Link>
                </li>
              )
            })}

            {resume && (
              <li>
                <a
                  href={resume.asset.url}
                  download={resume.asset.originalFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-1 py-1 text-lg/6 transition-colors text-muted-foreground hover:text-foreground rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-purple"
                >
                  <span className="relative">
                    Resume
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-foreground transition-transform duration-300 hover:scale-x-100" />
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-4">
          {/* Tablet: theme toggle only */}
          <button
            type="button"
            onClick={() => setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark')}
            className="hidden md:inline-flex lg:hidden h-12 w-12 items-center justify-center rounded-lg border text-foreground transition-colors hover:bg-accent"
            aria-label="Toggle theme"
          >
            {mounted && (resolvedTheme ?? theme) === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* Desktop: social icons, CTA, theme toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {socialMedia && socialMedia.length > 0 && (
              <SocialIcons
                items={socialMedia}
                className="flex gap-4"
                iconSize={24}
              />
            )}

            <Link href="/#contact">
              <Button variant="solid" size="medium">
                Get in Touch
              </Button>
            </Link>

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

          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-lg border text-foreground transition-colors hover:bg-accent"
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

      {/* Mobile menu with slide-in animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t bg-background/95 backdrop-blur"
          >
            <div className="mx-auto max-w-6xl px-4 py-6 space-y-4">
              <div>
                {links.slice(1).map(({ href, label }) => {
                  const active = pathname === href || (href !== '/' && pathname.startsWith(href))
                  return (
                    <div key={href}>
                      <Link
                        href={href}
                        className={clsx(
                          'block px-4 py-3 text-lg font-medium rounded-lg transition-colors',
                          active
                            ? 'text-blue-500 dark:text-purple bg-accent'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </div>
                  )
                })}

                {resume && (
                  <div>
                    <a
                      href={resume.asset.url}
                      download={resume.asset.originalFilename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-lg font-medium rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-accent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Resume
                    </a>
                  </div>
                )}
              </div>

              {socialMedia && socialMedia.length > 0 && (
                <div className="flex items-center gap-4 px-4">
                  <SocialIcons
                    items={socialMedia}
                    className="flex gap-4"
                    iconSize={24}
                  />
                </div>
              )}

              <div className="flex flex-col items-start space-y-4 px-4">
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="solid" size="large">
                    Get in Touch
                  </Button>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setTheme((resolvedTheme ?? theme) === 'dark' ? 'light' : 'dark')
                    setIsMobileMenuOpen(false)
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
