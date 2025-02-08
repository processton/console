import * as React from 'react'
import ProviderContainer from './ProviderContainer';

const LayoutBuilder = ({ pageContext, children }) => {
  return (
    <ProviderContainer pageContext={pageContext}>
      <div>{children}</div>
    </ProviderContainer>
  );
};

export default LayoutBuilder;
