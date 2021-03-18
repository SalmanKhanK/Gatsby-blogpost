require("dotenv").config({
  path: `.env`,
})
module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
    plugins: [
      `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-source-contentful`,

            options: {
              spaceId: "4peft16chc5j",
              accessToken: "5wpHDQNjmxtTsJwkOJfiCu4gQc7MoegP8RsZFq-ZM2I"
              // accessToken: process.env.accessToken,
            },
          },
          {
            resolve:"gatsby-plugin-firebase",
            options:{
              credentials:{
                apiKey:process.env.apiKey,
                authDomain:process.env.authDomain,
                projectId:process.env.projectId,
                storageBucket:process.env.storageBucket,
                messagingSenderId:process.env.messagingSenderId,
                appId:process.env.appId

            },
          },
        },
    ]
}