import { useState, useRef, useEffect } from "react";
import Popup from "../modal/Popup";
import Scrolls from "../modal/Scrolls";
import { motion } from "motion/react";
import { Movie } from "../types/goated";

export default function Favorites() {
  const ref = useRef<HTMLDivElement>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  useEffect(() => {
    fetch("/movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data.slice(0, 10)))
      .catch((err) => console.error("Failed to load movies:", err));
  }, []);

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
