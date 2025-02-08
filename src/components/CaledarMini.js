import * as React from 'react'
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import AddEvent from './AddEvent';
import classNames  from 'classnames'

const CalendarMini = ({ pageContext }) => {

    const [ selectedView , setSelectedView ] = useState('today')
    const [ showViewSelector, setShowViewSelector ] = useState(false)
    const [ showEventForm, setShowEventForm] = useState(false);

    useEffect(() => {
      setShowViewSelector(false);
    }, [selectedView]);
    


  return (
    <>
      <div
        className={classNames(
          "z-9 fixed xl:static w-96 left-12 secondary-sidebar xl:min-h-screen flex-col space-y-6 bg-white p-2 pb-0 border-r shadow-md",
        )}
      >
        <div className="flex flex-row-auto z-9 items-center justify-between">
          <div className="flex items-center w-full">
            <div className="ml-4 flex items-center w-full">
              <div className="flex-1">
                <div className="relative ">
                  <button
                    type="button"
                    onClick={() => setShowViewSelector(!showViewSelector)}
                    className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    {selectedView == "today"
                      ? "Day"
                      : selectedView == "week"
                      ? "Week"
                      : selectedView == "month"
                      ? "Month"
                      : selectedView == "year"
                      ? "Year"
                      : selectedView}{" "}
                    view
                    <svg
                      className="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  {showViewSelector && (
                    <div
                      className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                      <div className="py-1" role="none">
                        <a
                          onClick={() => setSelectedView("today")}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                        >
                          Day view
                        </a>
                        <a
                          onClick={() => setSelectedView("week")}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1"
                        >
                          Week view
                        </a>
                        <a
                          onClick={() => setSelectedView("month")}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2"
                        >
                          Month view
                        </a>
                        <a
                          onClick={() => setSelectedView("year")}
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-3"
                        >
                          Year view
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {!showEventForm && (
                <button
                  type="button"
                  onClick={() => setShowEventForm(true)}
                  className="ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add event
                </button>
              )}
            </div>
            <div className="relative ml-6 md:hidden">
              <button
                type="button"
                className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
                id="menu-0-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </button>

              <div
                className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-0-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-0"
                  >
                    Create event
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-1"
                  >
                    Go to today
                  </a>
                </div>
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-2"
                  >
                    Day view
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-3"
                  >
                    Week view
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-4"
                  >
                    Month view
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-0-item-5"
                  >
                    Year view
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showEventForm && <AddEvent showHide={setShowEventForm} />}
    </>
  );
};

export default CalendarMini;