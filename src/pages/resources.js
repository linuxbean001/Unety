import React, { PureComponent } from "react"
import { graphql } from 'gatsby';

import heroVideoWebm from "videos/homepage-hero.webm"
import heroVideoMp4 from "videos/homepage-hero.mp4"

import { ArticleList } from 'components/articles';
import { ResourceOptions } from 'components/resources';

import './styles/resources.scss';

class AboutPage extends PureComponent {
  render() {
    const articles = this.props.data.articles.edges.map(({node}) => {
      return {
        html: node.html,
        ...node.frontmatter
      }
    });

    return (
      <div className="up-resource-page">

        <section className="up-resource-page__hero__container animate-container" data-offset="1000">
          <video autoPlay loop muted playsInline className="up-resource-page__hero__video" preload="metadata">
            <source type="video/webm" src={`${heroVideoWebm}#t=0.1`} />
            <source type="video/mp4" src={`${heroVideoMp4}#t=0.1`} />
          </video>
          <div className="up-resource-page__hero">
            <div className="up-resource-page__hero__inner">
              <div className="up-resource-page__hero__content">
                <div className="up-resource-page__hero__title">
                  <h1 className="transition-opacity">
                    Power your profits with sustainable finance
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ResourceOptions />
        <ArticleList
          list={articles}
          subTitle="Articles"
          title="Get in-depth knowledge"
        />
      </div>
    )
  }
}

export const query = graphql`
    {
      articles: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              tag
              title
              featuredImage {
                  publicURL
              }
            }
          }
        }
      }
    }
  `

export default AboutPage
