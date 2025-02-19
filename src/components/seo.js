import * as React from 'react'
import { getPageTitle, getRequiredIcons } from '../utils/layour_helper';

const Seo = ({ pageContext }) => {

  const icons = getRequiredIcons(pageContext);
  
  return (
    <>
      <title>{getPageTitle(pageContext)}</title>
      <link
        href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=${icons}`}
        rel="stylesheet"
      />
    </>
  );
};

export default Seo