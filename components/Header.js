import Image from "next/image";
import Logo from "../images/logo.png";
import {
  HomeIcon,
  BadgeCheckIcon,
  MoonIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="flex flex-col items-center h-auto sm:flex-row m-5 justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl ">
        <HeaderItem title={"HOME"} Icon={HomeIcon} />
        <HeaderItem title={"TRENDING"} Icon={LightningBoltIcon} />
        <HeaderItem title={"VERIFIED"} Icon={BadgeCheckIcon} />
        <HeaderItem title={"COLLECTION"} Icon={MoonIcon} />
        <HeaderItem title={"SEARCH"} Icon={SearchIcon} />
        <HeaderItem title={"ACCOUNT"} Icon={UserIcon} />
      </div>
      <Image
        src={Logo}
        width="100px"
        height="50px"
        className="object-contain"
      />
    </header>
  );
}

export default Header;