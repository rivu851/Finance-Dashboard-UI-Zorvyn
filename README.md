<p align="center">
  <table>
    <tr>
      <td><img src="./assets/Dashboard%201 .png" width="100%"/></td>
      <td><img src="./assets/Dashboard%202.png" width="100%"/></td>
    </tr>
  </table>
</p>
<br/>

# 💸 Finance Dashboard UI — Zorvyn Assignment

A modern, responsive **Finance Dashboard** built using **Next.js (App Router + TypeScript)** to help users track financial activity, analyze spending patterns, and manage transactions through an intuitive interface.

🔗 **Live Demo:** [https://finance-dashboard-ui-zorvyn-five.vercel.app/](https://finance-dashboard-ui-zorvyn-five.vercel.app/)
📦 **Repository:** [https://github.com/rivu851/Finance-Dashboard-UI-Zorvyn](https://github.com/rivu851/Finance-Dashboard-UI-Zorvyn)

---

## 🚀 Overview

This project was developed as part of a frontend evaluation assignment. The goal was to design a **clean, intuitive, and interactive financial dashboard** while maintaining a scalable and well-structured codebase.

The application simulates a real-world fintech dashboard with focus on:

* Clear and meaningful data visualization
* Smooth and intuitive user experience
* Scalable component architecture
* Maintainable and readable code

---

## 🧠 Architecture Approach

The project follows a **modular and type-safe architecture**, ensuring proper separation of concerns and scalability:

* **app/** → Routing & layout (Next.js App Router)
* **components/** → Organized UI components (charts, dashboard, layout, etc.)
* **context/** → Centralized global state management
* **hooks/** → Reusable business logic
* **data/** → Mock financial data
* **lib/** → Utility/helper functions
* **types/** → TypeScript interfaces and types

This structure makes the project easy to extend, debug, and scale.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Charts:** Recharts / Chart.js
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

* Detailed transaction listing
* Includes:

  * Date
  * Amount
  * Category
  * Type (Income/Expense)

**Features:**

* 🔍 Search
* 🎯 Filtering
* 🔃 Sorting

---

### 👤 Role-Based UI (Simulated)

* **Viewer** → Read-only access
* **Admin** → Can add/edit transactions
* Role switching via UI

---

### 📈 Insights

* Highest spending category
* Monthly comparison
* Key financial observations

---

### 🎨 UI/UX Highlights

* Clean and modern interface
* Fully responsive layout
* Consistent spacing and typography
* Focus on readability and usability

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

Open: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Assumptions

* Data is static/mock-based
* Role-based access is simulated on frontend only
* No backend or authentication is implemented

---

## 🔮 Future Improvements

* Backend/API integration
* Authentication & real RBAC
* Persistent storage (localStorage / database)
* Advanced filtering & analytics
* Improved dark mode
* Micro-interactions & animations
* Export functionality (CSV/JSON)

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
🔗 [https://github.com/rivu851](https://github.com/rivu851)

---

## ⭐ Final Note

This project highlights a strong understanding of **frontend architecture, UI/UX design, and scalable component development** using modern tools like Next.js and TypeScript. It focuses on delivering a clean, intuitive, and maintainable user experience a
