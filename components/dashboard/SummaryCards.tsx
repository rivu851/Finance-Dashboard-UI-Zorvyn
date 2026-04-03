'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Edit3, Wallet, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { toast } from 'react-hot-toast';
import { AnimatedNumber } from '../ui/AnimatedNumber';

interface SummaryCardsProps {
  onMonthlyComparisonClick?: () => void;
  onEditTransactionsClick?: () => void;
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({ onMonthlyComparisonClick, onEditTransactionsClick }) => {
  const { stats, role } = useFinance();

  const cards = [
    {
      title: 'Total Balance',
      value: stats.totalBalance,
      icon: Wallet,
      trend: stats.totalBalance >= 0 ? 'up' : 'down',
    },
    {
      title: 'Total Income',
      value: stats.totalIncome,
      icon: TrendingUp,
      trend: 'up',
    },
    {
      title: 'Total Expenses',
      value: stats.totalExpenses,
      icon: TrendingDown,
      trend: 'down',
    },
  ];

  return (
    <div className="space-y-4">
      {onMonthlyComparisonClick && (
        <div className="flex flex-wrap justify-start sm:justify-end gap-3 mb-5">
          {onEditTransactionsClick && role === 'admin' && (
            <button
              onClick={onEditTransactionsClick}
              className="keep-brand-btn flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#c8ff1d] text-xs sm:text-sm font-bold text-black hover:bg-zinc-800 hover:text-[#c8ff1d] transition-all"
            >
              <Edit3 size={16} className="brand-icon text-current transition-colors duration-200" />
              <span>Edit Transactions</span>
            </button>
          )}
          <button
            onClick={onMonthlyComparisonClick}
            className="keep-brand-btn flex items-center space-x-2 px-3 sm:px-4 py-2 bg-zinc-800 text-xs sm:text-sm font-medium text-[#c8ff1d] shadow-sm hover:bg-[#c8ff1d] hover:text-black  transition-all"
          >
            <BarChart3 size={16} className="brand-icon text-current transition-colors duration-200" />
            <span>View Monthly Comparison</span>
          </button>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.5, delay: index * 0.08 }, y: { duration: 0.3 } }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="relative py-5 md:px-6 md:py-3"
          >
            {index > 0 && <div className="hidden md:block absolute left-0 top-[15%] bottom-[15%] panel-divider-vertical z-10" />}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:hidden" />
            <div className="flex items-start gap-4 md:flex-col md:gap-4">
              <div className="shrink-0">
                <card.icon size={22} className="text-[#c8ff1d]" strokeWidth={2.2} />
              </div>
              <div className="min-w-0 flex-1 md:flex-none">
                <div className="flex items-center justify-between gap-3 md:justify-start">
                  <div>
                    <h3 className="text-white/72 text-xs font-semibold uppercase tracking-[0.24em]">{card.title}</h3>
                    <div className="panel-divider my-3 w-16" />
                  </div>
                  <div className="flex items-center text-[11px] font-medium px-2 py-1 rounded-full bg-white/5 text-white/72 border border-white/10 md:hidden">
                    <span className="mr-1">{card.trend === 'up' ? '↑' : '↓'}</span>
                    {card.trend === 'up' ? '+12%' : '-5%'}
                  </div>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">₹</span>
                  <AnimatedNumber value={card.value} className="text-2xl font-bold text-white" />
                </div>

                <div className="mt-3 hidden items-center text-[11px] font-medium px-2 py-1 rounded-full bg-white/5 text-white/72 border border-white/10 md:inline-flex">
                  <span className="mr-1">{card.trend === 'up' ? '↑' : '↓'}</span>
                  {card.trend === 'up' ? '+12%' : '-5%'}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
