export default {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Enable SWC support for styled-components
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
