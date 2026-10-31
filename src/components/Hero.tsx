import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import ChatPreview from './ChatPreview';

const HIGHLIGHTS = [
  'Academics, admissions & exams',
  'Fees and official notices',
  'Answers in seconds',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-navy-100/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.08) 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="section-eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Your Smart College Companion
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-navy-900 text-balance sm:text-5xl lg:text-[3.4rem]">
            Your College Information,{' '}
            <span className="bg-gradient-to-r from-brand-600 to-navy-800 bg-clip-text text-transparent">
              Just One Chat Away.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-500 sm:text-lg">
            Get instant answers to college-related questions about academics, admissions,
            examinations, fees and notices through an intelligent assistant.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-navy-700">
                <CheckCircle2 className="h-4 w-4 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/signup" className="btn-primary">
              Start Chatting
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/#features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </div>

        {/* Right: chat preview */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full animate-fade-up [animation-delay:150ms]">
            <ChatPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
