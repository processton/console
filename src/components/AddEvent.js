import * as React from 'react'
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const AddEvent = ({ showHide }) => {
  return (
    <div className="z-9 fixed w-72 third-sidebar flex-col space-y-6 bg-white p-2 pb-0 border-r shadow-md">
      <div className="z-9 items-center justify-between p-2">
        <div className="p-1 flex items-end w-full">
          <span className="text-md">Add new event</span>
        </div>
        <form className="p-2">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-col">
              <label>Title</label>
              <input type="text" className="border rounded-md " />
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Agenda</label>
              <textarea className="border rounded-md " />
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Date & Time</label>
              <input type="text" className="border rounded-md " />
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Participents</label>
              <textarea className="border rounded-md " />
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Optional Attendies</label>
              <textarea className="border rounded-md " />
            </div>
            <div className="col-span-12 flex flex-col">
              <label>
                <input type="checkbox" className="border rounded-md mr-2" />
                Recurring
              </label>
            </div>
            <div className="col-span-12 flex flex-col">
              <label>Until</label>
              <select className="border rounded-md mr-2"></select>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-6">
            <button
              type="button"
              onClick={() => showHide(false)}
              className="col-span-6 rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => showHide(false)}
              className="col-span-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;