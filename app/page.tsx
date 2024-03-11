import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Quotes from "@/components/Quotes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-neutral-900 text-gray-200">
      <Navbar />
      <div className="items-center grid w-full h-[90dvh] place-items-center ">
        <Quotes />
      </div>
    </main>
  );
}
