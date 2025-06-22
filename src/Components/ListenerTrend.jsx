import React, { useState, useRef } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";

const songs = [
  {
    id: 1,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    audio: "/tumhiho.mp3",
    cover: "/covers/tumhiho.jpg",
  },
  {
    id: 2,
    title: "Zara sa",
    artist: "Shreaya Goshal",
    audio: "/zarasa.mp3",
    cover: "/covers/sample1.jpg",
  },
  {
    id: 3,
    title: "terimeri",
    artist: "KK",
    audio: "/terimeri.mp3",
    cover: "/covers/sample2.jpg",
  },
  {
    id: 4,
    title: "pal",
    artist: "Arijit singh",
    audio: "/pal.mp3",
    cover: "/covers/sample3.jpg",
  },
  {
    id: 5,
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh",
    audio: "/agartum.mp3",
    cover: "/covers/agartum.jpg",
  },
];

const ListenerTrend = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = (song) => {
    if (currentSong?.id === song.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }, 100);
    }
  };

  return (
    <div className="bg-[#1e293b] p-6 rounded-xl mt-6 shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4">🎧 Listener Song Trend</h2>

      <table className="w-full table-auto border-collapse text-left">
        <thead>
          <tr className="bg-[#334155] text-white">
            <th className="p-3">ID</th>
            <th className="p-3">Cover</th>
            <th className="p-3">Song Title</th>
            <th className="p-3">Artist</th>
            <th className="p-3 text-center">Play</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id} className="hover:bg-[#475569] transition">
              <td className="p-3">{song.id}</td>
              <td className="p-3">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="p-3 font-semibold">{song.title}</td>
              <td className="p-3">{song.artist}</td>
              <td className="p-3 text-center">
                <button
                  onClick={() => togglePlay(song)}
                  className="hover:scale-110 transition-transform"
                >
                  {currentSong?.id === song.id && isPlaying ? (
                    <PauseCircle size={28} />
                  ) : (
                    <PlayCircle size={28} />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {currentSong && (
        <audio
          ref={audioRef}
          src={currentSong.audio}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default ListenerTrend;
