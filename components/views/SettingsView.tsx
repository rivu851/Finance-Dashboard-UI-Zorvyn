import React from 'react';
import { Settings } from 'lucide-react';

const SettingsView: React.FC = () => (
  <div className="surface-card shine-card p-8 rounded-[28px] text-center">
    <div className="inline-flex items-center justify-center mb-4 w-14 h-14 rounded-full bg-white/5 border border-white/10">
      <Settings size={28} className="text-[#c8ff1d]" strokeWidth={2.2} />
    </div>
    <h2 className="text-2xl font-bold text-white mb-2">Platform Settings</h2>
    <p className="text-white/55">Configure your dashboard preferences and account settings.</p>
  </div>
);

export default SettingsView;