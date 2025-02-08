import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CalendarMini from './CaledarMini';
import classNames from "classnames";

const SideBar = ({ pageContext }) => {

  const [showMiniCalendar, setShowMiniCalendar] = React.useState(false)

  return (
    <>
      <div className="sidebar z-10 flex w-12 flex-col space-y-6 bg-white p-2 pb-0 border-r shadow-md">
        <div className="sidebar-inner flex w-full flex-col items-center">
          <a className="relative h-10 w-10 cursor-pointer items-center justify-center overflow-hidden">
            <StaticImage
              className="absolute h-auto max-w-full text-gray-400 shadow-md"
              alt=""
              src="../images/logo.png"
            />
          </a>
        </div>

        <div className="sidebar-inner flex w-full flex-1 flex-col items-center space-y-2">
          <a
            onClick={() => setShowMiniCalendar(!showMiniCalendar)}
            className={classNames(
              "cursor-pointer items-center justify-center rounded-xl ",
              {
                "bg-green-800 text-white": showMiniCalendar,
                "hover:bg-green-800 hover:text-white": !showMiniCalendar,
              }
            )}
          >
            <span className="material-symbols-outlined m-1">event</span>
          </a>
          <a className="cursor-pointer items-center justify-center rounded-xl hover:bg-green-800 hover:text-white">
            <span className="material-symbols-outlined m-1">add</span>
          </a>
          <a className="cursor-pointer items-center justify-center rounded-xl hover:bg-green-800 hover:text-white">
            <span className="material-symbols-outlined m-1">search</span>
          </a>
          <a className="cursor-pointer items-center justify-center rounded-xl hover:bg-green-800 hover:text-white">
            <span className="material-symbols-outlined m-1">favorite</span>
          </a>
        </div>
        <div className="sidebar-inner flex w-full space-y-4 flex-col items-center pb-4">
          <a className="relative h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100 hover:bg-green-800 hover:text-white dark:bg-gray-600">
            <img
              className="absolute h-auto max-w-full text-gray-400"
              src="https://placehold.co/300x300"
            />
          </a>
        </div>
      </div>
      {showMiniCalendar && <CalendarMini />}
    </>
  );
};

export default SideBar;