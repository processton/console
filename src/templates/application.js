import * as React from 'react'
import { useState } from "react";
import LayoutBuilder from "../layouts/LayoutBuilder";
import Seo from '../components/seo'
import TenantContainer from '../layouts/TenantContainer';
import ApplicationContainer from '../layouts/ApplicationContainer';
import Iframe from '../components/Iframe';
import { generateLinkUrlWithDomain } from '../utils/layour_helper';

const IndexPage = ({ pageContext }) => {

  const [iframeSrc, setIframeSrc] = useState(generateLinkUrlWithDomain(pageContext ));
  
  return (
    <LayoutBuilder pageContext={pageContext}>
      <TenantContainer pageContext={pageContext}>
        <ApplicationContainer pageContext={pageContext}>
          <Iframe url={iframeSrc} setUrl={setIframeSrc} />
        </ApplicationContainer>
      </TenantContainer>
    </LayoutBuilder>
  );
};

export const Head = ({ pageContext }) => <Seo pageContext={pageContext} />;

export default IndexPage
