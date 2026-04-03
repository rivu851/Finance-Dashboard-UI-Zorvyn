import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SummaryCards } from '../dashboard/SummaryCards';
import { ChartsSection } from '../charts/ChartsSection';
import { TransactionList } from '../transactions/TransactionList';
import { InsightsSection } from '../dashboard/InsightsAndRole';
import { MonthlyComparison } from '../charts/MonthlyComparison';
import { IncomeSplineChart } from '../charts/IncomeSplineChart';
import AccountsView from '../views/AccountsView';
import SettingsView from '../views/SettingsView';

interface MainContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsModalOpen: (open: boolean) => void;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab, setActiveTab, setIsModalOpen }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-6 min-w-0">
            <SummaryCards
              onMonthlyComparisonClick={() => setActiveTab('Monthly Comparison')}
              onEditTransactionsClick={() => setActiveTab('Transactions')}
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-12 items-start min-w-0">
              <div className="md:col-span-2 xl:col-span-8 min-w-0">
                <ChartsSection />
              </div>
              <div className="md:col-span-2 xl:col-span-4 min-w-0">
                <InsightsSection />
              </div>
              <div className="md:col-span-2 xl:col-span-7 min-w-0">
                <TransactionList
                  isCompact={true}
                  onViewAllAction={() => setActiveTab('Transactions')}
                  onAddClickAction={() => setIsModalOpen(true)}
                />
              </div>
              <div className="md:col-span-2 xl:col-span-5 min-w-0">
                <IncomeSplineChart />
              </div>
            </div>
          </div>
        );
      case 'Transactions':
        return (
          <div className="surface-card shine-card rounded-[8px] p-2 md:p-4 transition-colors duration-200">
            <TransactionList onAddClickAction={() => setIsModalOpen(true)} />
          </div>
        );
      case 'Analytics':
        return (
          <div className="grid gap-6 xl:grid-cols-12">
            <div className="xl:col-span-8">
              <ChartsSection />
            </div>
            <div className="xl:col-span-4">
              <InsightsSection />
            </div>
            <div className="xl:col-span-12">
              <IncomeSplineChart />
            </div>
          </div>
        );
      case 'Monthly Comparison':
        return <MonthlyComparison />;
      case 'Accounts':
        return <AccountsView />;
      case 'Settings':
        return <SettingsView />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full min-w-0 space-y-8 pb-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-8 min-w-0"
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MainContent;