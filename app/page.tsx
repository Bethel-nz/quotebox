import Navbar from "@/components/Navbar";
import Quotes from "@/components/Quotes";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-hero bg-no-repeat bg-center bg-cover">
      <div className="bg-[#000000CC] flex flex-col items-center w-full min-h-screen p-12">
        <Navbar />
        <h1 className="mt-20 font-light leading-[88px] tracking-tighter text-white text-[80px] text-center max-w-5xl">
          Get Your Daily Dose of Motivation!
        </h1>
        <p className="mt-4 mb-[100px] font-light text-white text-lg text-center max-w-4xl">
          Start your day on a positive note and stay motivated to conquer your
          goals with our handpicked collection of inspirational quotes.
        </p>

        <div className="items-center grid w-full place-items-center ">
          <Quotes />
        </div>
      </div>
    </main>
  );
}
