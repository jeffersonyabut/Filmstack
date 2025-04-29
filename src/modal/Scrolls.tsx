import Arrleft from "../icons/Arrleft";
import Arrright from "../icons/Arrright";
import { ScrollsProps } from "../types/goated";

export default function Scrolls({
  scrollLeft,
  scrollRight,
  children,
}: ScrollsProps) {
  return (
    <div>
      <button
        className="hidden xl:flex xl:absolute xl:bottom-40 xl:drop-shadow-md backdrop-shadow-md xl:left-0 xl:ml-4"
        onClick={scrollLeft}
      >
        <Arrleft />
      </button>
      {children}
      <button
        className=" hidden xl:flex xl:absolute xl:right-0 xl:bottom-40 xl:mr-4 xl:drop-shadow-md"
        onClick={scrollRight}
      >
        <Arrright />
      </button>
    </div>
  );
}
