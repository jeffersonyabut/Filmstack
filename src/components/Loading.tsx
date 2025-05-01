import { useState } from "react";
import profile from "/images/profile.jpg"; // make sure this is correctly imported

export default function Loading() {
  const [loading, setLoading] = useState(false);

  const handleImageLoad = () => {
    console.log("Image loaded");
    setLoading(true);
  };

  return (
    <>
      {loading && (
        <div className="absolute animate-pulse">
          <img src={profile} alt="Profile" onLoad={handleImageLoad} />
        </div>
      )}
      <div className={`h-screen border ${loading ? "hidden" : "block"}`}>
        <img src={profile} alt="Profile" onLoad={handleImageLoad} />
      </div>
    </>
  );
}
