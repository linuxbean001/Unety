import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"
import { projectTypes } from "../../../constants/project-types"

const query = graphql`
  query {
      projectTypesIcons: allFile(
          filter: {
              extension: { regex: "/(jpg|png)/" }
              relativeDirectory: { eq: "project-types" }
          }
      ) {
          edges {
              node {
                  name
                  childImageSharp {
                      fluid(maxWidth: 150) {
                          ...GatsbyImageSharpFluid
                      }
                  }
              }
          }
      }
  }
`;

const NeedFundingProjectTypes = () => {
  const data = useStaticQuery(query);

  const {
    projectTypesIcons: {
      edges: projectTypesIcons
    },
  } = data;

  const icons = projectTypesIcons.reduce((acc, { node: { name, childImageSharp } }) => {
    acc[name] = childImageSharp.fluid;
    return acc;
  }, {});

  return (
    <section className="contractor-signup__project-types">
      <div className="contractor-signup__project-types__inner">
        <h2 className="contractor-signup__project-types__title">
          <span>Tools for any clean energy professional</span>
            Here are some of the supported project types
          </h2>
        <div className="contractor-signup__project-types__grid">
          {projectTypes.map(({ image, title, description }) => (
            <div key={title} className="contractor-signup__project-types__item">
              <div className="contractor-signup__project-types__content">
                <div className="contractor-signup__project-types__subtitle">
                  {title}
                </div>
                <div className="contractor-signup__project-types__image">
                  {icons[image] && <Img fluid={icons[image]} />}
                </div>
              </div>
              <div className="contractor-signup__project-types__description">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default NeedFundingProjectTypes;
