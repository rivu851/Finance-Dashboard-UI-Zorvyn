'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2.5 bg-white/5 border border-white/8 rounded-2xl text-white/65 transition-all w-10 h-10 flex items-center justify-center">
        <div className="w-5 h-5 opacity-0" />
      </button>
    );
  }

  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2.5 bg-white/5 border border-white/8 rounded-2xl text-white/65 hover:text-[var(--app-accent)] hover:border-[rgba(200,255,29,0.28)] hover:bg-white/8 hover:shadow-sm transition-all flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
