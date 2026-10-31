import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/#features' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-100 bg-white/85 backdrop-blur-md shadow-soft'
          : 'border-b border-transparent bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between sm:h-18">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link to="/login" className="btn-secondary">
            <LogIn className="h-4 w-4" />
            Login
          </Link>
          <Link to="/signup" className="btn-primary">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-navy-700 ring-1 ring-navy-100 transition hover:bg-navy-50 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-navy-100 bg-white transition-[max-height,opacity] duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 transition hover:bg-navy-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-2">
            <Link to="/login" className="btn-secondary flex-1">
              <LogIn className="h-4 w-4" />
              Login
            </Link>
            <Link to="/signup" className="btn-primary flex-1">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
