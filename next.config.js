const headers = [
  "Accept", "Accept-Version", "Content-Length",
  "Content-MD5", "Content-Type", "Date", "X-Api-Version",
  "X-CSRF-Token", "X-Requested-With",
];

module.exports = {
  //webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },

  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Access-Control-Allow-Credentials", value:
              "true"
          }, {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000"
          }, {
            key: "Access-Control-Allow-Methods", value:
              "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          }, {
            key: "Access-Control-Allow-Headers", value:
              "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-CSRF-Token, X-Requested-With"
          },
        ],
      },
    ];
  },


};