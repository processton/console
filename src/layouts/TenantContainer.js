import * as React from 'react'
import SideBar from '../components/SideBar';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

const TenantContainer = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col h-screen shadow-2xl shadow-inner">
      <HeaderBar />
      <div className="flex flex-1 paragraph">
        {children}
      </div>
    </div>
  );
};

export default TenantContainer;
