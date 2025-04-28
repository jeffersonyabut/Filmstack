import movie1 from "/images/notting.jpg";
import movie2 from "/images/13goingon30.jpg";
import movie3 from "/images/10things.jpg";
import movie4 from "/images/shes.jpg";
import movie5 from "/images/howtolose.jpg";
import movie6 from "/images/cinderella.jpg";
import movie7 from "/images/eternal.jpg";
import movie8 from "/images/500.jpg";
import movie9 from "/images/pride.jpg";
import movie10 from "/images/awalk.jpg";

export default function Favorites() {
  const movies: string[] = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8,
    movie9,
    movie10,
  ];

  return (
    <div className="mt-10">
      <h1 className="font-bold text-black">FAVORITES</h1>
      <div className="overflow-x-auto w-full h-full  whitespace-nowrap scrollbar-hide">
        {movies.map((movie, index) => (
          <span key={index} className="inline-block">
            <img src={movie} alt="" className="h-64" />
          </span>
        ))}
      </div>
    </div>
  );
}
