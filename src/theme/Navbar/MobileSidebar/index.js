import React from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import { MobileMenuProvider } from './MobileMenuContext';

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar();
  useLockBodyScroll(mobileSidebar.shown);

  // Disable secondary menu completely - don't pass it to Layout
  return (
    <MobileMenuProvider>
      <NavbarMobileSidebarLayout
        header={<NavbarMobileSidebarHeader />}
        primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
        secondaryMenu={null}
      />
    </MobileMenuProvider>
  );
}
