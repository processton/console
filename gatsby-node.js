const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const redirectTemplate = path.resolve(`src/templates/redirect.js`);
  const tenantTemplate = path.resolve(`src/templates/tenant.js`);
  const applicationTemplate = path.resolve(`src/templates/application.js`);

  try {
    const result = await graphql(`
      query {
        allData {
          nodes {
            title
            version
            tenants {
              name
              slug
              logo
              defaultapps {
                name
                slug
                icon
                domains {
                  domain
                }
                links {
                  name
                  icon
                  path
                  slug
                }
              }
              applications {
                name
                slug
                icon
                domains {
                  domain
                }
                links {
                  name
                  icon
                  path
                  slug
                }
              }
            }
          }
        }
      }
    `);

    if (!result || !result.data || !result.data.allData) {
      console.warn("Error: No data returned from GraphQL.");
      return;
    }

    let sources = result.data.allData.nodes;
    if (!sources || sources.length === 0) {
      console.warn("Warning: No sources found.");
      return;
    }

    sources.forEach((source) => {
      console.log(`${source.title} v${source.version} | Source Compilation`);

      let tenants = source.tenants || [];
      if (tenants.length === 0) return;

      tenants.forEach((tenant) => {
        console.log(`${tenant.name} | Creating index page`);

        createPage({
          path: `/${tenant.slug}`,
          component: tenantTemplate,
          context: {
            source: { name: source.name },
            tenant,
          },
        });

        let apps = [...(tenant.defaultapps || []), ...(tenant.applications || [])];

        apps.forEach((application) => {
          console.log(`${tenant.name} | ${application.name} | Creating application page`);

          let firstLink = false;

          (application.links || []).forEach((link) => {
            console.log(`${tenant.name} | ${application.name} | ${link.name} | Creating link page`);

            if (!firstLink) {
              firstLink = `/${tenant.slug}/${application.slug}/${link.slug}`;
            }

            createPage({
              path: `/${tenant.slug}/${application.slug}/${link.slug}`,
              component: applicationTemplate,
              context: {
                source: { name: source.name },
                tenant,
                application,
                link,
              },
            });
          });

          if (firstLink) {
            if (process.env.NODE_ENV !== "development") {
              createRedirect({
                fromPath: `/${tenant.slug}/${application.slug}`,
                toPath: firstLink,
              });
            } else {
              createPage({
                path: `/${tenant.slug}/${application.slug}`,
                component: redirectTemplate,
                context: { toPath: firstLink },
              });
            }
          }
        });
      });
    });
  } catch (error) {
    console.log("Cannot building website", error);
  }
};

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        skipEnvCheck: true,
      }),
    ],
  });
};