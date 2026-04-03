'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowUpDown, Download, PlusCircle, Trash2, Pencil } from 'lucide-react';
import { useFinance } from '../../context/FinanceContext';
import { format } from 'date-fns';
import { toast } from 'react-hot-toast';

export const TransactionList = ({ onAddClickAction, isCompact = false, onViewAllAction }: { onAddClickAction: () => void, isCompact?: boolean, onViewAllAction?: () => void }) => {
  const {
    filteredTransactions,
    searchQuery,
    setSearchQuery,
    filterType,
    setFilterType,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    deleteTransaction,
    role,
    transactions
  } = useFinance();

  const exportToCSV = () => {
    const headers = ['Date', 'Type', 'Category', 'Description', 'Amount'];
    const csvContent = [
      headers.join(','),
      ...filteredTransactions.map(tx => [
        format(new Date(tx.date), 'yyyy-MM-dd'),
        tx.type,
        tx.category,
        `"${tx.description.replace(/"/g, '""')}"`,
        tx.type === 'income' ? tx.amount : -tx.amount
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `transactions_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSort = (key: 'date' | 'amount') => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('desc');
    }
  };

  const handleAddClick = () => {
    if (role !== 'admin') {
      toast.error('Access Denied. Admin only.', { style: { borderRadius: '10px', background: '#333', color: '#fff' } });
      return;
    }
    onAddClickAction();
  };

  const handleDelete = (id: string) => {
    if (role !== 'admin') {
      toast.error('Access Denied. Admin only.', { style: { borderRadius: '10px', background: '#333', color: '#fff' } });
      return;
    }
    deleteTransaction(id);
    toast.success('Transaction deleted');
  };

  const handleEdit = () => {
    if (role !== 'admin') {
      toast.error('Access Denied. Admin only.', { style: { borderRadius: '10px', background: '#333', color: '#fff' } });
      return;
    }
    toast('Editing coming soon!', { icon: '🏗️' });
  };

  return (
    <div className={`surface-card shine-card rounded-md overflow-hidden transition-colors duration-200 ${!isCompact ? 'mt-8' : ''}`}>
      <div className="p-6 border-b border-white/8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{isCompact ? 'Recent Transactions' : 'All Transactions'}</h3>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/45 dark:text-white/35" size={18} />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/8 rounded-xl text-sm focus:ring-2 focus:ring-[#c8ff1d]/20 transition-all w-full md:w-64 text-black placeholder:text-black/50 dark:text-white dark:placeholder:text-white/35"
              />
            </div>

            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="px-4 py-2 bg-white/5 border border-white/8 rounded-xl text-sm focus:ring-2 focus:ring-[#c8ff1d]/20 transition-all cursor-pointer text-white"
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={exportToCSV}
              className="flex items-center px-4 py-2 bg-white/5 border border-white/8 text-white rounded-xl text-sm font-medium hover:bg-white/8 transition-colors shadow-sm"
              title="Export to CSV"
            >
              <Download size={18} className="sm:mr-2" />
              <span className="hidden sm:inline">Export</span>
            </motion.button>

            {role === 'admin' && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddClick}
                className="flex items-center px-4 py-2 bg-[#c8ff1d] text-black rounded-xl text-sm font-bold hover:bg-[#d6ff4b] transition-colors shadow-[0_12px_30px_rgba(200,255,29,0.18)] cursor-pointer"
              >
                <PlusCircle size={18} className="mr-2" />
                Add New
              </motion.button>
            )}
          </div>
        </div>
      </div>

      <div className={`overflow-x-auto ${isCompact ? 'max-h-[400px] overflow-y-auto' : ''}`}>
        <table className="w-full text-left relative">
          <thead className="dark-strip sticky top-0 z-10 bg-[#0e1611]">
            <tr className="dark-strip bg-[#121d16] text-white/60 text-xs font-semibold uppercase tracking-wider">
              <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors" onClick={() => toggleSort('date')}>
                <div className="flex items-center">
                  Date
                  <ArrowUpDown size={14} className="ml-1 opacity-50" />
                </div>
              </th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4 cursor-pointer hover:text-white transition-colors text-right" onClick={() => toggleSort('amount')}>
                <div className="flex items-center justify-end">
                  Amount
                  <ArrowUpDown size={14} className="ml-1 opacity-50" />
                </div>
              </th>
              {role === 'admin' && <th className="px-6 py-4 text-right">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8">
            <AnimatePresence mode="popLayout">
              {filteredTransactions.map((tx) => (
                <motion.tr
                  key={tx.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="group hover:bg-white/4 transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-white/65">
                    {format(new Date(tx.date), 'MMM dd, yyyy')}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-white/6 text-white/70 rounded-lg text-xs font-medium border border-white/8">
                      {tx.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-white font-medium">
                    {tx.description}
                  </td>
                  <td className={`px-6 py-4 text-sm font-bold text-right ${tx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                    {tx.type === 'income' ? '+' : '-'}₹{tx.amount.toLocaleString()}
                  </td>
                  {role === 'admin' && (
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-1 sm:space-x-2">
                        <button
                          onClick={handleEdit}
                          title="Edit"
                          className="p-2 rounded-lg transition-all text-white/45 hover:text-[#c8ff1d] hover:bg-white/5 cursor-pointer"
                        >
                                <Pencil size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(tx.id)}
                          title="Delete"
                          className="p-2 rounded-lg transition-all text-white/45 hover:text-[#ff7f7f] hover:bg-white/5 cursor-pointer"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  )}
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        {filteredTransactions.length === 0 && (
          <div className="p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-4 border border-white/8">
              <Filter className="text-white/45" size={32} />
            </div>
            <h4 className="text-white font-semibold mb-1">
              {transactions.length === 0 ? 'No transactions yet.' : 'No transactions found.'}
            </h4>
            <p className="text-white/50 text-sm">
              {transactions.length === 0 
                ? (role === 'viewer' ? 'Switch to Admin to add one.' : 'Start tracking by adding a new transaction.') 
                : 'Try adjusting your search or filters.'}
            </p>
          </div>
        )}
      </div>

      {isCompact && onViewAllAction && (
        <div className="p-4 border-t border-white/8 bg-white/3 flex justify-center gap-4">
          <button
            onClick={onViewAllAction}
            className="text-sm text-[#c8ff1d] font-medium hover:text-[#d6ff4b] px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            View All Transactions
          </button>
        </div>
      )}
    </div>
  );
};
