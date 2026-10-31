import {
  MessageSquareText,
  BookOpen,
  ClipboardList,
  BellRing,
  Zap,
  Accessibility,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: MessageSquareText,
    title: 'AI Chat Assistance',
    description: 'Ask any college question in plain language and get clear, instant answers from a smart assistant.',
  },
  {
    icon: BookOpen,
    title: 'Academic Information',
    description: 'Find syllabus details, subject info, results and academic schedules without hunting through noticeboards.',
  },
  {
    icon: ClipboardList,
    title: 'Admission Assistance',
    description: 'Walk through eligibility, required documents and application steps with guided answers.',
  },
  {
    icon: BellRing,
    title: 'College Notices',
    description: 'Stay up to date with the latest official notices and announcements, all in one place.',
  },
  {
    icon: Zap,
    title: 'Instant Information',
    description: 'Skip the queues and waiting — get accurate college information in seconds, any time.',
  },
  {
    icon: Accessibility,
    title: 'Easy Accessibility',
    description: 'A simple, friendly interface designed so every student can use it with zero learning curve.',
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Zap className="h-3.5 w-3.5" />
            Features
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Everything you need in one assistant
          </h2>
          <p className="mt-4 text-base text-navy-500">
            A complete toolkit that turns scattered college information into one simple conversation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group card relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-brand-200"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-brand-50/70 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-50 to-navy-50 text-brand-600 ring-1 ring-brand-100 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
