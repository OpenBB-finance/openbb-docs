import React, { createContext, useContext, useState, useEffect } from 'react';
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

  // Determine which sections should be initially expanded based on current location
  const getInitialExpandedSections = () => {
    if (location.pathname.startsWith("/workspace")) return { workspace: true, odp: false };
    if (location.pathname.startsWith("/desktop") ||
        location.pathname.startsWith("/python") ||
        location.pathname.startsWith("/cli")) return { workspace: false, odp: true };
    return { workspace: false, odp: false };
  };

  const [expandedSections, setExpandedSections] = useState(getInitialExpandedSections());

  // Update expanded sections when location changes
  useEffect(() => {
    setExpandedSections(getInitialExpandedSections());
  }, [location.pathname]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <MobileMenuContext.Provider value={{ expandedSections, toggleSection }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
