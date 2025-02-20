import * as React from 'react'
import { useState, useEffect, useContext } from "react";
import LayoutBuilderContext from "../contexts/LayoutBuilderContext";
import Seo from '../components/seo'
import TenantContainer from '../layouts/TenantContainer';
import ApplicationContainer from '../layouts/ApplicationContainer';
import Iframe from '../components/Iframe';
import { generateLinkUrlWithDomain } from '../utils/layour_helper';
import LayoutBuilder from '../layouts/LayoutBuilder';


const IndexPage = ({ pageContext }) => {

  const { context, setContext } = useContext(LayoutBuilderContext);

  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    setContext(pageContext);
    setIframeSrc(generateLinkUrlWithDomain(pageContext));
  })

  useEffect(() => {
    console.log('iframeSrc', iframeSrc);
  },[iframeSrc]);

  
  
  return (
    <LayoutBuilder>
      <TenantContainer>
        <ApplicationContainer pageContext={pageContext}>
          <Iframe url={iframeSrc} setUrl={setIframeSrc} />
        </ApplicationContainer>
      </TenantContainer>
    </LayoutBuilder>
  );
};

export const Head = ({ pageContext }) => <Seo pageContext={pageContext} />;

export default IndexPage
