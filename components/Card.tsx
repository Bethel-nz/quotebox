'use client';
import React, { useRef } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { AnimatedText } from './AnimatedText';
import Image from 'next/image';
import html2canvas from 'html2canvas';

const Card = () => {
	const { data, error } = useSWR('/api/quote', fetcher, {
		refreshInterval: 3000000,
	});
	const cardRef = useRef(null);
	if (!data)
		return (
			<div className='bg-[#2E2E2E] rounded-md w-96 max-w-[38rem] md:w-[52rem] h-96 relative'>
				<Image
					src={'/quote-icon.png'}
					alt='quote'
					width={80}
					height={80}
					className={'absolute -top-8 right-0'}
					priority
				/>
			</div>
		);
	if (error) return 'Error';
	const handleDownloadImage = () => {
		if (cardRef.current === null) return;
		html2canvas(cardRef.current).then((canvas) => {
			const link = document.createElement('a');
			link.download = 'quote_image.png';
			link.href = canvas.toDataURL('image/png');
			link.click();
		});
	};
	const {
		quote,
		tags,
		author,
	}: {
		id: number;
		created_at: Date;
		quote: string;
		author: string;
		tags: string;
	} = data;

	return (
		<div ref={cardRef} className='p-10'>
			<div className='bg-[#2E2E2E] rounded-md w-96 max-w-[38rem] md:w-[52rem] py-4 px-6 h-96 md:h-fit flex flex-col justify-between relative shadow-md text-2xl transition-all ease-in-out'>
				<Image
					src={'/quote-icon.png'}
					alt='quote'
					width={80}
					height={80}
					className={'absolute -top-8 right-0'}
					onClick={handleDownloadImage}
					priority
				/>
				<>
					<AnimatedText word={quote.replace(/(?<=\w)\?(?=\w)/g, "'")} />
				</>

				<div className='self-end relative right-0 font-bold'>
					<p className='text-lg'>
						{' '}
						{author.split(',')[0].replace(/(?<=\w)\?(?=\w)/g, "'")}
					</p>
					<p className={'text-lg text-gray-300/60 relative text-right'}>
						#{tags.split(',')[0]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
