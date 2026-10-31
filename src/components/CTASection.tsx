import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-700 px-6 py-14 shadow-lift sm:px-12 sm:py-16">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-navy-500/40 blur-3xl" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-white/15">
              <Rocket className="h-3.5 w-3.5" />
              Get Started
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Ready to Make College Information Easier?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-100 sm:text-lg">
              Start exploring a smarter way to access college information.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/signup"
                className="btn bg-white text-navy-900 shadow-lift hover:bg-brand-50 hover:shadow-glow active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
