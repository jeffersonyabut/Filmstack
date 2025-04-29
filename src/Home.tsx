import profile from "/images/profile.jpg";
import Instagram from "./icons/Instagram";
import Favorites from "./components/Favorites";
import FavoriteTwo from "./components/Favorite-2";
import Audio from "./components/Audio";

export default function Home() {
  const dis = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-max w-full p-5 xl:p-20 bg-background">
      <div className=" text-white w-full flex flex-col  items-center border-b-2">
        <img
          src={profile}
          alt="profile"
          className="rounded-full w-1/2 mt-5 xl:w-60"
          onContextMenu={dis}
        />
        <div className=" w-40 flex-row flex items-center justify-between mt-10 ">
          <a
            href="
          https://www.instagram.com/epoymadness/"
          >
            <Instagram />
          </a>
          <a
            href="https://www.instagram.com/epoymadness/"
            className="text-text"
          >
            epoymadness
          </a>
        </div>
        <Audio />
      </div>
      <Favorites />
      <FavoriteTwo />
    </div>
  );
}
