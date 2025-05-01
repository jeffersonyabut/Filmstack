import profile from "/images/profile.jpg";
import Instagram from "./icons/Instagram";
import Favorites from "./components/Favorites";
import FavoriteTwo from "./components/Favorite-2";
import Audio from "./components/Audio";
import Background from "./components/Background";

export default function Home() {
  const dis = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-max w-full xl:w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <Background />
      <div className=" text-white w-full flex flex-col  items-center ">
        <img
          src={profile}
          alt="profile"
          className="rounded-full w-32 mt-5 xl:w-60"
          onContextMenu={dis}
        />
        <div className=" w-32 flex-row flex items-center justify-between mt-10 ">
          <a
            href="
          https://www.instagram.com/epoymadness/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            href="https://www.instagram.com/epoymadness/"
            className="text-text text-sm tracking-tight"
            rel="noopener noreferrer"
            target="_blank"
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
