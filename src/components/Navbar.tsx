interface NavbarProp {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProp) => {
  return (
    <nav className=" flex justify-around items-center mt-8 mx-8 h-20 rounded-xl bg-purple-400">
      <b className="text-white text-2xl">popCorn</b>
      {children}
    </nav>
  );
};

export default Navbar;
