import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LiveDashboard from "./pages/LiveDashboard";
import Analytics from "./pages/Analytics";
import About from "./pages/About";

export default function App() {
  const [events, setEvents] = useState([]);
  const handleDetection = (detail) => {
    setEvents((prev) => [
      ...prev.slice(-49),
      { time: new Date().toLocaleTimeString(), detail },
    ]);
  };

  return (
    <Router>
      <div className="min-h-screen">
        <nav
          style={{
            background: "#fff",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            padding: 12,
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <Link
            to="/"
            style={{
              padding: 8,
              background: "#2563eb",
              color: "#fff",
              borderRadius: 8,
            }}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            style={{
              padding: 8,
              background: "#2563eb",
              color: "#fff",
              borderRadius: 8,
            }}
          >
            Live Dashboard
          </Link>
          <Link
            to="/analytics"
            style={{
              padding: 8,
              background: "#2563eb",
              color: "#fff",
              borderRadius: 8,
            }}
          >
            Analytics
          </Link>
          <Link
            to="/about"
            style={{
              padding: 8,
              background: "#2563eb",
              color: "#fff",
              borderRadius: 8,
            }}
          >
            About
          </Link>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={<LiveDashboard onDetection={handleDetection} />}
            />
            <Route path="/analytics" element={<Analytics events={events} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
