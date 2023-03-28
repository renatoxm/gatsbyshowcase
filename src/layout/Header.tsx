import React, { Component } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

interface HeaderProps {
  logo?: string;
  color?: string;
}

class Header extends Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
    const isBrowser = typeof window !== "undefined";
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    
    if(isBrowser){
      window.addEventListener('load', function () {
        console.log('All assets are loaded');
      });
    }
  }

  
  menuTrigger() {
    if (typeof window === "undefined") {
      return;
    }
    document.querySelector('.header-wrapper')?.classList.toggle('menu-open');
  }

  CLoseMenuTrigger() {
    if (typeof window === "undefined") {
      return;
    }
    document.querySelector('.header-wrapper')?.classList.remove('menu-open');
  }

  render() {
    if (typeof window !== "undefined") {
      const elements = document.querySelectorAll(
        '.has-droupdown > a'
      ) as NodeListOf<HTMLElement>;
      for (const i in elements) {
        // if (elements.hasOwnProperty(i)) {
        if (Object.prototype.hasOwnProperty.call(elements, i)) {
          elements[i].onclick = () => {
            elements[i].parentElement
              ?.querySelector('.submenu')
              ?.classList.toggle('active');
            elements[i].classList.toggle('open');
          };
        }
      }
    }
    const { logo, color = 'default-color' } = this.props;
    let logoUrl;
    if (logo === 'light') {
      logoUrl = <img src="/images/logo/logo-light.png" alt="Digital Agency" />;
    } else if (logo === 'dark') {
      logoUrl = <img src="/images/logo/logo-dark.png" alt="Digital Agency" />;
    } else if (logo === 'symbol-dark') {
      logoUrl = (
        <img src="/images/logo/logo-symbol-dark.png" alt="Digital Agency" />
      );
    } else if (logo === 'symbol-light') {
      logoUrl = (
        <img src="/images/logo/logo-symbol-light.png" alt="Digital Agency" />
      );
    } else {
      logoUrl = <img src="/images/logo/logo.png" alt="Digital Agency" />;
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <a href="#">Home</a>
                  <ul className="submenu">
                    <li>
                      <a href="/main-demo">Main Demo</a>
                    </li>
                    <li>
                      <a href="/dark-main-demo">Main Demo Dark</a>
                    </li>
                    <li>
                      <a href="/creative-agency">Creative Agency</a>
                    </li>
                    <li>
                      <a href="/creative-landing">Creative One Page</a>
                    </li>
                    <li>
                      <a href="/creative-portfolio">Creative Portfolio</a>
                    </li>
                    <li>
                      <a href="/personal-portfolio">Personal Portfolio</a>
                    </li>
                    <li>
                      <a href="/portfolio-landing">Portfolio One Page</a>
                    </li>
                    <li>
                      <a href="/dark-portfolio-landing">
                        Portfolio One Page 02
                      </a>
                    </li>
                    <li>
                      <a href="/digital-agency">Digital Agency</a>
                    </li>
                    <li>
                      <a href="/startup">Startup</a>
                    </li>
                    <li>
                      <a href="/paralax">Paralax</a>
                    </li>
                    <li>
                      <a href="/home-portfolio">Minimal Portfolio</a>
                    </li>
                    <li>
                      <a href="/business">Business</a>
                    </li>
                    <li>
                      <a href="/home-particles">Home Particles</a>
                    </li>
                    <li>
                      <a href="/studio-agency">Studio Agency</a>
                    </li>
                    <li>
                      <a href="/designer-portfolio">Designer Portfolio</a>
                    </li>
                    <li>
                      <a href="/interactive-agency">Interactive Agency</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="/service">Service</a>
                  <ul className="submenu">
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/service-details">Service Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>

                <li className="has-droupdown">
                  <a href="#pages">Pages</a>
                  <ul className="submenu">
                    <li>
                      <a href="/blog">Blog List</a>
                    </li>
                    <li>
                      <a href="/blog-details">Blog Details</a>
                    </li>
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/service-details">Service Details</a>
                    </li>
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/portfolio-details">Portfolio Details</a>
                    </li>
                    <li>
                      <a href="/404">404</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="#">Blocks</a>
                  <ul className="submenu">
                    <li>
                      <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="/team">Team</a>
                    </li>
                    <li>
                      <a href="/service">Service</a>
                    </li>
                    <li>
                      <a href="/video-popup">Video Popup</a>
                    </li>
                    <li>
                      <a href="/progressbar">Progressbar</a>
                    </li>
                    <li>
                      <a href="/gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="/counters">Counters</a>
                    </li>
                    <li>
                      <a href="/blog">Blog List</a>
                    </li>
                    <li>
                      <a href="/pricing">Pricing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <a className="rn-btn" href="/pricing">
                <span>buy now</span>
              </a>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
