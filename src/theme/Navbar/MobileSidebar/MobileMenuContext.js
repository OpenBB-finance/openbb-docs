import React, { createContext, useContext, useState } from 'react';
import { useLocation } from '@docusaurus/router';

const MobileMenuContext = createContext();

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider');
  }
  return context;
}

export function MobileMenuProvider({ children }) {
  const location = useLocation();

  // Determine initial active tab based on current location
  const getInitialTab = () => {
    if (location.pathname.startsWith("/workspace")) return "workspace";
    if (location.pathname.startsWith("/desktop") ||
        location.pathname.startsWith("/python") ||
        location.pathname.startsWith("/cli")) return "odp";
    return "home";
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());

  return (
    <MobileMenuContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
