import { Link } from 'react-router-dom';
import { GraduationCap, Sparkles } from 'lucide-react';

type LogoProps = {
  className?: string;
  showText?: boolean;
  textClassName?: string;
  to?: string;
};

export default function Logo({
  className = '',
  showText = true,
  textClassName = '',
  to = '/',
}: LogoProps) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-800 to-brand-600 shadow-soft ring-1 ring-navy-900/10 transition-transform duration-200 group-hover:scale-105">
        <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
        <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-brand-400 ring-2 ring-white">
          <Sparkles className="h-2.5 w-2.5 text-white" strokeWidth={2.5} />
        </span>
      </span>
      {showText && (
        <span className={`font-display text-lg font-bold tracking-tight text-navy-900 ${textClassName}`}>
          AI College<span className="text-brand-600"> Assistant</span>
        </span>
      )}
    </Link>
  );
}
