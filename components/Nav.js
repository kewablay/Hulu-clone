import { useRouter } from "next/router";
import requests from "../utils/requests";

function Nav() {
  const router = useRouter();

  // console.log(Object.entries(requests));

  return (
    <nav className="relative">
      <div className="flex px-0 whitespace-nowrap text-lg overflow-x-scroll overflow-y-hidden  scrollbar-hide sm:px-10 sm:text-xl h-auto">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <p
            key={key}
            className="mx-5 cursor-pointer transition duration-200 transform hover:scale-125 hover:text-white active:text-green-300"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </p>
        ))}
        <div className="absolute right-0 top-0 bg-gradient-to-l from-[#062024] w-1/12 h-10"></div>
      </div>
    </nav>
  );
}

export default Nav;
