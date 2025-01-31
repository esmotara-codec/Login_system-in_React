import React from "react";
import { FaHome, FaChartBar, FaCog, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg min-h-screen px-6 py-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <NavLink icon={<FaHome />} label="Home" />
          <NavLink icon={<FaChartBar />} label="Analytics" />
          <NavLink icon={<FaUser />} label="Profile" />
          <NavLink icon={<FaCog />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome Back!</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
            Logout
          </button>
        </header>

        {/* Stats Section
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Total Sales" value="$12,500" />
          <StatCard title="New Users" value="1,230" />
          <StatCard title="Revenue" value="$8,750" />
        </section> */}

        {/* Recent Activity */}
        <section className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-700">
            <li>📌 New user <span className="font-bold">John Doe</span> signed up</li>
            <li>📌 Sale of <span className="font-bold">$500</span> was made</li>
            <li>📌 System update completed</li>
          </ul>
        </section>
      </main>
    </div>
  );
};



export default Dashboard;
