<p align="center">
  <img src="./assets/Dashboard%201.png" width="48%" />
  <img src="./assets/Dashboard%202.png" width="48%" />
</p>

<br/>

# 💸 Finance Dashboard UI — Zorvyn Assignment

A modern, responsive **Finance Dashboard** built using **Next.js (App Router + TypeScript)** to help users track financial activity, analyze spending patterns, and manage transactions through an intuitive interface.

🔗 **Live Demo:** https://finance-dashboard-ui-zorvyn-five.vercel.app/
📦 **Repository:** https://github.com/rivu851/Finance-Dashboard-UI-Zorvyn

---

## 🚀 Overview

This project was developed as part of a frontend evaluation assignment. The goal was to design a **clean, intuitive, and interactive financial dashboard** while maintaining a scalable and well-structured codebase.

The application simulates a real-world fintech dashboard, focusing on:

* Clear data visualization
* Component-based architecture
* Role-based UI behavior
* Maintainable frontend structure

---

## 🧠 Architecture Approach

The project follows a **modular and type-based architecture**, ensuring separation of concerns:

* **`app/`** → Routing & layout (Next.js App Router)
* **`components/`** → UI grouped by type (charts, layout, dashboard, etc.)
* **`context/`** → Global state management
* **`hooks/`** → Reusable logic
* **`data/`** → Mock data
* **`lib/`** → Utility functions
* **`types/`** → TypeScript definitions

This structure ensures clarity, scalability, and ease of maintenance.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS *(update if different)*
* **Charts:** Recharts / Chart.js *(update accordingly)*
* **State Management:** React Context API + Hooks
* **Deployment:** Vercel

---

## 📂 Project Structure

```bash
finance-dashboard-zorvyn/
│
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main entry (Dashboard)
│
├── components/
│   ├── charts/              # Data visualization
│   │   ├── ChartSection.tsx
│   │   ├── IncomeSplineChart.tsx
│   │   └── MonthlyComparison.tsx
│   │
│   ├── dashboard/           # Dashboard-specific UI
│   │   ├── SummaryCards.tsx
│   │   └── InsightsAndRole.tsx
│   │
│   ├── layout/              # Layout components
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   └── MainContent.tsx
│   │
│   ├── transactions/        # Transaction UI
│   │   ├── TransactionList.tsx
│   │   └── AddTransactionModal.tsx
│   │
│   ├── providers/           # App providers
│   │   └── ThemeProvider.tsx
│   │
│   └── ui/                  # Reusable UI components
│       ├── AnimatedNumber.tsx
│       ├── ProfessionalIcons.tsx
│       └── ThemeToggle.tsx
│
├── context/
│   └── FinanceContext.tsx   # Global state
│
├── hooks/                   # Custom hooks
├── data/                    # Mock financial data
├── lib/                     # Utility functions
├── types/                   # TypeScript types
│
├── .env.example
├── .eslintrc.json
└── README.md
