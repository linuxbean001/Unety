import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import logo from '../../images/logo-white.png';
import { withLocation } from '../helpers';

import './header.scss';

const navItems = [
  {
    label: 'About',
    to: '/about#our-mission',
  },
  // {
  //   label: 'Team',
  //   to: '/about#meet-the-team',
  // },
  // {
  //   label: 'Products',
  //   to: '/about#our-products',
  // },
  {
    label: 'Resources',
    to: '/resources',
    children: [
      {
        label: 'PACE',
        to: '/resources/pace'
      },
      {
        label: 'OnBill',
        to: '/resources/onbill'
      },
      {
        label: 'PPA',
        to: '/resources/ppa'
      },
    ]
  }
]

class Header extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    }

    this.handlePageScroll = this.handlePageScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handlePageScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handlePageScroll);
  }

  handlePageScroll() {
    const { sticky } = this.state;

    if (!sticky && window.scrollY > 0) {
      this.setState(() => ({
        sticky: true
      }))
    }

    if (sticky && window.scrollY === 0) {
      this.setState(() => ({
        sticky: false
      }))
    }
  }

  render() {
    const {
      sticky
    } = this.state;

    const {
      location: {
        pathname
      }
    } = this.props;

    const fillHeader = pathname !== '/' && ['/articles/', '/coming-soon'].find((path) => pathname.indexOf(path) === 0);

    const headerClasses = classNames('up-header', {
      'up-header--stuck': sticky,
      'up-header--filled': sticky || fillHeader,
    })

    return (
      <header className={headerClasses}>
        <div className="up-header__inner">
          <div className="up-header__logo">
            <Link to="/">
              <img src={logo} alt="Unety"/>
            </Link>
          </div>
          <nav className="up-header__nav mt">
            <ul>
              {navItems.map(({label, to, children}, i) => {
                const linkClasses = classNames('up-header__nav__link', {
                  'up-header__nav__link--current': to === pathname,
                  'up-header__nav__link--has-children': children
                })
                return (
                  <li key={i}>
                    <Link className={linkClasses} to={to}>
                      {label}
                    </Link>
                    {children && (
                      <ul className="up-header__nav__sub-nav">
                        {children.map(({label, to}, i) => {
                          return (
                            <li key={i}>
                              <Link className="up-header__nav__link" to={to}>
                                {label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
              <li className="up-header__cta">
               {/*  <a
                  className="up-header__nav__cta"
                  href="https://app.unety.io/requestdemo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Get Demo
                </a> */}
                <a
                  className="up-header__nav__cta"
                  href="http://localhost:8000/requestdemo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Get Demo
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default withLocation(Header);
