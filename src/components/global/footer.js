import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import logo from 'images/logo-white.png';
import {
  LinkedinIcon,
} from 'components/icons';

import './footer.scss';

class Footer extends PureComponent {
  render() {
    return (
      <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        social {
                          facebook
                          instagram
                          linkedin
                          twitter
                        }
                    }
                }
            }
        `}
        render={(data) => {
          const {
            site: {
              siteMetadata: {
                social: {
                  linkedin,
                }
              }
            }
          } = data;
          return (
            <div className="rp-footer">
              <div className="rp-footer__inner">
                <div className="rp-footer__name">
                  <div className="rp-footer__logo">
                    <img src={logo} alt="Unety"/>
                  </div>
                  <div className="rp-footer__copyright">
                    &copy; {new Date().getFullYear()}
                  </div>
                </div>
                <div className="rp-footer__contact">
                  <div className="rp-footer__email">
                    <a href="mailto:info@unety.io" rel="noopener noreferrer" target="_blank">
                      info@unety.io
                    </a>
                  </div>
                  <div className="rp-footer__social">
                    {/* <a href={`https://www.facebook.com/${facebook}`} rel="noopener noreferrer" target="_blank">
                      <FacebookIcon />
                    </a> */}
                    {/* <a href={`https://twitter.com/${twitter}`} rel="noopener noreferrer" target="_blank">
                      <TwitterIcon />
                    </a> */}
                    <a href={`https://www.linkedin.com/company/${linkedin}`} rel="noopener noreferrer" target="_blank">
                      <LinkedinIcon />
                    </a>
                    {/* <a href={`https://www.instagram.com/${instagram}`} rel="noopener noreferrer" target="_blank">
                      <InstagramIcon />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          )
        } }
      />
    )
  }
}

export default Footer;
