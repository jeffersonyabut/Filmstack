import imageData from "../data/images.json";
import fav2 from "../data/fav2.json";
import GoodSpread from "./GoodSpread";

export default function Favorites() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-11/12 flex items-center justify-between h-8 mt-24 p-6 border-b-2">
          <h1 className=" font-semibold font-helvetica text-text text-base">
            Favourite
          </h1>
          <h1 className="font-semibold text-text text-base font-helvetica">
            {">"}
          </h1>
        </div>
        <GoodSpread
          imageData={imageData}
          handleContextMenu={handleContextMenu}
        />
        <GoodSpread imageData={fav2} handleContextMenu={handleContextMenu} />
      </div>
    </>
  );
}
