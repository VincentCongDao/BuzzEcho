/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "images.pexels.com" },
			{ protocol: "https", hostname: "pexels.com" },
			{ protocol: "https", hostname: "www.pexels.com" },
		],
		domains: ["images.pexels.com", "pexels.com"],
	},
};

export default nextConfig;
