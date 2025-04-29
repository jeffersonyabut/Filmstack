import Arrleft from "../icons/Arrleft";
import Arrright from "../icons/Arrright";
import { ScrollsProps } from "../types/goated";
import { motion } from "motion/react";

export default function Scrolls({
  scrollLeft,
  scrollRight,
  children,
}: ScrollsProps) {
  return (
    <div>
      <motion.button
        className="hidden xl:flex xl:absolute xl:bottom-40 xl:drop-shadow-md backdrop-shadow-md xl:left-0 xl:ml-4 z-50"
        onClick={scrollLeft}
        whileHover={{ scale: 1.05 }}
      >
        <Arrleft />
      </motion.button>
      {children}
      <motion.button
        className=" hidden xl:flex xl:absolute xl:right-0 xl:bottom-40 xl:mr-4 xl:drop-shadow-md"
        onClick={scrollRight}
        whileHover={{ scale: 1.05 }}
      >
        <Arrright />
      </motion.button>
    </div>
  );
}
