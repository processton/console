import * as React from 'react'
import LayoutBuilder from "../layouts/LayoutBuilder";
import Seo from '../components/seo'
import TenantContainer from '../layouts/TenantContainer';
import { Link, navigate } from "gatsby";
import { generateAppUrl } from '../utils/layour_helper';

const IndexPage = ({ pageContext }) => {
    if (pageContext?.toPath){
      navigate(pageContext?.toPath);
    }
    return (
      <LayoutBuilder pageContext={pageContext}>
        <TenantContainer pageContext={pageContext}>
          <div className="container relative z-40 mx-auto p-12 ">
            
          </div>
        </TenantContainer>
      </LayoutBuilder>
    );
};

export const Head = ({ pageContext }) => <Seo pageContext={pageContext} />;

export default IndexPage
