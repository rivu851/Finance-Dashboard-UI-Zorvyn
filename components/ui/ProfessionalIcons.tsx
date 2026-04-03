import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// Dashboard/Overview Icon
export const DashboardIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
    <rect x="5" y="5" width="4" height="4" rx="0.5" fill="#4CAF50" />
    <rect x="10" y="5" width="4" height="4" rx="0.5" fill="#4CAF50" />
    <rect x="5" y="10" width="4" height="4" rx="0.5" fill="#66BB6A" />
    <rect x="10" y="10" width="4" height="4" rx="0.5" fill="#66BB6A" />
    <rect x="15" y="5" width="4" height="4" rx="0.5" fill="#81C784" />
    <rect x="15" y="10" width="4" height="4" rx="0.5" fill="#81C784" />
    <rect x="5" y="15" width="9" height="4" rx="0.5" fill="#A5D6A7" />
    <rect x="15" y="15" width="4" height="4" rx="0.5" fill="#C8E6C9" />
  </svg>
);

// Transactions/CreditCard Icon
export const TransactionIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFF3E0" stroke="#FF9800" strokeWidth="1" />
    <rect x="4" y="6" width="16" height="12" rx="1" fill="none" stroke="#FF9800" strokeWidth="1.5" />
    <rect x="4" y="10" width="16" height="2" fill="#FF9800" fillOpacity="0.2" />
    <rect x="15" y="14" width="4" height="2" rx="0.5" fill="#FFB74D" />
  </svg>
);

// Analytics/PieChart Icon
export const AnalyticsIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#E3F2FD" stroke="#2196F3" strokeWidth="1" />
    <path d="M12 4 A8 8 0 0 1 16.47 5.53 L12 12 Z" fill="#42A5F5" />
    <path d="M16.47 5.53 A8 8 0 0 1 19.17 14.27 L12 12 Z" fill="#2196F3" />
    <path d="M19.17 14.27 A8 8 0 0 1 12 20 L12 12 Z" fill="#1E88E5" />
    <path d="M12 20 A8 8 0 0 1 4 12 L12 12 Z" fill="#1565C0" />
  </svg>
);

// Monthly Comparison/BarChart Icon
export const ComparisonIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="1" />
    <rect x="5" y="13" width="2.5" height="5" rx="0.5" fill="#BA68C8" />
    <rect x="9" y="8" width="2.5" height="10" rx="0.5" fill="#AB47BC" />
    <rect x="13" y="11" width="2.5" height="7" rx="0.5" fill="#9C27B0" />
    <rect x="17" y="6" width="2.5" height="12" rx="0.5" fill="#7B1FA2" />
  </svg>
);

// Accounts/Users Icon
export const AccountsIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FCE4EC" stroke="#E91E63" strokeWidth="1" />
    <circle cx="8" cy="8" r="2" fill="#E91E63" />
    <path d="M4 15 Q4 13 8 13 Q12 13 12 15" fill="#F48FB1" />
    <circle cx="16" cy="8.5" r="1.5" fill="#E91E63" />
    <path d="M13 14.5 Q13 13.2 16 13.2 Q19 13.2 19 14.5" fill="#F48FB1" />
  </svg>
);

// Settings Icon
export const SettingsIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#F1F8E9" stroke="#7CB342" strokeWidth="1" />
    <circle cx="12" cy="12" r="2.5" fill="#7CB342" />
    <path d="M12 5 L13 7 Q14 7 14.5 7.5 L16.5 6.5" stroke="#7CB342" strokeWidth="1.2" fill="none" />
    <path d="M19 12 L17 11 Q17 10 17.5 9.5 L18.5 7.5" stroke="#9CCC65" strokeWidth="1.2" fill="none" />
    <path d="M12 19 L11 17 Q10 17 9.5 16.5 L7.5 17.5" stroke="#7CB342" strokeWidth="1.2" fill="none" />
    <path d="M5 12 L7 13 Q7 14 6.5 14.5 L5.5 16.5" stroke="#9CCC65" strokeWidth="1.2" fill="none" />
  </svg>
);

// Support/Help Icon
export const SupportIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFEBEE" stroke="#F44336" strokeWidth="1" />
    <circle cx="12" cy="8.5" r="1.2" fill="#F44336" />
    <path d="M11 11 L11 15 L13 15" stroke="#EF5350" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

// Wallet Icon (Total Balance)
export const WalletIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFFDE7" stroke="#FBC02D" strokeWidth="1" />
    <rect x="4" y="7" width="16" height="10" rx="1" fill="none" stroke="#FBC02D" strokeWidth="1.5" />
    <rect x="4" y="7" width="10" height="5" fill="#FDD835" />
    <circle cx="16" cy="14" r="1.5" fill="#FBC02D" />
  </svg>
);

// Income Icon (TrendingUp)
export const IncomeIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
    <polyline points="6 16 10 12 14 14 18 8" stroke="#66BB6A" strokeWidth="2" fill="none" strokeLinecap="round" />
    <polyline points="16 8 18 8 18 10" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

