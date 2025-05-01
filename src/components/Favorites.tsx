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
      rating: "10/10",
      description:
        "Idol ko here si hugh grant, papuntahin nya daw space at ilagay sa submarine horses nya, lol. can i stay a bit longer? stay forever. applause also sa ost, ganda! a must watch rom-com drama movie <3",
    },
    {
      src: movie2,
      title: "13 Going On 30",
      rating: "10/10",
      description:
        "life isn't 13 going on 30. There's no magic dust, just choices. god i love jen garner, she's so natural. <3",
    },
    {
      src: movie3,
      title: "10 Things I Hate About You",
      rating: "10/10",
      description: "lord here we go lmao. cutie sad cameron and bianca",
    },
    {
      src: movie4,
      title: "She's All That",
      rating: "10/10",
      description: "19's romcom coded sm",
    },
    {
      src: movie5,
      title: "A Cinderella Story",
      rating: "10/10",
      description:
        "i love sam fits here so much, she's so cute. nailed every fits.",
    },
    {
      src: movie6,
      title: "A Walk to Remember",
      rating: "10/10",
      description: "guys horror to, trap genre!! kaiyak",
    },
    {
      src: movie7,
      title: "Pride and Prejudice",
      rating: "10/10",
      description: "Hawud sad kayng flow sa story! nyehehee love this movie",
    },
    {
      src: movie8,
      title: "(500) Days of Summer",
      rating: "10/10",
      description: "i love the smiths",
    },
    {
      src: movie9,
      title: "How to Lose a Guy in 10 Days",
      rating: "10/10",
      description: "dito ko nakuha charm ko guys nyaahwhaha",
    },
    {
      src: movie10,
      title: "Eternal Sunshine of the Spotless Mind",
      rating: "10/10",
      description:
        "weird movie but it all make sense by the end, kaiyak nyahwhahawh",
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
      <h1 className=" font-bold text-text bord p-5">FAVORITES</h1>
      <div className="relative mt-2 xl:flex xl:flex-row p-5">
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
                  className="h-40 xl:h-96 ml-1 mr-5 rounded-md hover:p-2 hover:rounded grayscale border"
                  onClick={() => setOpenIndex(index)}
                  whileHover={{ scale: 0.95 }}
                  onContextMenu={handleContextMenu}
                />
                <Popup
                  isOpen={openIndex === index}
                  onClose={() => setOpenIndex(null)}
                >
                  <div className="flex flex-col xl:flex-row items-center justify-center">
                    <img
                      src={movie.src}
                      className="w-60 rounded-md"
                      alt=""
                      onContextMenu={handleContextMenu}
                    />
                    <div className="w-64 flex flex-col justify-center text-left  h-full xl:w-72  xl:h-72 pl-2 ">
                      <h1 className="font-bold mt-1">{movie.title}</h1>
                      <h3 className="font-bold tracking-tighter">
                        {movie.rating}
                      </h3>
                      <p className=" h-max text-wrap mt-10 tracking-tight leading-4">
                        {movie.description}
                      </p>
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
