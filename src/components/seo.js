import * as React from 'react'
import { getPageTitle, getRequiredIcons } from '../utils/layour_helper';

const Seo = ({ pageContext }) => {



  return (
    <>
      <title>{getPageTitle(pageContext)}</title>
      <link
        href={`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100&icon_names=${getRequiredIcons(pageContext)}`}
        rel="stylesheet"
      />
    </>
  );
};

export default Seo