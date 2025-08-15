import { useEffect, useState } from "react";
import profile from "/images/profile.jpg";
import Instagram from "./icons/Instagram";
import Favorites from "./components/Favorites";
import ImageLoader from "./components/ImageLoader";

export default function Home() {
  const [lastActive, setLastActive] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/epoymadness/events/public"
        );
        const data = await res.json();
        if (data.length > 0) {
          const now = new Date();
          const lastEvent = new Date(data[0].created_at);

          const diff = (now.getTime() - lastEvent.getTime()) / (1000 * 60); // in minutes
          setIsActive(diff < 60);
          const active = Math.round(diff);
          console.log(active);
          let hour = 60;

          while (active > hour) {
            hour += 60;
          }
          const finalForm = hour / 60;
          setLastActive(
            `Active ${finalForm - 1} hour${finalForm > 1 ? "s" : ""} ago`
          );
        }
      } catch (err) {
        console.error("Failed to fetch GitHub activity", err);
      }
    };

    fetchGitHubActivity();
  }, []);

  const dis = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="h-svh w-full xl:h-full xl:w-full bg-gradient-to-b from-gray-900 to-gray-800">
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
        <div>
          {isActive ? (
            <span className="text-green-500">🟢 Active now</span>
          ) : lastActive ? (
            <span className="text-helvetica text-sm">{lastActive}</span>
          ) : (
            <span>...</span>
          )}
        </div>
      </div>
      <Favorites />
    </div>
  );
}
