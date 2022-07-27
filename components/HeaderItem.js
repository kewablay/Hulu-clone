function HeaderItem({ title, Icon }) {
  return (
    <div className="group w-12 flex flex-col items-center cursor-pointer hover:text-white sm:w-20">
      <Icon className="h-7 group-hover:animate-bounce " />
      <p className="tracking-widest opacity-0 transition duration-500 group-hover:opacity-100 ">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
