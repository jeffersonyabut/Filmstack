import { useState } from "react";
import Popup from "../modal/Popup";
import ImageLoader from "./ImageLoader";
import { Movie } from "../types/goated";

export default function Mapping({
  index,
  src,
  rating,
  handleContextMenu,
  containerClass,
}: Movie) {
  const [openIndex, setOpenIndex] = useState<number | undefined | null>(null);

  return (
    <>
      <span key={index} className="inline-block">
        <ImageLoader
          containerClass={containerClass}
          src={src}
          alt=""
          className="h-40 xl:h-96 ml-1 mr-5 rounded-md hover:p-2 hover:rounded drop-shadow"
          onClick={() => setOpenIndex(index)}
          onContextMenu={handleContextMenu}
        />
        <Popup isOpen={openIndex === index} onClose={() => setOpenIndex(null)}>
          <div className="flex flex-col  items-center justify-center">
            <img
              src={src}
              className="w-60 rounded-md drop-shadow-lg"
              alt=""
              onContextMenu={handleContextMenu}
            />
            <div className="w-64 flex flex-col justify-center text-left  h-full xl:w-72  pl-2 ">
              <h3 className="font-semibold tracking-tighter border-t mt-5 xl:border-t-0 font-helvetica">
                {rating}
              </h3>
            </div>
          </div>
        </Popup>
      </span>
    </>
  );
}
