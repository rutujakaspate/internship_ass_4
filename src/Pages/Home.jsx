import React from "react";
import { FaSpotify } from "react-icons/fa";
import ListenerTrend from "../components/ListenerTrend";

const stats = [
  { id: 1, title: "Total Listeners", value: 1200, bgColor: "#4f46e5" },
  { id: 2, title: "Total Playlists", value: 305, bgColor: "#059669" },
  { id: 3, title: "Streams Revenue", value: "$12,450", bgColor: "#d97706" },
  { id: 4, title: "User Feedbacks", value: 85, bgColor: "#db2777" },
];

const Home = () => {
  return (
    <div
      style={{
        padding: 24,
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#111827",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
        <FaSpotify size={32} color="#1DB954" />
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#fff" }}>Spotify</h1>
      </div>
      <p style={{ fontSize: "1.1rem", marginBottom: 24, color: "#9ca3af" }}>
        Welcome to your Spotify clone admin panel. Here's a quick music overview:
      </p>

      {/* KPI Cards */}
      <div
        style={{
          display: "flex",
          gap: 24,
          flexWrap: "nowrap",
          overflowX: "auto",
          marginBottom: 32,
        }}
      >
        {stats.map(({ id, title, value, bgColor }) => (
          <div
            key={id}
            style={{
              flex: "1",
              backgroundColor: bgColor,
              color: "#fff",
              borderRadius: 12,
              padding: 20,
              minWidth: 220,
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{title}</h3>
            <p style={{ fontSize: "2rem", fontWeight: "bold", marginTop: 8 }}>{value}</p>
          </div>
        ))}
      </div>

      {/* ✅ REPLACE old placeholder with actual component */}
      <ListenerTrend />
    </div>
  );
};

export default Home;
