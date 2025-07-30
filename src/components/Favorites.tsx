import movie1 from "/images/Flow.jpg";
import movie2 from "/images/WildRobot.jpg";

import { useState, useRef } from "react";
import Popup from "../modal/Popup";
import Scrolls from "../modal/Scrolls";
import { motion } from "motion/react";
import { Movie } from "../types/goated";

export default function Favorites() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const movies: Movie[] = [
    {
      src: movie1,
      rating: "9.5",
    },
    {
      src: movie2,
      rating: "9.5",
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
      <h1 className=" font-semibold font-helvetica text-text border-b p-5 mt-10">
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
              <span key={index} className="inline-block">
                <motion.img
                  src={movie.src}
                  alt=""
                  className="h-40 xl:h-96 ml-1 mr-5 rounded-md hover:p-2 hover:rounded drop-shad"
                  onClick={() => setOpenIndex(index)}
                  whileHover={{ scale: 0.95 }}
                  onContextMenu={handleContextMenu}
                />
                <Popup
                  isOpen={openIndex === index}
                  onClose={() => setOpenIndex(null)}
                >
                  <div className="flex flex-col  items-center justify-center">
                    <img
                      src={movie.src}
                      className="w-60 rounded-md"
                      alt=""
                      onContextMenu={handleContextMenu}
                    />
                    <div className="w-64 flex flex-col justify-center text-left  h-full xl:w-72  pl-2 ">
                      <h3 className="font-semibold tracking-tighter border-t mt-5 xl:border-t-0 font-helvetica">
                        {movie.rating}
                      </h3>
                    </div>
                  </div>
                </Popup>
              </span>
            ))}
          </div>
        </Scrolls>
      </div>
    </>
  );
}
