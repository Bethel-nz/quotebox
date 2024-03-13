import Link from "next/link";
import { Subscribe } from "./Subscribe";

const Navbar = () => {
  return (
    <nav className="rounded-[50px] w-full px-12 py-4 bg-gradient-to-r from-[#FFFFFF1F] to-[#99999933] flex justify-between items-center">
      <Link href="/">
        <h2 className="font-bold text-xl text-white">Quotebox</h2>
      </Link>
      <Subscribe />
    </nav>
  );
};

export default Navbar;
