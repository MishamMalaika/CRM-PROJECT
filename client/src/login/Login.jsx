import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "misham@gmail.com" && password === "misham27") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userEmail", email);
      toast.success("Welcome Back!", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      navigate("/dashboard");
    } else {
      toast.error("Invalid Credentials!");
    }
  };

  return (
    <div style={styles.container}>
      {/* Abstract Background Shapes for Depth */}
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      <div style={styles.glassCard}>
        <div style={styles.logoContainer}>
          <div style={styles.logoIcon}>A</div>
          <h2 style={styles.title}>ADMIN PORTAL</h2>
          <p style={styles.subtitle}>Secure Access Required</p>
        </div>

        <form onSubmit={handleLogin}>
          <div style={styles.inputWrapper}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputWrapper}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              ...styles.button,
              transform: isHovered ? "translateY(-2px)" : "translateY(0)",
              boxShadow: isHovered
                ? "0 10px 20px rgba(79, 70, 229, 0.4)"
                : "0 4px 6px rgba(79, 70, 229, 0.2)",
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    backgroundImage:
      "radial-gradient(at 0% 0%, #e0e7ff 0, transparent 50%), radial-gradient(at 100% 0%, #f0fdf4 0, transparent 50%)",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Inter', sans-serif",
  },
  blob1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "#d1fae5",
    borderRadius: "50%",
    filter: "blur(80px)",
    top: "-100px",
    right: "-100px",
    zIndex: 0,
  },
  blob2: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#e0e7ff",
    borderRadius: "50%",
    filter: "blur(60px)",
    bottom: "-50px",
    left: "-50px",
    zIndex: 0,
  },
  glassCard: {
    width: "100%",
    maxWidth: "400px",
    padding: "40px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(12px)",
    borderRadius: "24px",
    border: "1px solid rgba(255, 255, 255, 0.4)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
    zIndex: 1,
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  logoIcon: {
    width: "50px",
    height: "50px",
    background: "#10b981",
    color: "white",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0 auto 15px",
  },
  title: {
    fontSize: "24px",
    color: "#111827",
    fontWeight: "800",
    margin: 0,
  },
  subtitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginTop: "5px",
  },
  inputWrapper: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    fontSize: "13px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "6px",
    marginLeft: "4px",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
    transition: "border 0.2s ease",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#10b981",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    marginTop: "10px",
  },
};

export default Login;
