import profile from "/images/profile.jpg";

export default function Background() {
  return (
    <div className="relative w-full h-20 xl:h-40">
      <img
        src={profile}
        alt=""
        className="w-full h-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
}
