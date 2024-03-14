import Unsubscribe from '@/components/Unsubscribe';

type Props = {
	searchParams: {
		token: string;
	};
};

export default function page({ searchParams }: Props) {
	const { token } = searchParams;
	return (
		<div className='bg-white min-h-screen w-full flex flex-col items-center justify-center space-y-6 p-6'>
			<Unsubscribe token={token} />
		</div>
	);
}
