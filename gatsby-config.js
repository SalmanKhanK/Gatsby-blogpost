module.exports = {
    plugins: [
      `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: "4peft16chc5j",
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: "5wpHDQNjmxtTsJwkOJfiCu4gQc7MoegP8RsZFq-ZM2I",
            },
          },
    ]
}