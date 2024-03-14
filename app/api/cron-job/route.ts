import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';
import nodemailer from 'nodemailer';

export const maxDuration = 10;
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: Request) {
	try {
		const users = await prisma.users.findMany();

		const quote_count = await prisma.quotes.count();
		const quote = await prisma.quotes.findFirst({
			skip: Math.floor(Math.random() * quote_count),
		});

		if (!quote) {
			throw new Error('Error fetching quote');
		}

		if (!users) throw new Error('No users');

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'aautominner@gmail.com',
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const emailPromises = users.map((user) => {
			const unsubscribeLink = `https://your-domain.com/api/unsubscribe?token=${user.token}`;

			const mailOptions = {
				from: 'quotebox@gmail.com',
				to: user.email,
				subject: "Today's Quote",
				text: `
          <div>
          <h2>Quote of the day!</h2>
          <p>${quote.quote}</p>
          <p>${quote.author}</p>
          <div style="border: 1px solid #ccc; padding: 10px; background-color: #f8f8f8;">
          <p>We're excited to inform you that ${quote.tags} is now back in stock.</p>
          </div>
          <p>Click to <a href="${unsubscribeLink}">Unsubscribe</a></p>
          </div>
        `,
			};
			return new Promise((resolve, reject) => {
				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						console.error(`Error sending email to ${user.email}:`, error);
						reject(error);
					} else {
						console.log(`Email sent to ${user.email}:`, info.response);
						resolve(info);
					}
				});
			});
		});

		await Promise.all(emailPromises);

		return NextResponse.json({
			message: 'Ok',
			data: 'successfully sent mails',
		});
	} catch (error: any) {
		console.log(error);
		throw new Error(`Failed to get all users: ${error.message}`);
	}
}
