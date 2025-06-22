import React from "react";

const hindiSongs = [
  {
    id: 1,
    title: "Pal",
    artist: "Alka Yagnik, Arijit Singh",
    audio: "/agartum.mp3",
  },
  {
    id: 2,
    title: "Agar Tum sath ho",
    artist: "Arijit Singh, Shreya Ghoshal",
    audio: "/pal.mp3",
  },
  {
    id: 3,
    title: "Teri Meri",
    artist: "Rahat Fateh Ali Khan, Shreya Ghoshal",
    audio: "/terimeri.mp3",
  },
  {
    id: 4,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    audio: "/tumhiho.mp3",
  },
  {
    id: 5,
    title: "Zara Sa",
    artist: "KK",
    audio: "/zarasa.mp3",
  },
];

export default function Playlists() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "30px",
        padding: "30px",
        flexWrap: "wrap",
        backgroundColor: "#121212",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          color: "#000",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 style={{ marginBottom: "16px", fontWeight: "bold", fontSize: "24px" }}>
          🎶 Top Hindi Songs
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {hindiSongs.map((song) => (
            <li key={song.id} style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>{song.title}</div>
              <div style={{ fontSize: "14px", color: "#555" }}>{song.artist}</div>
              <audio controls style={{ width: "100%", marginTop: "8px" }}>
                <source src={song.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
