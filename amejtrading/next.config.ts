// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//         optimizePackageImports: ["@chakra-ui/react"],
//     },
//     images: {
//         domains: ["ytimg.com", "i.ytimg.com", "youtube.com", "youtu.be"],
//     },
// }
//
// export default nextConfig
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
        domains: ["ytimg.com", "i.ytimg.com", "youtube.com", "youtu.be"],
    },
    
        eslint: {
          ignoreDuringBuilds: true,
        },
      
    async headers() {
        return [
            {
                source: "/img/:path*",
                headers: [
                    {
                        key: "Content-Type",
                        value: "video/mp4",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
