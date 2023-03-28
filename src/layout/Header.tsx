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
                      <a href="#">Sub link 1</a>
                    </li>
                    <li>
                      <a href="#">Sub link 2</a>
                    </li>
                    <li>
                      <a href="#">Sub link 3</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="#">Services</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Service 1</a>
                    </li>
                    <li>
                      <a href="#">Service 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">About</a>
                </li>

                <li className="has-droupdown">
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Sub link 1</a>
                    </li>
                    <li>
                      <a href="#">Sub link 2</a>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <a href="#">Blocks</a>
                  <ul className="submenu">
                    <li>
                      <a href="#">Sub link 1</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="header-btn">
              <a className="rn-btn" href="#">
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
