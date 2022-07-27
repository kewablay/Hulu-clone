import requests from "../utils/requests";

function Nav() {
  return (
    <nav className="flex px-0 whitespace-nowrap text-lg overflow-scroll scrollbar-hide relative sm:px-10 sm:text-xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <p
          key={key}
          className="mx-5 cursor-pointer transition duration-200 transform hover:scale-125 hover:text-white active:text-green-300"
        >
          {title}
        </p>
      ))}
      <div className="absolute right-0 top-0 bg-[#062024]-500 w-1/12 h-10"></div>
    </nav>
  );
}

export default Nav;
