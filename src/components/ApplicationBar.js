import * as React from 'react'
import { Link } from "gatsby";
import { generateLinkUrl } from '../utils/layour_helper';

const ApplicationBar = ({ pageContext }) => {
  // console.log();
  return (
    <div className="header flex h-10 bg-white border p-0">
      {pageContext?.application?.links?.map((link) => (
        <Link
          to={generateLinkUrl(pageContext, link.slug)}
          className="flex cursor-pointer border-b-2 border-transparent hover:border-green-800 items-center justify-center p-0 pl-3 pr-4 align-middle hover:text-green-800 "
        >
          <span class="material-symbols-outlined text-md mr-2">{link.icon}</span>
          <span className="inline align-middle text-sm">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default ApplicationBar;