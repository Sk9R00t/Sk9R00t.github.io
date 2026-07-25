import { useState, useRef } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {/* Hidden Audio Element */}
      {/* IMPORTANT: This expects 'music.mp3' to be in your 'public' folder */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mp3" />
      </audio>

      {/* Cute Toggle Button */}
      <button
        onClick={togglePlay}
        className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          isPlaying 
            ? "bg-pink-400 animate-bounce shadow-pink-300/50" 
            : "bg-white text-gray-400 hover:bg-gray-100"
        }`}
      >
        {isPlaying ? (
          /* Music Note Icon */
          <span className="text-xl">🎵</span>
        ) : (
          /* Muted Icon */
          <span className="text-xl">🔇</span>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;