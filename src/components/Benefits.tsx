import {
  Clock,
  Compass,
  Repeat2,
  MousePointerClick,
  MoonStar,
  LayoutGrid,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: Clock,
    title: "Saves students' time",
    description: 'Instant answers mean less waiting and more time for what matters.',
  },
  {
    icon: Compass,
    title: 'Easy access to college information',
    description: 'Everything lives in one place — no more digging through scattered noticeboards.',
  },
  {
    icon: Repeat2,
    title: 'Reduces repetitive enquiries',
    description: 'Common questions are answered once, accurately, for every student.',
  },
  {
    icon: MousePointerClick,
    title: 'Simple interface',
    description: 'A clean, friendly design that anyone can use without a tutorial.',
  },
  {
    icon: MoonStar,
    title: 'Available beyond office hours',
    description: 'Get answers late at night, on weekends and during holidays — anytime.',
  },
  {
    icon: LayoutGrid,
    title: 'Organized college information',
    description: 'Information is structured and categorized so answers stay clear and reliable.',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <Clock className="h-3.5 w-3.5" />
            Benefits
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Why students love it
          </h2>
          <p className="mt-4 text-base text-navy-500">
            Practical benefits that make college life simpler, calmer and more organized.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-navy-100/70 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:ring-brand-200"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
