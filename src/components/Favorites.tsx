import movie1 from "/images/Flow.jpg";
import movie2 from "/images/WildRobot.jpg";
import movie3 from "/images/Elemental.jpg";
import movie4 from "/images/Eli.jpg";
import movie5 from "/images/Raya.jpg";
import movie6 from "/images/Dinosaur.jpg";

import { useRef } from "react";
import Scrolls from "../modal/Scrolls";
import { Movie } from "../types/goated";
import Mapping from "./Mapping";

export default function Favorites() {
  const ref = useRef<HTMLDivElement>(null);

  const movies: Movie[] = [
    {
      src: movie1,
      rating: "9.5",
    },
    {
      src: movie2,
      rating: "9.5",
    },
    {
      src: movie3,
      rating: "10",
    },
    {
      src: movie4,
      rating: "10",
    },
    {
      src: movie5,
      rating: "8.5",
    },
    {
      src: movie6,
      rating: "10",
    },
  ];

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollLeft += 200;
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className=" font-semibold font-helvetica text-text border-b pl-3 m-3 mt-24 text-base">
        FAVOURITE
      </h1>
      <div className="relative mt-2 xl:flex xl:flex-row p-5 xl:h-3/6">
        <Scrolls scrollLeft={scrollLeft} scrollRight={scrollRight}>
          <div
            className="overflow-x-auto w-full h-full whitespace-nowrap  xl:scrollbar-hide"
            ref={ref}
            style={{ scrollBehavior: "smooth" }}
          >
            {movies.map((movie, index) => (
              <Mapping
                containerClass="h-40 xl:h-96 ml-1 mr-5 rounded-md hover:p-2 hover:rounded drop-shadow border flex items-center justify-center "
                src={movie.src}
                rating={movie.rating}
                index={index}
                key={index}
                handleContextMenu={handleContextMenu}
              ></Mapping>
            ))}
          </div>
        </Scrolls>
      </div>
    </>
  );
}
