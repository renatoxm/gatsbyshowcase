import * as React from 'react'
import { FiX, FiMenu } from 'react-icons/fi'
import { Link } from 'gatsby'
import { datadogLogs } from '@datadog/browser-logs'

interface HeaderProps {
  logo?: string
  color?: string
}

class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props)
    const isBrowser = typeof window !== `undefined`
    this.menuTrigger = this.menuTrigger.bind(this)
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this)

    if (isBrowser) {
      window.addEventListener(`load`, function () {
        console.log(`All assets are loaded`)
        datadogLogs.logger.info(`Hello World!`)
      })
    }
  }

  menuTrigger() {
    if (typeof window === `undefined`) {
      return
    }
    document.querySelector(`.header-wrapper`)?.classList.toggle(`menu-open`)
  }

  CLoseMenuTrigger() {
    if (typeof window === `undefined`) {
      return
    }
    document.querySelector(`.header-wrapper`)?.classList.remove(`menu-open`)
  }

  render() {
    if (typeof window !== `undefined`) {
      const elements = document.querySelectorAll(
        `.has-droupdown > a`
        // eslint-disable-next-line no-undef
      ) as NodeListOf<HTMLElement>
      for (const i in elements) {
        // if (elements.hasOwnProperty(i)) {
        if (Object.prototype.hasOwnProperty.call(elements, i)) {
          elements[i].onclick = () => {
            elements[i].parentElement
              ?.querySelector(`.submenu`)
              ?.classList.toggle(`active`)
            elements[i].classList.toggle(`open`)
          }
        }
      }
    }
    const { logo, color = `default-color` } = this.props
    let logoUrl
    if (logo === `light`) {
      logoUrl = <img src="/images/logo/logo-light.png" alt="Gatsblog" />
    } else if (logo === `dark`) {
      logoUrl = <img src="/images/logo/logo-dark.png" alt="Gatsblog" />
    } else if (logo === `symbol-dark`) {
      logoUrl = <img src="/images/logo/logo-symbol-dark.png" alt="Gatsblog" />
    } else if (logo === `symbol-light`) {
      logoUrl = <img src="/images/logo/logo-symbol-light.png" alt="Gatsblog" />
    } else {
      logoUrl = <img src="/images/logo/logo.png" alt="Gatsblog" />
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <Link to="/">{logoUrl}</Link>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li className="has-droupdown">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
              </ul>
            </nav>
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
    )
  }
}

export default Header
