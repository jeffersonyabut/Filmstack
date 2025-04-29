import movie1 from "/images/flipped.jpg";
import movie2 from "/images/theparent.jpg";
import movie3 from "/images/bridge.jpg";
import movie4 from "/images/proposal.jpg";
import movie5 from "/images/midnight.jpg";
import movie6 from "/images/thespace.jpg";
import { useState, useRef } from "react";
import Popup from "../modal/Popup";
import Scrolls from "../modal/Scrolls";
import { motion } from "motion/react";
import { Movie } from "../types/goated";

export default function FavoriteTwo() {
  const refTwo = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const movies: Movie[] = [
    {
      src: movie1,
      title: "Flipped",
      rating: "10",
      description: "A romantic drama.",
    },
    {
      src: movie2,
      title: "The Parent Trap",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie3,
      title: "Bridge to Terabithia",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie4,
      title: "The Proposal",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie5,
      title: "Midnight Sun",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie6,
      title: "The Space Between Us",
      rating: "10",
      description: "An action-packed adventure.",
    },
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

  const preventDefault = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative mt-2 xl:flex xl:flex-row ">
      <Scrolls scrollLeft={scrollLeft} scrollRight={scrollRight}>
        <div
          ref={refTwo}
          className="overflow-x-auto w-full h-full whitespace-nowrap  xl:scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {movies.map((movie, index) => (
            <span key={index} className="inline-block">
              <motion.img
                src={movie.src}
                className="h-64 xl:h-96 ml-1 mr-1 rounded-md hover:p-2 hover:rounded"
                onClick={() => setOpenIndex(index)}
                whileHover={{ scale: 0.95 }}
                onContextMenu={preventDefault}
              />
              <Popup
                isOpen={openIndex === index}
                onClose={() => setOpenIndex(null)}
              >
                <div className="flex flex-col xl:flex-row items-center">
                  <img src={movie.src} className="w-60" alt="" />
                  <div className="w-64 xl:w-72  xl:h-72 p-2">
                    <h1 className="font-bold">{movie.title}</h1>
                    <h3 className="font-bold">{movie.rating}</h3>
                    <p className="ml-1">{movie.description}</p>
                  </div>
                </div>
              </Popup>
            </span>
          ))}
        </div>
      </Scrolls>
    </div>
  );
}
