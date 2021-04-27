module.exports = {
    env: {
        REACT_APP_ACCESS_ID:"AKIAROO4JD6CSVGI2RGF",
        REACT_APP_ACCESS_KEY:"PXG3/9DoWpKKgv4zDie5L9ygBLbGijBOpgIY/yn+",
        REACT_APP_BUCKET_NAME:"fotos-sites",
        REACT_APP_REGION:"us-east-2"
    },
    async headers() {
        return [
          {
            // matching all API routes
            source: "/api/:path*",
            headers: [
              { key: "Access-Control-Allow-Credentials", value: "true" },
              { key: "Access-Control-Allow-Origin", value: "*" },
              { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
              { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
            ]
          }
        ]
      }
  }