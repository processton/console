import * as React from 'react'
import {useState, useEffect} from "react";
import LayoutBuilder from "../layouts/LayoutBuilder";
import Seo from '../components/seo'
import TenantContainer from '../layouts/TenantContainer';
import { Link } from "gatsby";
import { generateAppUrl } from '../utils/layour_helper';

const IndexPage = ({ pageContext }) => {
  
  const [availableApps, setAvailableApps] = useState([]);

  useEffect(() => {
    let apps = [...pageContext?.tenant?.defaultapps];
    Array.prototype.push.apply(apps, pageContext?.tenant?.applications);
    console.dir(pageContext?.tenant);
    setAvailableApps(apps)
  },[pageContext])


  
  return (
    <LayoutBuilder pageContext={pageContext}>
      <TenantContainer pageContext={pageContext}>
        <div className="container relative z-5 mx-auto p-12 ">
          <div className="flex flex-wrap justify-start mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
            {availableApps.map((app) => (
              <Link
                to={generateAppUrl(pageContext, app.slug)}
                className="block w-1/2 text-left lg:w-1/4 border rounded-md hover:shadow-lg p-4"
              >
                <div>
                  <img
                    src="https://redpixelthemes.com/assets/images/icon-portfolio-green.svg"
                    className="block"
                  />

                  <p className="pt-2 text-sm font-medium capitalize font-body lg:text-lg md:text-base md:pt-4">
                    {app.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </TenantContainer>
    </LayoutBuilder>
  );
};

export const Head = ({ pageContext }) => <Seo pageContext={pageContext} />;

export default IndexPage
