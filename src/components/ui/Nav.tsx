'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useCallback } from 'react';
import { services, industries } from '@/lib/data';
import ThemeToggle from '@/components/ui/ThemeToggle';

const chevron = (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const portalsLinks = [
  { label: 'Customer Portal', href: 'https://login.myvoip.co/portal/', external: true },
  { label: 'Fax Portal', href: 'https://faxing.myvoip.co/signin', external: true },
  { label: 'Support Portal', href: 'https://support.my-voip.com/support/sp-home', external: true },
  { label: 'Referral Sign-Up', href: '/contact', external: false },
];

const resourcesLinks = [
  { label: 'Cloud Telephony', href: '/cloud-telephony', external: false },
  { label: 'Virtual Reality (VR & Metaverse)', href: '/virtual-reality', external: false },
];

const supportLinks = [
  { label: 'Knowledge Base & Ticketing', href: 'https://myvoip.desk365.io/support', external: true },
  { label: 'VoIP Readiness', href: 'https://app.replycloud.io/My-Voip', external: true },
  { label: 'Ping Plotter Download', href: 'https://www.pingplotter.com/download/', external: true },
  {
    label: 'SIP ALG Detector',
    href: 'https://storage.googleapis.com/msgsndr/znhQrr00p5EJlrvEEXub/media/69380a0fe03e9db6a171c751.zip',
    external: true,
    download: true,
  },
];

type DropdownLink = { label: string; href: string; external: boolean; download?: boolean };

function Dropdown({
  label,
  links,
  width = 'w-56',
}: {
  label: string;
  links: DropdownLink[];
  width?: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Delay closing so the mouse can travel from button → panel without it snapping shut
  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <button className="px-3 py-2 text-slate-300 hover:text-white text-sm rounded-md hover:bg-slate-800 transition-colors flex items-center gap-1">
        {label}
        {chevron}
      </button>

      {open && (
        /* pt-2 creates a transparent bridge between the button bottom and the panel top */
        <div
          className={`absolute top-full left-0 ${width} pt-2 z-50`}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.download ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  download={link.download}
                  className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur bg-[var(--header-bg)] border-[color:var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MyVoIP"
              width={200}
              height={72}
              className="brand-logo h-11 w-auto object-contain sm:h-12 lg:h-14"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className="px-3 py-2 text-slate-300 hover:text-white text-sm rounded-md hover:bg-slate-800 transition-colors">
              Home
            </Link>

            <Dropdown
              label="Services"
              width="w-64"
              links={services.map((s) => ({ label: s.shortName, href: `/services/${s.slug}`, external: false }))}
            />

            <Dropdown
              label="Industries"
              width="w-56"
              links={industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}`, external: false }))}
            />

            <Dropdown label="Portals"   links={portalsLinks}   width="w-52" />
            <Dropdown label="Resources" links={resourcesLinks} width="w-64" />
            <Dropdown label="Support"   links={supportLinks}   width="w-60" />

            <Link href="/contact" className="px-3 py-2 text-slate-300 hover:text-white text-sm rounded-md hover:bg-slate-800 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA — desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <a href="tel:+18336986471" className="text-slate-300 hover:text-white text-sm transition-colors whitespace-nowrap">
              (833) 698-6471
            </a>
            <Link href="/quote" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 text-slate-300 hover:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto bg-[var(--surface)] border-t border-[color:var(--border)]">
          <div className="pb-3">
            <ThemeToggle mobile />
          </div>
          <Link href="/" className="block py-2 text-slate-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Home</Link>

          {[
            { heading: 'Services', links: services.map((s) => ({ label: s.shortName, href: `/services/${s.slug}`, external: false })) },
            { heading: 'Industries', links: industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}`, external: false })) },
            { heading: 'Portals', links: portalsLinks },
            { heading: 'Resources', links: resourcesLinks },
            { heading: 'Support', links: supportLinks },
          ].map(({ heading, links }) => (
            <div key={heading} className="py-2">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">{heading}</p>
              {links.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={(link as DropdownLink).download}
                    className="block py-1.5 pl-2 text-sm text-slate-300 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block py-1.5 pl-2 text-sm text-slate-300 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}

          <Link href="/contact" className="block py-2 text-slate-300 hover:text-white text-sm" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/quote" className="block mt-3 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
