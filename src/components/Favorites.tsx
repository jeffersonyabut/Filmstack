import movie1 from "/images/notting.jpg";
import movie2 from "/images/13goingon30.jpg";
import movie3 from "/images/10things.jpg";
import movie4 from "/images/shes.jpg";
import movie5 from "/images/howtolose.jpg";
import movie6 from "/images/cinderella.jpg";
import movie7 from "/images/eternal.jpg";
import movie8 from "/images/500.jpg";
import movie9 from "/images/pride.jpg";
import movie10 from "/images/awalk.jpg";
import { useState } from "react";
import Popup from "../modal/Popup";

export default function Favorites() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const movies: string[] = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8,
    movie9,
    movie10,
  ];
  const descriptions: string[] = [
    "A bridge between two worlds.",
    "A tale of love and family.",
    "A journey of self-discovery.",
    "An adventure beyond the stars.",
    "A night of unexpected encounters.",
  ];

  return (
    <div className="mt-10">
      <h1 className="font-bold text-text">FAVORITES</h1>
      <div className="overflow-x-auto w-full h-full  whitespace-nowrap scrollbar-hide">
        {movies.map((movie, index) => (
          <>
            <span key={index} className="inline-block">
              <img
                src={movie}
                alt=""
                className="h-64"
                onClick={() => setOpenIndex(index)}
                key={index}
              />
            </span>
            <Popup
              isOpen={openIndex === index}
              onClose={() => setOpenIndex(null)}
            >
              <p key={index}>{descriptions[index]}</p>
            </Popup>
          </>
        ))}
      </div>
    </div>
  );
}
