// import { useState } from "react";
// import SummaryCards from "./components/SummaryCards";
// import TransactionList from "./components/TransactionList";
// import AddTransaction from "./components/AddTransaction";
// import Insights from "./components/Insights";

// const initialData = [
//   { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
//   { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
//   { id: 3, date: "2026-04-03", amount: 1000, category: "Shopping", type: "expense" },
// ];

// function Dashboard({ role }) {
//   const [transactions, setTransactions] = useState(() => {
//     const data = localStorage.getItem("transactions");
//     return data ? JSON.parse(data) : initialData;
//   });

//   const saveData = (data) => {
//     setTransactions(data);
//     localStorage.setItem("transactions", JSON.stringify(data));
//   };

//   return (
//     <div className="p-6 space-y-6">

//       <SummaryCards transactions={transactions} />

//       {role === "admin" && (
//         <AddTransaction onAdd={saveData} transactions={transactions} />
//       )}

//       <TransactionList transactions={transactions} />

//       <Insights transactions={transactions} />

//     </div>
//   );
// }

// export default Dashboard;


// import { useState, useEffect } from "react";
// import SummaryCards from "./components/SummaryCards";
// import TransactionList from "./components/TransactionList";
// import AddTransaction from "./components/AddTransaction";
// import Insights from "./components/Insights";

// function Dashboard({ role }) {
//   const [transactions, setTransactions] = useState([]);

//   // Load from localStorage
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("transactions"));
//     if (data) setTransactions(data);
//   }, []);

//   // Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("transactions", JSON.stringify(transactions));
//   }, [transactions]);

//   const addTransaction = (tx) => {
//     setTransactions([...transactions, { ...tx, id: Date.now() }]);
//   };

//   const deleteTransaction = (id) => {
//     setTransactions(transactions.filter((t) => t.id !== id));
//   };

//   return (
//     <div className="space-y-6">
//       <SummaryCards transactions={transactions} />
//       <Insights transactions={transactions} />

//       {role === "admin" && (
//         <AddTransaction addTransaction={addTransaction} />
//       )}

//       <TransactionList
//         transactions={transactions}
//         role={role}
//         deleteTransaction={deleteTransaction}
//       />

//       <div className="grid lg:grid-cols-3 gap-6">

//   {/* Left Side */}
//   <div className="lg:col-span-2 space-y-6">
//     <SummaryCards transactions={transactions} />
//     <TransactionList
//       transactions={transactions}
//       role={role}
//       deleteTransaction={deleteTransaction}
//     />
//   </div>

//   {/* Right Side */}
//   <div className="space-y-6">
//     <Insights transactions={transactions} />

//     {role === "admin" && (
//       <AddTransaction addTransaction={addTransaction} />
//     )}
//   </div>

// </div>

//     </div>
//   );
// }

// export default Dashboard;

// import React, { useState } from "react";
// import SummaryCards from "./components/SummaryCards";
// import TransactionList from "./components/TransactionList";
// import AddTransaction from "./components/AddTransaction";
// import Insights from "./components/Insights";
// import { transactionsData } from "./data/transactions";

// import Charts from "./components/Charts";


// function Dashboard({ role }) {
//   const [transactions, setTransactions] = useState(transactionsData);

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, { id: transactions.length + 1, ...transaction }]);
//   };

//   return (
//     <div className="dashboard">
//       <SummaryCards transactions={transactions} />
//       {role === "admin" && <AddTransaction addTransaction={addTransaction} />}
//       <TransactionList transactions={transactions} />
//       <Insights transactions={transactions} />
//       <SummaryCards transactions={transactions} />

// {/* Add this line to show charts */}
// <Charts transactions={transactions} />
//     </div>
//   );
// }



// export default Dashboard;


import React, { useState } from "react";
import SummaryCards from "./components/SummaryCards";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import Insights from "./components/Insights";
import Charts from "./components/Charts"; // ✅ IMPORTANT
import { transactionsData } from "./data/transactions";

function Dashboard({ role }) {
  const [transactions, setTransactions] = useState(transactionsData);

  // Add new transaction (Admin only)
  const addTransaction = (transaction) => {
    setTransactions([
      ...transactions,
      { id: transactions.length + 1, ...transaction }
    ]);
  };

  return (
    <div className="dashboard">
      
      {/* ✅ Summary Section */}
      <SummaryCards transactions={transactions} />

      {/* ✅ Charts Section (THIS FIXES YOUR ISSUE) */}
      <Charts transactions={transactions} />

      {/* ✅ Admin Feature */}
      {role === "admin" && (
        <AddTransaction addTransaction={addTransaction} />
      )}

      {/* ✅ Transactions Table */}
      <TransactionList transactions={transactions} />

      {/* ✅ Insights */}
      <Insights transactions={transactions} />

    </div>
  );
}

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import SummaryCards from "./components/SummaryCards";
// import TransactionList from "./components/TransactionList";
// import AddTransaction from "./components/AddTransaction";
// import Insights from "./components/Insights";
// import Charts from "./components/Charts";
// import { transactionsData } from "./data/transactions";


// function Dashboard({ role }) {
  
//   // ✅ Load from localStorage
//   const [transactions, setTransactions] = useState(() => {
//     const saved = localStorage.getItem("transactions");
//     return saved ? JSON.parse(saved) : transactionsData;
//   });

//   // ✅ Save to localStorage
//   useEffect(() => {
//     localStorage.setItem("transactions", JSON.stringify(transactions));
//   }, [transactions]);

//   const addTransaction = (transaction) => {
//     setTransactions([
//       ...transactions,
//       { id: transactions.length + 1, ...transaction }
//     ]);

    
//   };

//   return (
//     <div className="dashboard">
//       <SummaryCards transactions={transactions} />
//       <Charts transactions={transactions} />
//       {role === "admin" && <AddTransaction addTransaction={addTransaction} />}
//       <TransactionList transactions={transactions} />
//       <Insights transactions={transactions} />
//     </div>
//   );
// }

// export default Dashboard;