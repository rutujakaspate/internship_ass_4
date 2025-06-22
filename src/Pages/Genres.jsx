import React from "react";

const hindiSongs = [
  {
    id: 1,
    title: "Pal",
    artist: "Alka Yagnik, Arijit Singh",
    audio: "/pal.mp3",
  },
  {
    id: 2,
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Shreya Ghoshal",
    audio: "/agartum.mp3",
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
  {
    id: 6,
    title: "Kesariya",
    artist: "Arijit Singh",
    audio: "/kesariya.mp3",
  },
  {
    id: 7,
    title: "Raabta",
    artist: "Arijit Singh",
    audio: "/raabta.mp3",
  },
  {
    id: 8,
    title: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    audio: "/kalhonaaho.mp3",
  },
  {
    id: 9,
    title: "Channa Mereya",
    artist: "Arijit Singh",
    audio: "/channamereya.mp3",
  },
];

export default function Genres() {
  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        padding: "30px",
        color: "#fff",
      }}
    >
      {[0, 1, 2].map((row) => (
        <div
          key={row}
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {hindiSongs.slice(row * 3, row * 3 + 3).map((song) => (
            <div
              key={song.id}
              style={{
                backgroundColor: "#1e1e2f",
                borderRadius: "12px",
                padding: "20px",
                color: "#fff",
                width: "300px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "8px",
                }}
              >
                {song.title}
              </h2>
              <p style={{ fontSize: "14px", color: "#bbb" }}>{song.artist}</p>
              <audio controls style={{ width: "100%", marginTop: "12px" }}>
                <source src={song.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
