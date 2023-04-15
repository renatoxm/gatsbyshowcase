import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'
import '../assets/scss/index.scss'

interface LayoutProps {
  dark?: boolean
  children?: React.ReactNode
}

// eslint-disable-next-line no-undef
const Layout = ({ children, dark }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop dark={dark} />
      </div>
      {/* End Back To Top */}
      <Footer />
    </>
  )
}

export default Layout
