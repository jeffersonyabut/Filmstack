import profile from "/images/profile.jpg";
import Instagram from "./icons/Instagram";
import Favorites from "./components/Favorites";

export default function Home() {
  const dis = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-svh w-full xl:h-full xl:w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <div className=" text-white w-full flex flex-col  items-center">
        <img
          src={profile}
          alt="profile"
          className="rounded-full w-32 mt-12 xl:w-60"
          onContextMenu={dis}
        />
        <div className=" w-32 flex-row flex items-center justify-between mt-10">
          <a
            href="
          https://www.instagram.com/wreckitjeff/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram />
          </a>
          <a
            href="https://www.instagram.com/wreckitjeff/"
            className="text-sm text-text tracking-wide font-helvetica"
            rel="noopener noreferrer"
            target="_blank"
          >
            wreckitjeff
          </a>
        </div>
      </div>
      <Favorites />
    </div>
  );
}
