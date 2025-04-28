import { useRef, useState } from "react";
import Play from "../icons/Play";
import Pause from "../icons/Pause";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
    toggleMusic();
  };

  return (
    <div className="mt-10">
      <audio ref={audioRef} controls className="hidden">
        <source src="/thereshegoes.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handlePlay}>{isPlaying ? <Pause /> : <Play />}</button>
    </div>
  );
}
