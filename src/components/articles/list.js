import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'gatsby';

import './list.scss';

const truncateHTML = ({html, words = 50, ellipsis = '...'}) => {
  if (typeof document === 'undefined') {
    return html;
  }
  const d = document.createElement( 'div' );
  d.innerHTML = html;
  const contentParts = d.textContent.split(' ');

  return contentParts < words
    ? contentParts.join(' ')
    : contentParts.slice(0, words).join(' ') + ellipsis;
}

class List extends PureComponent {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      html: PropTypes.string,
      path: PropTypes.string,
      tag: PropTypes.string,
      title: PropTypes.string,
    })),
    subTitle: PropTypes.string,
    tag: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    list: [],
  };

  render() {

    const {
      list,
      subTitle,
      title
    } = this.props;

    return (
      <section className="up-article-list">
        <div className="up-article-list__inner">
          <h2 className="up-article-list__title">
            {subTitle && <span>{subTitle}</span>}
            {title}
          </h2>

          <div className="up-article-list__list">
            {list.map(({html, featuredImage, path, title}) => (
              <article key={title} className="up-article-list__item">
                <Link to={path} className="up-article-list__article-title">
                  {title}
                </Link>
                {featuredImage && (
                  <Link to={path} className="up-article-list__image">
                    <img src={featuredImage.publicURL} alt=""/>
                  </Link>
                )}
                  <div className="up-article-list__copy">
                    {truncateHTML({html})}
                  </div>
                  <Link className="up-article-list__cta" to={path}>Read more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default List;
