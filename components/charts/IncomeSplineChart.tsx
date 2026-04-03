'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { useFinance } from '../../context/FinanceContext';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

export function IncomeSplineChart() {
  const { transactions } = useFinance();

  // Create last 6 months data for Income
  const monthData = Array.from({ length: 6 }).map((_, i) => {
    const date = subMonths(new Date(), 5 - i);
    const monthStart = startOfMonth(date).getTime();
    const monthEnd = endOfMonth(date).getTime();

    const monthIncome = transactions
      .filter(tx => tx.type === 'income' && new Date(tx.date).getTime() >= monthStart && new Date(tx.date).getTime() <= monthEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);

    return {
      name: format(date, 'MMM'),
      amount: monthIncome,
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 }, y: { duration: 0.25, delay: 0.1 } }}
      className="surface-card shine-card p-4 sm:p-6 rounded-md transition-colors duration-200"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Income Trend</h3>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#c8ff1d] mr-2" />
          <span className="text-white/55 text-sm">Income</span>
        </div>
      </div>
      <div className="h-[240px] sm:h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c8ff1d" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#c8ff1d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid)" strokeOpacity={0.75} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-tick)', fontSize: 12 }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-tick)', fontSize: 12 }} tickFormatter={(val) => `₹${val}`} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: '1px solid rgba(200,255,29,0.18)', background: 'rgba(7, 11, 8, 0.96)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.28)' }}
              itemStyle={{ color: '#f2f4ea', fontWeight: 600 }}
              formatter={(value: any) => [`₹${value}`, 'Income']}
            />
            <Area 
              type="monotone" 
              dataKey="amount" 
              stroke="#c8ff1d" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorIncome)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
