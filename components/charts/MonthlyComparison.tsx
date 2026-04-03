import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { useFinance } from '../../context/FinanceContext';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

export function MonthlyComparison() {
  const { transactions } = useFinance();

  // Create last 6 months data
  const monthData = Array.from({ length: 6 }).map((_, i) => {
    const date = subMonths(new Date(), 5 - i);
    const monthStart = startOfMonth(date).getTime();
    const monthEnd = endOfMonth(date).getTime();

    const monthIncome = transactions
      .filter(tx => tx.type === 'income' && new Date(tx.date).getTime() >= monthStart && new Date(tx.date).getTime() <= monthEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);

    const monthExpense = transactions
      .filter(tx => tx.type === 'expense' && new Date(tx.date).getTime() >= monthStart && new Date(tx.date).getTime() <= monthEnd)
      .reduce((acc, tx) => acc + tx.amount, 0);

    return {
      name: format(date, 'MMM yyyy'),
      Income: monthIncome,
      Expense: monthExpense,
      Net: monthIncome - monthExpense
    };
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ opacity: { duration: 0.5 }, y: { duration: 0.25 } }}
        className="surface-card shine-card p-6 rounded-[28px] transition-colors duration-200"
      >
        <h2 className="text-xl font-bold text-white mb-6">Monthly Financial Comparison</h2>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--chart-grid)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-tick)' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-tick)' }} tickFormatter={(val) => `$${val}`} />
              <Tooltip 
                cursor={{ fill: 'rgba(200,255,29,0.04)' }}
                contentStyle={{ borderRadius: '12px', border: '1px solid rgba(200,255,29,0.18)', background: 'rgba(7, 11, 8, 0.96)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.28)', color: '#f2f4ea' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="Income" fill="#c8ff1d" radius={[4, 4, 0, 0]} barSize={32} />
              <Bar dataKey="Expense" fill="#ffb84d" radius={[4, 4, 0, 0]} barSize={32} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {monthData.slice(-3).reverse().map((data) => (
          <motion.div
            key={data.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 },
                y: { duration: 0.25, delay: 0.08 }
            }}
              className="surface-card shine-card p-5 rounded-[28px] transition-colors duration-200"
          >
              <h3 className="text-lg font-semibold text-white mb-4">{data.name} Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                  <span className="text-white/55">Income</span>
                  <span className="font-semibold text-[#c8ff1d]">${data.Income.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between items-center">
                  <span className="text-white/55">Expense</span>
                  <span className="font-semibold text-[#ffb46a]">${data.Expense.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
                <div className="pt-3 border-t border-white/8 flex justify-between items-center">
                  <span className="text-white font-medium">Net</span>
                  <span className={`font-bold ${data.Net >= 0 ? 'text-[#7ff2a3]' : 'text-[#ff7f7f]'}`}>
                  ${data.Net.toLocaleString(undefined, {minimumFractionDigits: 2})}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
