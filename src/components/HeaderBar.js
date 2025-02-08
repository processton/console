import * as React from 'react'
import { Link } from "gatsby";

const HeaderBar = ({ pageContext }) => {
  console.log(pageContext?.application);
  return (
    <div className="header flex h-12 bg-white p-2 border-b shadow-md">
      <div className="sidebar-inner flex w-full flex-row items-center space-x-4">
        <Link
          to={`/${pageContext?.tenant?.slug}`}
          className="cursor-pointer items-center justify-center rounded-xl hover:bg-green-800 hover:text-white"
        >
          <span className="material-symbols-outlined m-1">apps</span>
        </Link>
        {pageContext?.application && (
          <a className="flex w-full flex-row items-center space-x-4">
            <span class="material-symbols-outlined">
              {pageContext?.application?.icon}
            </span>
            <span>{pageContext?.application?.name}</span>
          </a>
        )}
      </div>
      <div className="flex-1"></div>
      <div></div>
    </div>
  );
};

export default HeaderBar;