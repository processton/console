import * as React from 'react'
import { useContext } from "react";
import { Link } from "gatsby";
import LayoutBuilderContext from '../contexts/LayoutBuilderContext';

const HeaderBar = () => {
  
  const { context } = useContext(LayoutBuilderContext);

  return (
    <div className="header flex h-12 bg-white p-2 border-b shadow-md">
      <div className="sidebar-inner flex w-full flex-row items-center space-x-4">
        <Link
          to={`/${context?.tenant?.slug}`}
          className="cursor-pointer items-center justify-center rounded-xl hover:bg-green-800 hover:text-white"
        >
          <span className="material-symbols-outlined m-1">apps</span>
        </Link>
        {context?.application && (
          <a className="flex w-full flex-row items-center space-x-4">
            <span class="material-symbols-outlined">
              {context?.application?.icon}
            </span>
            <span>{context?.application?.name}</span>
          </a>
        )}
      </div>
      <div className="flex-1"></div>
      <div></div>
    </div>
  );
};

export default HeaderBar;