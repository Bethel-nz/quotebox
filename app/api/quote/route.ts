import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export const GET = async () => {
	try {
		const quote_count = await prisma.quotes.count();
		const data = await prisma.quotes.findFirst({
			skip: Math.floor(Math.random() * quote_count),
		});
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		console.log('[Quote]: ', error.message);
	}
};
