import * as React from 'react'
import { useContext } from "react";
import { Link } from "gatsby";
import { generateLinkUrl } from '../utils/layour_helper';
import classNames from 'classnames';
import LayoutBuilderContext from '../contexts/LayoutBuilderContext';

const ApplicationBar = ({ }) => {

  const containerRef = React.useRef(null);
  const barRef = React.useRef(null);

  const { context, activeLink, setActiveLink } =
    useContext(LayoutBuilderContext);

  const checkSize = () => {
    if (typeof window !== undefined && barRef.current) {
      // console.log(barRef.current.clientWidth);
      // if (0 <= barRef.current.scrollWidth) {
      //   return true;
      // } else {
      //   return false;
      //   // containerRef.current.classList.remove("flex-col");
      // }

      // const position = window.innerWidth - barRef.current.scrollWidth;

      // console.log(position, window.innerWidth, barRef.current.scrollWidth);
    }
  };
  checkSize()
  if(typeof window !== 'undefined') {
    window.addEventListener("resize", checkSize);
  }


  return (
    <div className="header  bg-white w-full overflow-hidden border p-0">
      <div
        className="flex flex-0 items-center overflow-x-auto "
        ref={containerRef}
      >
        {context?.application?.links?.map((link) => {
          let url = generateLinkUrl(context, link.slug);
            return (
              <div className="border-r border-gray-200">
                <Link
                  to={url}
                  onClick={() => setActiveLink(url)}
                  className={classNames(
                    "h-8 flex cursor-pointer border-b-2 hover:shadow-inner hover:border-gray-100 items-center justify-center py-1 pl-3 pr-4 align-middle hover:text-gray-800 ",
                    {
                      "text-gray-900 border-gray-100 shadow-inner":
                        activeLink === url,
                      "text-gray-700 border-gray-200 hover:border-gray-100":
                        activeLink != url,
                    }
                  )}
                >
                  <span class="material-symbols-outlined text-md mr-2">
                    {link.icon}
                  </span>
                  <span className="inline align-middle text-sm">
                    {link.name}
                  </span>
                </Link>
              </div>
            );
        })}
        <div
          className="flex-1 cursor-pointer border-b-2 border-gray-200 h-8"
          ref={barRef}
        ></div>
      </div>
    </div>
  );
};

export default ApplicationBar;