// Expense Icon (TrendingDown)
export const ExpenseIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFE0B2" stroke="#FF9800" strokeWidth="1" />
    <polyline points="6 8 10 12 14 10 18 16" stroke="#FFB74D" strokeWidth="2" fill="none" strokeLinecap="round" />
    <polyline points="16 16 18 16 18 14" stroke="#FF9800" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

// Spending Category Icon (PieChart variation)
export const CategoryIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#F0F4C3" stroke="#C0CA33" strokeWidth="1" />
    <path d="M12 4 A8 8 0 0 1 16.47 5.53 L12 12 Z" fill="#CDDC39" />
    <path d="M16.47 5.53 A8 8 0 0 1 19.17 14.27 L12 12 Z" fill="#AFB42B" />
    <path d="M19.17 14.27 A8 8 0 0 1 12 20 L12 12 Z" fill="#827717" />
    <path d="M12 20 A8 8 0 0 1 4 12 L12 12 Z" fill="#C0CA33" />
  </svg>
);

// Comparison/Surplus Icon (BarChart variation)
export const ComparisonResultIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#E0F2F1" stroke="#009688" strokeWidth="1" />
    <rect x="5" y="10" width="3" height="8" rx="0.5" fill="#4DB6AC" />
    <rect x="9" y="6" width="3" height="12" rx="0.5" fill="#26A69A" />
    <rect x="13" y="8" width="3" height="10" rx="0.5" fill="#009688" />
    <path d="M16 9 L19 6" stroke="#00796B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

// Warning/Alert Icon
export const WarningIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFE082" stroke="#FFA726" strokeWidth="1" />
    <path d="M12 6 L18 16 L6 16 Z" fill="#FFA726" />
    <circle cx="12" cy="12" r="0.8" fill="white" />
  </svg>
);

// Eye Icon (Viewer)
export const ViewerIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#E1F5FE" stroke="#03A9F4" strokeWidth="1" />
    <ellipse cx="12" cy="12" rx="5" ry="3.5" fill="none" stroke="#03A9F4" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="1.5" fill="#0288D1" />
  </svg>
);

// Shield Icon (Admin)
export const AdminIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#F3E5F5" stroke="#7E57C2" strokeWidth="1" />
    <path d="M12 4 L7 7 L7 12 Q7 17 12 19 Q17 17 17 12 L17 7 Z" fill="#CE93D8" stroke="#7E57C2" strokeWidth="1.2" />
    <path d="M10 12 L11.5 13.5 L14 10.5" stroke="#5E35B1" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Edit Icon
export const EditTransactionIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FCEAA3" stroke="#FBC02D" strokeWidth="1" />
    <path d="M4 16.5 L16.5 4 L19 6.5 L6.5 19 L4 19.5 Z" fill="none" stroke="#FBC02D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// View Monthly Icon
export const ViewMonthlyIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#E8F5E9" stroke="#4CAF50" strokeWidth="1" />
    <polyline points="5 15 10 10 14 13 19 7" stroke="#66BB6A" strokeWidth="2" fill="none" strokeLinecap="round" />
    <polyline points="17 7 19 7 19 9" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

// Sun Icon (Light theme)
export const SunIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFECB3" stroke="#FBC02D" strokeWidth="1" />
    <circle cx="12" cy="12" r="4" fill="#FBC02D" />
    <line x1="12" y1="1" x2="12" y2="3" stroke="#FBC02D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="21" x2="12" y2="23" stroke="#FBC02D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="3" y1="12" x2="1" y2="12" stroke="#FBC02D" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="23" y1="12" x2="21" y2="12" stroke="#FBC02D" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Moon Icon (Dark theme)
export const MoonIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#E1BEE7" stroke="#7E57C2" strokeWidth="1" />
    <path d="M9 3 A9 9 0 1 0 15 20 A9 9 0 0 1 9 3" fill="#7E57C2" />
  </svg>
);

// Bell Icon (Notification)
export const BellIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFCCBC" stroke="#FF7043" strokeWidth="1" />
    <path d="M7 9 Q7 5 12 5 Q17 5 17 9 L17 13 Q17 15 14 16 L10 16 Q7 15 7 13 Z" fill="none" stroke="#FF7043" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="10" y1="16" x2="14" y2="16" stroke="#FF7043" strokeWidth="1" />
    <circle cx="12" cy="18" r="1" fill="#FF7043" />
  </svg>
);

// Delete Icon
export const DeleteIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#FFCDD2" stroke="#F44336" strokeWidth="1" />
    <path d="M6 8 L6 16 Q6 17 7 17 L17 17 Q18 17 18 16 L18 8 Z" fill="none" stroke="#F44336" strokeWidth="1.2" />
    <line x1="6" y1="8" x2="18" y2="8" stroke="#F44336" strokeWidth="1" />
    <line x1="10" y1="8" x2="10" y2="16" stroke="#F44336" strokeWidth="0.8" />
    <line x1="14" y1="8" x2="14" y2="16" stroke="#F44336" strokeWidth="0.8" />
  </svg>
);

// Plus Icon
export const PlusIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="11" fill="#C8E6C9" stroke="#4CAF50" strokeWidth="1" />
    <line x1="12" y1="8" x2="12" y2="16" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="8" y1="12" x2="16" y2="12" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
