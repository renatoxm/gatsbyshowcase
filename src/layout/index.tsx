import React, { ReactNode } from "react"
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../assets/scss/index.scss'

interface LayoutProps {
  dark?: boolean;
  children?: ReactNode;
}

const Layout = ({ children, dark }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop dark={dark} />
      </div>
      {/* End Back To Top */}
      <Footer />
    </>
  );
};

export default Layout;
