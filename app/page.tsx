'use client';

import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { FinanceProvider } from '../context/FinanceContext';
import { AddTransactionModal } from '../components/transactions/AddTransactionModal';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import MainContent from '../components/layout/MainContent';

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <FinanceProvider>
      <div className="relative min-h-screen overflow-hidden bg-[var(--app-bg)] text-[var(--app-text)] flex">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-30" />

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        {/* Main Content */}
        <main className="relative flex-1 lg:ml-64 p-4 md:p-8 lg:p-10 w-full overflow-x-hidden">
          <Header activeTab={activeTab} setIsMobileMenuOpen={setIsMobileMenuOpen} />

          <MainContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setIsModalOpen={setIsModalOpen}
          />

          <footer className="mt-12 text-center text-white/35 text-sm">
            &copy; 2026 FinDash Premium Dashboard. All rights reserved.
          </footer>
        </main>

        <AddTransactionModal isOpen={isModalOpen} onCloseAction={() => setIsModalOpen(false)} />
        <Toaster position="bottom-right" />
      </div>
    </FinanceProvider>
  );
}
