import { MousePointerClick, MessagesSquare, Sparkle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Step = {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    icon: MousePointerClick,
    step: 1,
    title: 'Open the Assistant',
    description: 'Launch the AI College Assistant from any device — no complicated setup required.',
  },
  {
    icon: MessagesSquare,
    step: 2,
    title: 'Ask Your Question',
    description: 'Type your question in plain language about exams, fees, admissions or notices.',
  },
  {
    icon: Sparkle,
    step: 3,
    title: 'Get Information',
    description: 'Receive an accurate, easy-to-understand answer in seconds — ready to act on.',
  },
];

export default function HowItWorks() {
  return (
    <section id="about" className="scroll-mt-20 border-y border-navy-100 bg-navy-50/40 py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <MousePointerClick className="h-3.5 w-3.5" />
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Three simple steps to your answer
          </h2>
          <p className="mt-4 text-base text-navy-500">
            No manuals, no tutorials — just open, ask and get the information you need.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent md:block" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand-600 shadow-card ring-1 ring-navy-100 transition-transform duration-300 hover:scale-105">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-navy-900 text-xs font-bold text-white ring-4 ring-navy-50/40">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-navy-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
