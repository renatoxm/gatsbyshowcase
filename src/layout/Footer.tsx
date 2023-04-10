import * as React from 'react'
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa'
import { Link } from 'gatsby'

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/' },
  { Social: <FaTwitter />, link: 'https://twitter.com/' },
]

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner">
                  <span>Ready To Do This?</span>
                  <h2>
                    Let's get <br /> to work
                  </h2>
                  <a
                    className="rn-button-style--2"
                    href="https://renato.digital"
                    target="_blank"
                  >
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right" data-black-overlay="6">
                <div className="row">
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>Quick Links</h4>
                      <ul className="ft-link">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/posts">Posts</Link>
                        </li>
                        <li>
                          <a href="https://renato.digital" target="_blank">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End Single Widget  */}
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                    <div className="footer-link">
                      <h4>Say Hello</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="mailto:admin@example.com">
                            admin@example.com
                          </a>
                        </li>
                        <li>
                          <a href="mailto:hr@example.com">hr@example.com</a>
                        </li>
                      </ul>

                      <div className="social-share-inner">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                          {SocialShare.map((val, i) => (
                            <li key={i}>
                              <a href={`${val.link}`}>{val.Social}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Widget  */}

                  <div className="col-lg-12">
                    <div className="copyright-text">
                      <p>
                        This is a Showcase Project from{' '}
                        <a href="https://renato.digital" target="_blank">
                          Renato Nabinger.
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
