import * as React from 'react'
import ProviderContainer from './ProviderContainer';

const LayoutBuilder = ({ children }) => {
  return (
    <ProviderContainer>
      <div>{children}</div>
    </ProviderContainer>
  );
};

export default LayoutBuilder;
