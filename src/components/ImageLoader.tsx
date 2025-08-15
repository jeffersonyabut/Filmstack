import { useState } from "react";

import SpinnerLoader from "./SpinnerLoader";
import { ImageLoaderProps } from "../types/goated";
import { motion } from "motion/react";

export default function ImageLoader({
  src,
  className,
  onClick,
  onContextMenu,
  containerClass,
}: ImageLoaderProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <SpinnerLoader containerClass={containerClass} />}

      <motion.img
        src={src}
        className={`${className} ${
          !loading ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        alt=""
        onClick={onClick}
        onLoad={() => setLoading(false)}
        onContextMenu={onContextMenu}
        whileHover={{ scale: 0.95 }}
      />
    </>
  );
}
