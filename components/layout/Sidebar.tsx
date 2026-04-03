import React from 'react';
import { X, LayoutDashboard, CreditCard, PieChart, BarChart3, Users, Settings, LifeBuoy, CircleDollarSign } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Overview' },
    { icon: CreditCard, label: 'Transactions' },
    { icon: PieChart, label: 'Analytics' },
    { icon: BarChart3, label: 'Monthly Comparison' },
    { icon: Users, label: 'Accounts' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className={`fixed top-0 left-0 h-full w-64 z-50 flex flex-col p-6 transition-transform duration-300 ease-in-out border-r border-black/10 bg-[#d5ff39] text-black shadow-[18px_0_60px_rgba(0,0,0,0.24)] ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
      <div className="absolute inset-0 opacity-35 grid-fade" />
      <div className="relative flex items-center justify-between mb-10 px-2">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center rounded-full p-1.5 bg-black/10">
            <CircleDollarSign size={24} strokeWidth={2.4} className="text-black" />
          </div>
          <span className="text-xl font-bold text-black tracking-tight">Finance</span>
        </div>
        <button
          className="lg:hidden p-2 text-black/70 hover:text-black"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      <nav className="relative flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveTab(item.label);
              setIsMobileMenuOpen(false);
            }}
            className={`w-full flex items-center px-4 py-3 gap-3 text-sm font-semibold text-left transition-all duration-200 border ${activeTab === item.label
                ? 'bg-black text-[#d5ff39] border-black/30 shadow-[0_16px_40px_rgba(0,0,0,0.18)]'
                : 'text-black border-black hover:bg-white/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
              }`}
          >
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${activeTab === item.label ? 'bg-[#d5ff39]/20' : 'bg-black/10'}`}>
              <item.icon size={17} strokeWidth={2.4} />
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="relative mt-auto pt-6 border-t border-black/10">
        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-semibold text-black/70 hover:bg-white/20 hover:text-black transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/10">
            <LifeBuoy size={17} strokeWidth={2.4} />
          </span>
          <span>Support</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;