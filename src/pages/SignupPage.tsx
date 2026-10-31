import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';
import AuthForm from '@/components/AuthForm';

export default function SignupPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-navy-50/40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-navy-100/40 blur-3xl" />
      </div>

      <header className="container-page flex h-16 items-center justify-between sm:h-18">
        <Logo />
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-600 transition-colors hover:text-navy-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-5 py-10">
        <div className="w-full max-w-md animate-fade-up">
          <div className="mb-6 text-center">
            <h1 className="font-display text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Create your account
            </h1>
            <p className="mt-2 text-sm text-navy-500">
              Join AI College Assistant — your smart college companion.
            </p>
          </div>
          <AuthForm mode="signup" />
        </div>
      </main>
    </div>
  );
}
