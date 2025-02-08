import * as React from 'react'
import ApplicationBar from '../components/ApplicationBar';

const ApplicationContainer = ({ pageContext, children }) => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <ApplicationBar pageContext={pageContext} />
      <div className="flex flex-1 overflow-y-auto paragraph">
        {children}
      </div>
    </div>
  );
};

export default ApplicationContainer;
