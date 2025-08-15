import { ClipLoader } from "react-spinners";
import { ImageLoaderProps } from "../types/goated";
export default function SpinnerLoader({ containerClass }: ImageLoaderProps) {
  return (
    <>
      <div className={containerClass}>
        <ClipLoader color="#b4b4b4" speedMultiplier={0.5} />
      </div>
    </>
  );
}
