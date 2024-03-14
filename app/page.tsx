import Navbar from '@/components/Navbar';
import Quotes from '@/components/Quotes';
import { Subscribe } from '@/components/Subscribe';
import { unstable_noStore as noStore } from 'next/cache';

export default function Home() {
	noStore();
	return (
		<main className='flex flex-col bg-red-400 w-full min-h-screen bg-hero bg-no-repeat bg-center bg-cover'>
			<div className='bg-[#000000CC] flex flex-col overflow-hidden items-center w-full  min-h-screen p-8 md:p-12'>
				<Navbar />
				<h1 className='mt-20 font-light leading-10 md:leading-[88px] tracking-tighter text-white text-4xl md:text-[80px] text-center md:max-w-5xl'>
					Get Your Daily Dose of Motivation!
				</h1>
				<p className='mt-4 mb-6 md:mb-[100px] font-light text-white text-sm md:text-lg text-center max-w-4xl'>
					Start your day on a positive note and stay motivated to conquer your
					goals with our handpicked collection of inspirational quotes.
				</p>
				<div className='flex md:hidden'>
					<Subscribe />
				</div>

				<div className='custom-scrollbar py-10 overflow-x-scroll w-[100vw] items-center grid place-items-center px-5 md:px-8'>
					<Quotes />
				</div>
			</div>
		</main>
	);
}
