import classNames from 'classnames';
import format from 'date-fns/format';
import React from "react"
import { graphql } from "gatsby"

import { ArticleList } from 'components/articles';

import './article.scss';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const { relatedArticles } = pageContext

  const _relatedArticles = relatedArticles.filter(({title}) => title !== frontmatter.title )
  const hasRelatedArticles = Array.isArray(_relatedArticles) && _relatedArticles.length > 0;

  const articleClasses = classNames('up-articles__article', {
    'up-articles__article--no-related': !hasRelatedArticles,
  })
  return (
    <div className="up-articles">
      <div className="up-articles__inner">
        <article className={articleClasses}>
            <div className="up-articles__header">
              <h1 className="up-articles__title">
                {frontmatter.title}
              </h1>
              <div className="up-articles__date">
                {format(new Date(frontmatter.date), 'MMMM yyyy')}
              </div>
            </div>
            {frontmatter.featuredImage && (
              <div className="up-articles__image">
                <img src={frontmatter.featuredImage.publicURL} alt=""/>
              </div>
            )}
            {frontmatter.subtitle && (
              <h2 className="up-articles__subtitle">
                {frontmatter.subtitle}
              </h2>
            )}
            <div
              className="up-articles__content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
        </article>
        {hasRelatedArticles && (
          <ArticleList
            list={_relatedArticles}
            subTitle="Related Articles"
            title="See other similar articles"
          />
        )}
      </div>
    </div>
  )
}
export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        featuredImage {
            publicURL
        }
      }
    }
  }
`
