import * as React from 'react'
import ApplicationBar from '../components/ApplicationBar';

const ApplicationContainer = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col h-screen">
      <ApplicationBar />
      <div className="flex flex-1 overflow-y-auto paragraph">{children}</div>
    </div>
  );
};

export default ApplicationContainer;
