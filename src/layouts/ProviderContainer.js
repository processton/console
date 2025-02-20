import * as React from 'react'
import SideBar from '../components/SideBar';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

const ProviderContainer = ({ pageContext, children }) => {
  
  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <div className="flex-1">{children}</div>
      </div>
      <div className="flex">
        <Footer />
      </div>
    </main>
  );
};

export default ProviderContainer
