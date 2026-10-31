import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

type AuthFormProps = {
  mode: 'login' | 'signup';
};

type FormErrors = {
  name?: string;
  email?: string;
  password?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === 'signup';
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): FormErrors {
    const next: FormErrors = {};
    if (isSignup && name.trim().length < 2) {
      next.name = 'Please enter your full name.';
    }
    if (!EMAIL_RE.test(email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (password.length < 6) {
      next.password = 'Password must be at least 6 characters.';
    }
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Frontend-only mock — no real authentication.
    setSuccess(true);
    setTimeout(() => {
      navigate('/');
    }, 1400);
  }

  if (success) {
    return (
      <div className="card p-8 text-center animate-fade-in">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-xl font-bold text-navy-900">
          {isSignup ? 'Account created' : 'Signed in'}
        </h2>
        <p className="mt-2 text-sm text-navy-500">
          {isSignup
            ? 'Welcome to AI College Assistant. Redirecting you home…'
            : 'You are now signed in. Redirecting you home…'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
      {isSignup && (
        <div className="mb-4">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-700">
            Full name
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              className={`input-field pl-10 ${submitted && errors.name ? 'ring-2 ring-red-400' : ''}`}
            />
          </div>
          {submitted && errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.name}
            </p>
          )}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-700">
          Email address
        </label>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@college.edu"
            className={`input-field pl-10 ${submitted && errors.email ? 'ring-2 ring-red-400' : ''}`}
          />
        </div>
        {submitted && errors.email && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.email}
          </p>
        )}
      </div>

      <div className="mb-2">
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-navy-700">
          Password
        </label>
        <div className="relative">
          <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete={isSignup ? 'new-password' : 'current-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={isSignup ? 'Create a password' : 'Enter your password'}
            className={`input-field px-10 ${
              submitted && errors.password ? 'ring-2 ring-red-400' : ''
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-400 transition-colors hover:text-navy-700"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {submitted && errors.password && (
          <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
            <AlertCircle className="h-3.5 w-3.5" />
            {errors.password}
          </p>
        )}
      </div>

      {!isSignup && (
        <div className="mb-5 mt-2 flex items-center justify-end">
          <button
            type="button"
            className="text-xs font-medium text-brand-700 transition-colors hover:text-brand-800"
          >
            Forgot password?
          </button>
        </div>
      )}

      {isSignup && <div className="mb-5 mt-2" />}

      <button type="submit" className="btn-primary w-full">
        {isSignup ? 'Create account' : 'Sign in'}
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-6 text-center text-sm text-navy-500">
        {isSignup ? (
          <>
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-brand-700 hover:text-brand-800">
              Sign in
            </Link>
          </>
        ) : (
          <>
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="font-semibold text-brand-700 hover:text-brand-800">
              Get started
            </Link>
          </>
        )}
      </p>

      <p className="mt-4 text-center text-[11px] leading-relaxed text-navy-400">
        Demo mode — this is a frontend-only preview. No real account is created.
      </p>
    </form>
  );
}
