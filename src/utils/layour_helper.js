export function getPageTitle(context){

    let title = "";

    if (context?.source?.name) {
      title = `${context?.source?.name} `;
    }

    if (context?.tenant?.name) {
      title = `${title} ${context?.tenant?.name} `;
    }

    return title.trim();

}

export function getRequiredIcons(context) {

  let icons = "";

  if(context?.icon){
    icons += `${context.icon},`;
  }

  if(context?.link){
    if(context.link.icon){
      icons += `${context.link.icon},`;
    }
  }

  if (context?.application?.links) {
    context.application.links.forEach((link) => {
      if (link.icon) {
        icons += `${link.icon},`;
      }
    });
  }

  icons = `${icons}add,apps,dashboard,deployed_code,deployed_code_history,diversity_2,event,favorite,fingerprint,flag,groups,home,hub,question_mark,router,search,settings,tenancy,view_apps`;

  return Array.from(new Set(icons.split(",")))
    .sort()
    .toString();

}

export function generateLinkUrl(context, slug){

    return `/${context.tenant.slug}/${context.application.slug}/${slug}`;

}

export function generateLinkUrlWithDomain(context) {

    let domain = '';
    let linkSlug = '';
    console.log(context.application);
    if (context?.application?.domains.length > 0) {
      domain = context?.application?.domains[0]?.domain;
    }
    if (context?.link?.path) {
      linkSlug = context?.link?.path;
    }
    return `http://${domain}/${linkSlug}`;
}

export function generateAppUrl(context, slug) {
  return `/${context.tenant.slug}/${slug}`;
}