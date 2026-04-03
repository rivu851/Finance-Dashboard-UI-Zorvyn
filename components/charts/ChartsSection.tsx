'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { useFinance } from '../../context/FinanceContext';
import { format, subDays, startOfDay, subMonths } from 'date-fns';

export const ChartsSection = () => {
  const { transactions } = useFinance();

  // Prepare Line Chart Data - Cumulative Balance over 6 intervals
  // To simulate the provided image, we want 6-8 distinct data points tracking balance.
  // We'll calculate balance at the end of each of the last 6 months.
  const intervals = 7;
  const lineData = Array.from({ length: intervals }).map((_, i) => {
    const date = subMonths(new Date(), intervals - 1 - i);
    const dateStr = format(date, 'MMM');
    const endOfMonthTime = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59).getTime();

    // calculate balance up to this month
    const balance = transactions
      .filter(tx => new Date(tx.date).getTime() <= endOfMonthTime)
      .reduce((acc, tx) => acc + (tx.type === 'income' ? tx.amount : -tx.amount), 0);

    // We add a starting baseline offset if empty to not look too flat if no early transactions
    return { name: dateStr, balance: balance || 0 };
  });

  // Prepare Pie Chart Data
  const categoryDataMap: Record<string, number> = {};
  transactions
    .filter(tx => tx.type === 'expense')
    .forEach(tx => {
      categoryDataMap[tx.category] = (categoryDataMap[tx.category] || 0) + tx.amount;
    });

  const pieData = Object.entries(categoryDataMap).map(([name, value]) => ({ name, value }));
  const COLORS = ['#6A2AF3', '#FF9900', '#3366FF', '#ef4444', '#10b981', '#ec4899'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 min-w-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 }, y: { duration: 0.25 } }}
        className="surface-card shine-card lg:col-span-2 rounded-sm p-4 sm:p-6 transition-colors duration-200 min-w-0"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Cash Flow</h3>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#c8ff1d] mr-2" />
              <span className="text-white/55">Balance</span>
            </div>
          </div>
        </div>
        <div className="h-[240px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid)" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--chart-tick)', fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--chart-tick)', fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: '1px solid rgba(200,255,29,0.18)', background: 'rgba(7, 11, 8, 0.96)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.28)', color: '#f2f4ea' }}
                formatter={(value: any) => [`$${value}`, 'Balance']}
              />
              <Line
                type="linear"
                dataKey="balance"
                stroke="#c8ff1d"
                strokeWidth={5}
                dot={{ r: 6, fill: '#081008', strokeWidth: 4, stroke: '#c8ff1d' }}
                activeDot={{ r: 8, strokeWidth: 0, fill: '#c8ff1d' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ opacity: { duration: 0.5 }, y: { duration: 0.28, delay: 0.2 } }}
        className="surface-card shine-card p-4 sm:p-8 sm:py-12 rounded-sm transition-colors duration-200 min-w-0 border border-black/20 dark:border-[rgba(200,255,29,0.2)]"
      >
        <h3 className="text-lg font-semibold text-white mb-6">Expenses by Category</h3>
        <div className="h-[240px] sm:h-[300px] w-full min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius="44%"
                outerRadius="68%"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid rgba(200,255,29,0.18)', background: 'rgba(7, 11, 8, 0.96)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.28)', color: '#f2f4ea' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm text-white/70">
          {pieData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-1.5 min-w-0">
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <span className="truncate max-w-[8rem] sm:max-w-none">{item.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
