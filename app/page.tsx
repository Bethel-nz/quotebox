import Card from '@/components/Card';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-4 bg-neutral-900 text-gray-200'>
			<div className=' rounded-md px-8 py-2 '>
				<h1 className='text-2xl font-bold'>Quote Box</h1>
			</div>
			<div className='items-center grid w-full h-[90dvh] place-items-center '>
				<Card />
			</div>
		</main>
	);
}
