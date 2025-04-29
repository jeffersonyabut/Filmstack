import movie1 from "/images/notting.jpg";
import movie2 from "/images/13goingon30.jpg";
import movie3 from "/images/10things.jpg";
import movie4 from "/images/shes.jpg";
import movie5 from "/images/cinderella.jpg";
import movie6 from "/images/awalk.jpg";
import movie7 from "/images/pride.jpg";
import movie8 from "/images/500.jpg";
import movie9 from "/images/howtolose.jpg";
import movie10 from "/images/eternal.jpg";

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
      title: "Notting Hill",
      rating: "10",
      description: "Idol ko here si hugh grant ",
    },
    {
      src: movie2,
      title: "13 Going On 30",
      rating: "10",
      description: "A romantic drama.",
    },
    {
      src: movie3,
      title: "10 Things I Hate About You",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie4,
      title: "She's All That",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie5,
      title: "A Cinderella Story",
      rating: "10",
      description: "A romantic drama.",
    },
    {
      src: movie6,
      title: "A Walk to Remember",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie7,
      title: "Pride and Prejudice",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie8,
      title: "(500) Days of Summer",
      rating: "10",
      description: "A romantic drama.",
    },
    {
      src: movie9,
      title: "How to Lose a Guy in 10 Days",
      rating: "10",
      description: "An action-packed adventure.",
    },
    {
      src: movie10,
      title: "Eternal Sunshine of the Spotless Mind",
      rating: "10",
      description: "An action-packed adventure.",
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
      <h1 className=" font-bold text-text bord">FAVORITES</h1>
      <div className="relative mt-2 xl:flex xl:flex-row">
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
                  className="h-64 xl:h-96 ml-1 mr-1 rounded-md hover:p-2 hover:rounded"
                  onClick={() => setOpenIndex(index)}
                  whileHover={{ scale: 0.95 }}
                  onContextMenu={handleContextMenu}
                />
                <Popup
                  isOpen={openIndex === index}
                  onClose={() => setOpenIndex(null)}
                >
                  <div className="flex flex-col xl:flex-row items-center">
                    <img src={movie.src} className="w-60" alt="" />
                    <div className="w-64 xl:w-72  xl:h-72 p-2 ">
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
    </>
  );
}
