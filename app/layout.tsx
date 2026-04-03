import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Zorvyn',
  description: 'Finance Dashboard',
};

import { ThemeProvider } from '../components/providers/ThemeProvider';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ fontFamily: "'Zalando Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif" }}>
      <body suppressHydrationWarning className="bg-[var(--app-bg)] text-[var(--app-text)]" style={{ fontFamily: "inherit" }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
