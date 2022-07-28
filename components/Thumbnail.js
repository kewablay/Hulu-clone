import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className="group p-4 md:p-5 sm:hover:scale-105  z-500 transition duration-100  mb-3"
    >
      <Image
        src={`${base_url}${result.backdrop_path}`}
        layout="responsive"
        width={1920}
        height={1080}
        className="rounded-xl"
        alt=""
      />
      <div className="p-2">
        <h2 className="text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md">{result.overview}</p>
        <p className="flex transition duration-200 text-sm sm:opacity-0 sm:group-hover:opacity-100">
          {result.release_date || result.first_air_date}▫️
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
