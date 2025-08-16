import { useRef } from "react";
import Scrolls from "../modal/Scrolls";
import Mapping from "./Mapping";
import imageData from "../data/images.json";

export default function Favorites() {
  const ref = useRef<HTMLDivElement>(null);

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
            {imageData.map((movie, index) => (
              <Mapping
                containerClass="h-40 xl:h-96 ml-1 mr-5 rounded-md hover:p-2 hover:rounded drop-shadow flex items-center justify-center "
                src={`/${movie.path}`}
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
