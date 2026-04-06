// import { useState } from "react";
// import Dashboard from "./Dashboard";

// function App() {
//   const [role, setRole] = useState("viewer");

//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* Header */}
//       <div className="bg-white shadow p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">Finance Dashboard</h1>

//         {/* Role Switch */}
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="viewer">Viewer</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>

//       {/* Dashboard */}
//       <Dashboard role={role} />
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";
// import Dashboard from "./Dashboard";

// function App() {
//   const [role, setRole] = useState("viewer");

//   return (
//     <div className="min-h-screen bg-gray-100">
      
//       {/* Header */}
//       <div className="bg-white shadow p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">Finance Dashboard</h1>

//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="viewer">Viewer</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>

//       <Dashboard role={role} />
//     </div>
//   );
// }

// export default App;


// function App() {
//   const [role, setRole] = useState("admin");

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
      
//       {/* Container */}
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-800">
//             Finance Dashboard
//           </h1>

//           <select
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             className="border px-3 py-2 rounded-lg shadow-sm"
//           >
//             <option value="viewer">Viewer</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//         <Dashboard role={role} />
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Dashboard from "./Dashboard";
// import "./index.css";

// function App() {
//   const [role, setRole] = useState("viewer"); // simulate role: 'viewer' or 'admin'

//   return (
//     <div className="app">
//       <header className="header">
//         <h1>Finance Dashboard</h1>
//         <div>
//           Role: 
//           <select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="viewer">Viewer</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>
//       </header>
//       <Dashboard role={role} />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import "./index.css";

function App() {
  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="app">
      <header className="header">
        <h1>📊 Finance Dashboard</h1>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <span>Role:</span>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>

          <label style={{ marginLeft: "10px" }}>
            Dark Mode:
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={{ marginLeft: "5px" }}
            />
          </label>
        </div>
      </header>
      <Dashboard role={role} />
    </div>
  );
}

export default App;