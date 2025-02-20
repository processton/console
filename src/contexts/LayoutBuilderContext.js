import React, { createContext, useState, useEffect } from "react";

const LayoutBuilderContext = createContext()

export const LayoutBuilderProvider = ({ children }) => {

  const [context, setContext] = useState();
  
  const [activeLink, setActiveLink] = useState();

  const [availableApps, setAvailableApps] = useState([]);
  
  useEffect(() => {
    if(context?.tenant){
      let apps = [...context?.tenant?.defaultapps];

      Array.prototype.push.apply(apps, context?.tenant?.applications);

      setAvailableApps(apps);
    }
  }, [context]);

  return (
    <LayoutBuilderContext.Provider
      value={{ context, setContext, activeLink, setActiveLink, availableApps }}
    >
      {children}
    </LayoutBuilderContext.Provider>
  );
};

export default LayoutBuilderContext;