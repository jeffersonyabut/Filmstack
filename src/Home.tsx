import profile from "/images/profile.jpg";
import Instagram from "./icons/Instagram";
import Favorites from "./components/Favorites";
import FavoriteTwo from "./components/Favorite-2";
import Audio from "./components/Audio";

export default function Home() {
  return (
    <div className="h-max w-full p-5 bg-background">
      <div className=" text-white w-full flex flex-col  items-center">
        <img src={profile} alt="profile" className="rounded-full w-1/2 mt-5" />
        <div className=" w-40 flex-row flex items-center justify-between mt-10 ">
          <Instagram />
          <p className="text-text">epoymadness</p>
        </div>
        <Audio />
      </div>
      <Favorites />
      <FavoriteTwo />
    </div>
  );
}
