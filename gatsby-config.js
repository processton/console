module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "http://localhost:99/api",
        // imageKeys: ["images"],
        rootKey: "deployer",
        schemas: {
          deployer: `
              title: String
              version: Int
              count: Int
              tenants: [tenant] @default(value: [])
          `,
          tenant: `
              name: String
              slug: String
              logo: String
              applications: [application]
              defaultapps: [application]
          `,
          application: `
              name: String
              slug: String
              icon: String
              provider_key: String
              provider_url: String
              domains: [domain]
              links: [link]
          `,
          domain: `
              domain: String
          `,
          link: `
              name: String
              icon: String
              slug: String
              path: String
          `,
          // images: `
          //     url: String
          //     modified: Int
          // `,
          // author: `
          //     firstname: String
          //     lastname: String
          // `
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};
