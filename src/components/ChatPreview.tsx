import { Sparkles } from 'lucide-react';

type ChatMessage = {
  from: 'student' | 'ai';
  text: string;
};

const SAMPLE_MESSAGES: ChatMessage[] = [
  { from: 'student', text: 'When is the next examination?' },
  {
    from: 'ai',
    text: 'You can find the latest examination schedule in the Examination section.',
  },
];

export default function ChatPreview() {
  return (
    <div className="relative w-full max-w-md">
      {/* Soft glow backdrop */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/50 via-navy-100/40 to-transparent blur-2xl" />

      <div className="overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-navy-100">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-navy-100 bg-gradient-to-r from-navy-900 to-navy-800 px-5 py-4">
          <div className="relative">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-soft ring-1 ring-white/20">
              <Sparkles className="h-5 w-5 text-white" strokeWidth={2.4} />
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 grid h-4 w-4 place-items-center">
              <span className="absolute h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-70 animate-pulse-ring" />
              <span className="relative h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-navy-800" />
            </span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">AI Assistant</p>
            <p className="flex items-center gap-1.5 text-xs text-brand-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Online now
            </p>
          </div>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-white/15">
            Preview
          </span>
        </div>

        {/* Messages */}
        <div className="space-y-4 bg-navy-50/40 px-5 py-6">
          {SAMPLE_MESSAGES.map((msg, i) =>
            msg.from === 'student' ? (
              <div
                key={i}
                className="flex items-start justify-end gap-2.5 animate-slide-in-right"
                style={{ animationDelay: `${i * 280}ms` }}
              >
                <div className="max-w-[78%] rounded-2xl rounded-tr-md bg-brand-600 px-4 py-3 text-sm text-white shadow-soft">
                  {msg.text}
                </div>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy-100 text-xs font-bold text-navy-600 ring-1 ring-navy-200">
                  S
                </span>
              </div>
            ) : (
              <div
                key={i}
                className="flex items-start gap-2.5 animate-slide-in-left"
                style={{ animationDelay: `${i * 280 + 140}ms` }}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                  <Sparkles className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <div className="max-w-[78%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm text-navy-800 shadow-soft ring-1 ring-navy-100">
                  {msg.text}
                </div>
              </div>
            ),
          )}

          {/* Typing indicator */}
          <div
            className="flex items-start gap-2.5 animate-fade-in"
            style={{ animationDelay: '760ms' }}
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
              <Sparkles className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-white px-4 py-3.5 shadow-soft ring-1 ring-navy-100">
              <span className="h-2 w-2 rounded-full bg-navy-300 animate-typing" />
              <span
                className="h-2 w-2 rounded-full bg-navy-300 animate-typing"
                style={{ animationDelay: '150ms' }}
              />
              <span
                className="h-2 w-2 rounded-full bg-navy-300 animate-typing"
                style={{ animationDelay: '300ms' }}
              />
            </div>
          </div>
        </div>

        {/* Input preview */}
        <div className="border-t border-navy-100 bg-white px-5 py-4">
          <div className="flex items-center gap-2 rounded-2xl bg-navy-50/80 px-4 py-2.5 ring-1 ring-navy-100">
            <input
              type="text"
              disabled
              placeholder="Ask about exams, fees, admissions…"
              className="flex-1 bg-transparent text-sm text-navy-700 placeholder:text-navy-400 focus:outline-none"
            />
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-600 text-white shadow-soft">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -left-4 top-24 hidden animate-float rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-navy-100 sm:block">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Instant</p>
        <p className="text-sm font-bold text-navy-900">24/7 Answers</p>
      </div>
      <div
        className="absolute -right-4 bottom-24 hidden animate-float rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-navy-100 sm:block"
        style={{ animationDelay: '1.5s' }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-600">Smart</p>
        <p className="text-sm font-bold text-navy-900">AI Powered</p>
      </div>
    </div>
  );
}
