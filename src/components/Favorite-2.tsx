import movie1 from "/images/bridge.jpg";
import movie2 from "/images/theparent.jpg";
import movie3 from "/images/flipped.jpg";
import movie4 from "/images/thespace.jpg";
import movie5 from "/images/midnight.jpg";
import { useState } from "react";
import Popup from "../modal/Popup";

export default function FavoriteTwo() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const movies: string[] = [movie1, movie2, movie3, movie4, movie5];
  const descriptions: string[] = [
    "A bridge between two worlds.",
    "A tale of love and family.",
    "A journey of self-discovery.",
    "An adventure beyond the stars.",
    "A night of unexpected encounters.",
  ];

  return (
    <div className="mt-5">
      <div className="overflow-x-auto w-full h-full whitespace-nowrap scrollbar-hide">
        {movies.map((movie, index) => (
          <button onClick={() => setOpenIndex(index)} key={index}>
            <span key={index} className="inline-block">
              <img src={movie} alt="" className="h-64" />
            </span>
            <Popup
              isOpen={openIndex === index}
              onClose={() => setOpenIndex(null)}
            >
              <p key={index}>
                {descriptions[index]}
                {index}
              </p>
            </Popup>
          </button>
        ))}
      </div>
    </div>
  );
}
