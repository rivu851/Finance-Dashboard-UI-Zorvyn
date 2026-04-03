# 💸 Finance Dashboard UI — Zorvyn Assignment

A modern, responsive **Finance Dashboard** built using **Next.js (App Router + TypeScript)** to help users track financial activity, explore transactions, and gain insights into spending patterns.

🔗 **Live Demo:** https://finance-dashboard-ui-zorvyn-five.vercel.app/
📦 **Repository:** https://github.com/rivu851/Finance-Dashboard-UI-Zorvyn

---

## 🚀 Overview

This project was developed as part of a frontend evaluation assignment. It focuses on building a clean, intuitive, and interactive dashboard interface using modern frontend practices.

The application simulates a real-world fintech dashboard with structured components, reusable logic, and dynamic UI behavior.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS (if you're using it — adjust if needed)
* **Charts:** Recharts / Chart.js (update accordingly)
* **State Management:** React Hooks + Context API
* **Deployment:** Vercel

---

## 📂 Project Structure

```bash
finance-dashboard-zorvyn/
│
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout (Next.js App Router)
│   ├── page.tsx             # Main dashboard entry point
│
│   ├── components/
│   │   ├── charts/          # Data visualization components
│   │   │   ├── ChartSection.tsx
│   │   │   ├── IncomeSpineChart.tsx
│   │   │   └── MonthlyComparison.tsx
│   │   │
│   │   ├── dashboard/       # Dashboard-specific UI
│   │   │   ├── SummaryCards.tsx
│   │   │   └── InsightsAndRole.tsx
│   │   │
│   │   ├── layout/          # Layout components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── MainContent.tsx
│   │   │
│   │   ├── transactions/    # Transaction-related components
│   │   │   ├── TransactionList.tsx
│   │   │   └── AddTransactionModal.tsx
│   │   │
│   │   ├── providers/       # Theme / app providers
│   │   │   └── ThemeProvider.tsx
│   │   │
│   │   └── ui/              # Reusable UI components
│   │       ├── AnimatedNumber.tsx
│   │       ├── ProfessionalIcons.tsx
│   │       └── ThemeToggle.tsx
│   │
│   ├── views/               # Page-level compositions
│   ├── context/             # Global state (FinanceProvider)
│   ├── data/                # Mock financial data
│
├── hooks/                   # Custom hooks
├── lib/                     # Utility functions
├── types/                   # TypeScript types
│
├── .eslintrc.json
├── .env.example
└── README.md
```

---

## ✨ Features

### 📊 Dashboard Overview

* Summary cards:

  * Total Balance
  * Income
  * Expenses
* Time-based financial trends
* Category-wise spending breakdown

---

### 💳 Transactions

* Detailed transaction list
* Includes:

  * Date
  * Amount
  * Category
  * Type (Income/Expense)
* Features:

  * 🔍 Search
  * 🎯 Filtering
  * 🔃 Sorting

---

### 👤 Role-Based UI (Simulated)

* **Viewer** → Read-only access
* **Admin** → Can add/edit transactions
* Role switching via UI toggle

---

### 📈 Insights

* Highest spending category
* Monthly comparison
* Basic financial observations

---

### 🎨 UI/UX

* Clean and modern design
* Responsive across devices
* Reusable component structure

---

## 🧠 Architecture & Design Decisions

* Used **Next.js App Router** for scalable routing and layout management
* Organized components by responsibility:

  * Charts → visualization
  * Layout → structure
  * UI → reusable elements
* Implemented **Context API** for global state handling
* Separated mock data and logic for maintainability
* Focused on frontend-only implementation (no backend dependency)

---

## ⚙️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/rivu851/Finance-Dashboard-UI-Zorvyn.git

# Navigate into project
cd Finance-Dashboard-UI-Zorvyn

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🧪 Assumptions

* Data is static/mock-based
* Role-based access is simulated (frontend only)
* No backend or authentication implemented

---

## 🔮 Future Improvements

* Backend integration (API + DB)
* Authentication & real RBAC
* Persistent storage (localStorage / API)
* Advanced filtering & grouping
* Dark mode enhancements
* Animations & micro-interactions
* Data export (CSV/JSON)

---

## 🏆 Evaluation Criteria Coverage

✔ Dashboard Overview
✔ Transactions Section
✔ Role-Based UI
✔ Insights Section
✔ State Management
✔ Responsive Design
✔ Clean Code Structure

---

## 👨‍💻 Author

**Rivu Chattopadhyay**
📧 [rivu851@gmail.com](mailto:rivu851@gmail.com)
🔗 https://github.com/rivu851

---

## ⭐ Final Note

This project demonstrates a structured approach to building scalable frontend applications using Next.js, focusing on clean UI, modular architecture, and user-centric design.

---
