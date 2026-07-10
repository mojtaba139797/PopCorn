interface NavbarProp {
  children: React.ReactNode;
}

const Navbar = (prop: NavbarProp) => {
  const { children } = prop;
  return (
    <nav className=" flex justify-around items-center w-100 md:w-2xl lg:w-340 h-20 mt-4 md:mt-6 lg:mt-8 mx-2 md:mx-6 lg:mx-10 rounded-lg bg-purple-700">
      <b className="text-white text-lg md:text-xl lg:text-3xl">popCorn</b>
      {children}
    </nav>
  );
};

export default Navbar;
