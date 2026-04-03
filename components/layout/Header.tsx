import React from 'react';
import { motion } from 'motion/react';
import { Menu, Bell } from 'lucide-react';
import { RoleToggle } from '../dashboard/InsightsAndRole';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useFinance } from '../../context/FinanceContext';

interface HeaderProps {
  activeTab: string;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setIsMobileMenuOpen }) => {
  const { role } = useFinance();
  const getSubtitle = (tab: string) => {
    switch (tab) {
      case 'Overview':
        return "Welcome back! Here's what's happening.";
      case 'Transactions':
        return "View and manage all your past transactions.";
      default:
        return `Manage your ${tab.toLowerCase()} here.`;
    }
  };

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 pb-5 border-b border-black/15 dark:border-white/8">
      <div className="flex items-center justify-between w-full md:w-auto">
        <div className="flex items-center">
          <button
            className="lg:hidden p-2 mr-4 -ml-2 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-all hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            >
              {activeTab}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/58 mt-1 hidden sm:block text-sm sm:text-base"
            >
              {getSubtitle(activeTab)}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-3 w-full md:w-auto mt-4 md:mt-0">
        <RoleToggle />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2.5 bg-white/5 border border-white/8 rounded-2xl text-white/65 hover:text-white hover:border-white/20 hover:bg-white/15 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all hidden sm:block">
            <Bell size={18} />
          </button>
          <div className="flex items-center ml-1 border border-white/8 bg-white/5 rounded-full pr-1 pl-3 py-1 shadow-sm backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/55 mr-2 sm:mr-3">
              {role}
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c8ff1d] to-[#71cf56] p-0.5 shadow-md shadow-black/30">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold text-[#c8ff1d]">
                JD
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;