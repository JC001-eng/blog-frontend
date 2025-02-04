export default {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
  },
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
      {
        source: "/signup",
        destination: "/auth/signup",
      },
      {
        source: "/login",
        destination: "/auth/login",
      },
    ];
  },
};
