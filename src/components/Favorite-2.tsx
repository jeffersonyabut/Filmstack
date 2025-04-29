import movie1 from "/images/bridge.jpg";
import movie2 from "/images/theparent.jpg";
import movie3 from "/images/flipped.jpg";
import movie4 from "/images/thespace.jpg";
import movie5 from "/images/midnight.jpg";
import movie6 from "/images/proposal.jpg";
import { useState, useRef } from "react";
import Popup from "../modal/Popup";
import Scrolls from "../modal/Scrolls";

export default function FavoriteTwo() {
  const refTwo = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  const movies: string[] = [movie1, movie2, movie3, movie4, movie5, movie6];
  const descriptions: string[] = [
    "A bridge between two worlds.",
    "A tale of love and family.",
    "A journey of self-discovery.",
    "An adventure beyond the stars.",
    "A night of unexpected encounters.",
  ];

  const scrollLeft = () => {
    if (refTwo.current) {
      refTwo.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (refTwo.current) {
      refTwo.current.scrollLeft += 200;
    }
  };

  return (
    <div className="relative mt-2 xl:flex xl:flex-row ">
      <Scrolls scrollLeft={scrollLeft} scrollRight={scrollRight}>
        <div
          ref={refTwo}
          className="overflow-x-auto w-full h-full whitespace-nowrap  xl:scrollbar-hide"
        >
          {movies.map((movie, index) => (
            <>
              {" "}
              <span key={index} className="inline-block">
                <img
                  src={movie}
                  alt=""
                  className="h-64 xl:h-96 ml-1 mr-1 rounded-md hover:border hover:p-2 hover:rounded-md"
                  onClick={() => setOpenIndex(index)}
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
      </Scrolls>
    </div>
  );
}
