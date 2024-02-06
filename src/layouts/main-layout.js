import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ReactTooltip from 'react-tooltip'

import SEO from 'components/helpers/seo'
import seoData from 'constants/seo';
import { Footer, Header } from 'components/global';
import { withLocation } from 'components/helpers';

import './main-layout.scss';

class MainLayout extends PureComponent {

  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    })
  };

  static defaultProps = {
    children: null
  };

  constructor(props) {
    super(props);

    this.handleBrowserScroll = this.handleBrowserScroll.bind(this);
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', this.handleBrowserScroll);
      this.handleBrowserScroll();
    }
  }

  componentWillUnmount() {
    if (typeof document !== 'undefined') {
      document.addEventListener('scroll', this.handleBrowserScroll);
    }
  }

  handleBrowserScroll() {
    if (typeof window !== 'undefined') {
      setImmediate(() => {
        const elems = Array.from(document.querySelectorAll('.animate-container'));
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
        const offset = window.innerHeight / 3

        elems.forEach((elem) => {
          const elemOffset = elem.getAttribute('data-offset');
          const _offset = elemOffset === null ? offset : parseFloat(elemOffset);
          const elemTop = elem.getBoundingClientRect().top + scrollTop - clientTop - offset;
          if (elemTop <= scrollTop + _offset) {
            elem.classList.add('animate-container--in');
          }
        })
      })
    }
  }

  render() {
    const {
      children,
      location: {
        pathname
      },
    } = this.props;

    this.handleBrowserScroll();

    return (
      <div className="rp-main-layout">
        <ReactTooltip
          multiline
          effect="solid"
          place="top"
          isCapture={false}
        />
        <SEO {...seoData[pathname] || {title: 'Unety'}} />
        <Header
          pathname={pathname}
        />
        <div className="rp-main-layout__content">
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withLocation(MainLayout);
