'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PieChart, BarChart3, AlertTriangle, Eye, Shield } from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { toast } from 'react-hot-toast';

export const InsightsSection = () => {
  const { stats, transactions } = useFinance();

  const expensePercentage = stats.totalIncome > 0
    ? (stats.totalExpenses / stats.totalIncome) * 100
    : 0;

  const cashFlowDiff = stats.totalIncome - stats.totalExpenses;
  const isPositiveFlow = cashFlowDiff >= 0;

  const insights = [
    {
      title: 'Highest Spending Category',
      value: stats.highestCategory,
      subtitle: 'From all expenses',
      icon: PieChart,
    },
    {
      title: 'Monthly Comparison',
      value: isPositiveFlow ? 'Surplus' : 'Deficit',
      subtitle: `${isPositiveFlow ? '+' : '-'}₹${Math.abs(cashFlowDiff).toLocaleString()} vs last month target`,
      icon: BarChart3,
    },
    {
      title: 'Data Observation',
      value: expensePercentage > 80 ? 'Critical' : expensePercentage > 50 ? 'Warning' : 'Healthy',
      subtitle: `${expensePercentage.toFixed(0)}% of income spent`,
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="mt-8 space-y-0">
      {insights.map((insight, index) => (
        <motion.div
          key={insight.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.08 }}
          className="py-5"
        >
          {index > 0 && <div className="panel-divider mb-5" />}
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <insight.icon size={22} className="text-[#c8ff1d]" strokeWidth={2.2} />
            </div>
            <div className="min-w-0">
              <h4 className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.22em] mb-1">{insight.title}</h4>
              <div className="text-xl font-bold text-white mb-1">{insight.value}</div>
              <div className="panel-divider my-3 w-16" />
              <p className="text-white/48 text-xs leading-5 max-w-[16rem]">{insight.subtitle}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const RoleToggle = () => {
  const { role, setRole } = useFinance();

  const handleRoleChange = (newRole: 'admin' | 'viewer') => {
    if (role === newRole) return;
    setRole(newRole);
    toast(`Switched to ${newRole === 'admin' ? 'Admin' : 'Viewer'} mode`, {
      icon: newRole === 'admin' ? '🛡️' : '👁️',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="flex items-center space-x-3">
     
      <div className="flex items-center bg-white/5 p-1 rounded-full transition-colors duration-200 border border-white/8 backdrop-blur-sm">
        <button
          onClick={() => handleRoleChange('viewer')}
          className={`keep-brand-btn flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            role === 'viewer' ? 'bg-[#c8ff1d] text-black shadow-lg scale-105' : 'text-black/55 hover:text-black dark:text-white/55 dark:hover:text-white hover:bg-white/10'
          }`}
        >
          <Eye size={16} className="mr-2" />
          Viewer
        </button>
        <button
          onClick={() => handleRoleChange('admin')}
          className={`keep-brand-btn flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            role === 'admin' ? 'bg-[#c8ff1d] text-black shadow-lg scale-105' : 'text-black/55 hover:text-black dark:text-white/55 dark:hover:text-white hover:bg-white/10'
          }`}
        >
          <Shield size={16} className="mr-2" />
          Admin
        </button>
      </div>
    </div>
  );
};
