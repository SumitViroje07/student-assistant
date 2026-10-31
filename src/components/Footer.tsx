import { Link } from 'react-router-dom';
import { GraduationCap, Sparkles } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/#features' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
];

const FEATURE_LINKS = [
  { label: 'AI Chat Assistance', to: '/#features' },
  { label: 'Academic Information', to: '/#features' },
  { label: 'Admission Assistance', to: '/#features' },
  { label: 'College Notices', to: '/#features' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-navy-100 bg-navy-50/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-brand-600 shadow-soft ring-1 ring-navy-900/10">
                <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
                <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-brand-400 ring-2 ring-white">
                  <Sparkles className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
                </span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-navy-900">
                AI College<span className="text-brand-600"> Assistant</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-500">
              Your Smart College Companion. Get instant, accurate answers to college-related
              questions about academics, admissions, examinations, fees and notices — all through a
              simple chat.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-500 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature links */}
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Features</h3>
            <ul className="mt-4 space-y-3">
              {FEATURE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-500 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-100 pt-6 sm:flex-row">
          <p className="text-xs text-navy-400">
            © {year} AI College Assistant. All rights reserved.
          </p>
          <p className="text-xs text-navy-400">
            Built with React, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
