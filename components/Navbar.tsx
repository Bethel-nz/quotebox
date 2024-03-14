import Link from "next/link";
import { Subscribe } from "./Subscribe";

const Navbar = () => {
  return (
    <nav className="rounded-custom w-full md:px-12 py-2 md:py-4 bg-gradient-to-r from-[#FFFFFF1F] to-[#99999933] flex justify-center md:justify-between items-center">
      <Link href="/">
        <h2 className="font-bold text-xl text-white">Quotebox</h2>
      </Link>
      <div className="hidden md:flex">
        <Subscribe />
      </div>
    </nav>
  );
};

export default Navbar;
