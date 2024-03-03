import MillionCompiler from '@million/lint';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

export default MillionCompiler.next()(nextConfig);