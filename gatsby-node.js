const path = require(`path`);

exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Site has been built!`);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const redirectTemplate = path.resolve(`src/templates/redirect.js`);
  const tenantTemplate = path.resolve(`src/templates/tenant.js`);
  const applicationTemplate = path.resolve(`src/templates/application.js`);
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

    let sources = result.data.allData.nodes;

    if(sources.length <= 0) return;

    sources.forEach((source, index) => {

        let consolePrefix = `${source.title} v ${source.version}`;

        console.log(
          `${consolePrefix} | Source Complilation`
        );

        let tenants = source.tenants;

        if (tenants.length <= 0) return;

        tenants.forEach((tenant) => {

            consolePrefix = `${tenant.name}`;
            console.log(`${consolePrefix} | Creating index page`);

            createPage({
              path: `${tenant.slug}`,
              component: tenantTemplate,
              context: {
                source: {
                    name: source.name
                },
                tenant
              },
            });

            let apps = [...tenant.defaultapps];
            Array.prototype.push.apply(apps, tenant.applications);

            if (apps.length <= 0) return;

            apps.forEach((application) => {

                consolePrefix = `${consolePrefix} | ${application.name}`;
                console.log(`${consolePrefix} Creating application page`);

                var firstLink = false;

                application.links.forEach((link) => {
                    
                    consolePrefix = `${consolePrefix} | ${link.name}`;
                    console.log(`${consolePrefix} Creating link page`);

                    if(!firstLink){
                        firstLink = `/${tenant.slug}/${application.slug}/${link.slug}`;
                    }
                    
                    createPage({
                      path: `/${tenant.slug}/${application.slug}/${link.slug}`,
                      component: applicationTemplate,
                      context: {
                        source: {
                          name: source.name,
                        },
                        tenant,
                        application,
                        link,
                      },
                    });
                });

                if (process.env.NODE_ENV != 'development'){

                    createRedirect({
                        fromPath: `/${tenant.slug}/${application.slug}`,
                        toPath: firstLink,
                    });

                }else{

                    createPage({
                      path: `/${tenant.slug}/${application.slug}`,
                      component: redirectTemplate,
                      context: {
                        toPath: firstLink,
                      },
                    });
                }


            });


        })

    })
};
