import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // Using light pastel colors for the modules
  const modules = [
    {
      title: "Customers",
      desc: "Manage client relations",
      icon: "👥",
      color: "#60a5fa",
      route: "/",
    }, // Light Blue
    {
      title: "Reports",
      desc: "Financial analytics",
      icon: "📊",
      color: "#34d399",
      route: "/reports",
    }, // Mint Green
    {
      title: "Settings",
      desc: "System configuration",
      icon: "⚙️",
      color: "#fcd34d",
      route: "/settings",
    }, // Light Yellow
    {
      title: "Staff",
      desc: "User permissions",
      icon: "🔐",
      color: "#a5b4fc",
      route: "/users",
    }, // Periwinkle
    {
      title: "Alerts",
      desc: "System status",
      icon: "🔔",
      color: "#f87171",
      route: "/alerts",
    }, // Light Red
    {
      title: "Growth",
      desc: "Performance tracking",
      icon: "📈",
      color: "#5eead4",
      route: "/analytics",
    }, // Cyan
  ];

  const sidebarItemStyle = (isActive) => ({
    padding: "12px 20px",
    borderRadius: "8px",
    marginBottom: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s",
    // Use very light gray background for active state
    backgroundColor: isActive ? "#eff6ff" : "transparent",
    color: isActive ? "#1e40af" : "#6b7280",
  });

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#f9fafb",
        color: "#1e293b",
      }}
    >
      {/* Sleek Sidebar */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#fff",
          borderRight: "1px solid #e2e8f0",
          padding: "24px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "800",
            color: "#0f172a",
            marginBottom: "40px",
            letterSpacing: "-0.5px",
          }}
        >
          CRM<span style={{ color: "#3b82f6" }}>CORE</span>
        </div>
        <nav>
          {modules.map((m, i) => (
            <div
              key={i}
              style={sidebarItemStyle(m.title === "Customers")}
              onClick={() => navigate(m.route)}
            >
              <span style={{ marginRight: "12px" }}>{m.icon}</span> {m.title}
            </div>
          ))}
          <div
            onClick={handleLogout}
            style={{
              ...sidebarItemStyle(false),
              color: "#ef4444",
              marginTop: "auto",
            }}
          >
            🚪 Logout
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "48px", overflowY: "auto" }}>
        <header
          style={{
            marginBottom: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{ fontSize: "28px", fontWeight: "700", color: "#0f172a" }}
            >
              Overview
            </h1>
            <p style={{ color: "#64748b", marginTop: "4px" }}>
              Friday, Jan 2, 2026
            </p>
          </div>
          {/* Use a soft primary button color */}
          <button
            style={{
              backgroundColor: "#60a5fa",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(59, 130, 246, 0.2)",
            }}
          >
            + New Action
          </button>
        </header>

        {/* Realistic Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {modules.map((mod, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(mod.route)}
              style={{
                backgroundColor: "#fff",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                // Softer, more modern shadow on hover
                boxShadow:
                  hoveredIndex === index
                    ? "0 15px 30px rgba(0,0,0,0.08)"
                    : "0 1px 3px rgba(0,0,0,0.05)",
                transform: hoveredIndex === index ? "translateY(-4px)" : "none",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  backgroundColor: `${mod.color}15`,
                  color: mod.color,
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                {mod.icon}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "8px",
                }}
              >
                {mod.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
