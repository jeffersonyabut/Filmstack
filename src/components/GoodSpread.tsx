import { useRef } from "react";
import Scrolls from "../modal/Scrolls";
import Mapping from "./Mapping";
import { MovieJson } from "../types/goated";

export default function GoodSpread({
  imageData,
  handleContextMenu,
}: MovieJson) {
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

  return (
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
  );
}
