import profile from "/images/profile.jpg";
import Instagram from "./icons/Instagram";
import Favorites from "./components/Favorites";
import ImageLoader from "./components/ImageLoader";
import Status from "./components/Status";

export default function Home() {
  const dis = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-full w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <div className=" text-white w-full flex flex-col  items-center">
        <ImageLoader
          containerClass="rounded-full w-32 h-32 flex items-center justify-center mt-12 xl:w-60"
          src={profile}
          alt="profile"
          className="rounded-full w-32 mt-12 xl:w-60"
          onContextMenu={dis}
        />
        <div className=" w-24 flex-row flex items-center justify-between mt-10">
          <a
            href="
          https://www.instagram.com/jeffszine/"
            rel="noopener noreferrer"
            target="_blank"
            onContextMenu={dis}
          >
            <Instagram />
          </a>
          <a
            href="https://www.instagram.com/jeffszine/"
            className="text-sm text-text tracking-wide font-helvetica"
            rel="noopener noreferrer"
            target="_blank"
            onContextMenu={dis}
          >
            jeffszine
          </a>
        </div>
        <Status />
      </div>
      <Favorites />
    </div>
  );
}
