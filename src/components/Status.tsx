import { useEffect, useState } from "react";

export default function Status() {
  const [lastActive, setLastActive] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/jeffersonyabut/events/public"
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
            `Active ${finalForm - 1} hour${finalForm - 1 > 1 ? "s" : ""} ago`
          );
        }
      } catch (err) {
        console.error("Failed to fetch GitHub activity", err);
      }
    };

    fetchGitHubActivity();
  }, []);

  return (
    <>
      <div className="mt-2">
        {isActive ? (
          <span className="text-green-500">DND</span>
        ) : lastActive ? (
          <span className="text-helvetica text-sm text-neutral-50/30">DND</span>
        ) : (
          <span>...</span>
        )}
      </div>
    </>
  );
}
