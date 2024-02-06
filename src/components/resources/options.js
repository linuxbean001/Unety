import React, { PureComponent } from 'react';
import { graphql, Link, StaticQuery } from "gatsby"

import './options.scss';

const query = graphql`
    query {
        options: allFile(
            filter: {
                extension: { regex: "/(jpg|png)/" }
                relativeDirectory: { eq: "financing" }
            }
        ) {
            edges {
                node {
                    name
                    childImageSharp {
                        fluid(maxWidth: 450) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

class ResourceOptions extends PureComponent {
  render() {
    return (
      <StaticQuery query={query} render={(data) => {
        const {
          onbill,
          pace,
          ppa
        } = data.options.edges.reduce((acc, {node}) => {
          acc[node.name] = node.childImageSharp.fluid;
          return acc;
        }, {})

        return (
          <section className="up-resource-options__options animate-container">
            <div className="up-resource-options__options__inner">
              <h2 className="up-resource-options__options__title transition-opacity">
                <span>Sustainable Financing</span>
                What are my funding options?
              </h2>
              <div className="up-resource-options__options__grid">
                <div className="up-resource-options__option transition-opacity">
                  <div className="up-resource-options__option__image">
                    <Link to="/resources/onbill">
                      {onbill && <img src={onbill.src} alt="OnBill" />}
                    </Link>
                  </div>
                  <div className="up-resource-options__option__content">
                    <div className="up-resource-options__option__title">
                      OnBill
                    </div>
                    <p className="up-resource-options__option__copy">
                      OnBill is a short-term contract that provides financing for qualifying renovation projects that reduce utility bills with no money down. Payments are made on your utility bill.
                    </p>
                    <Link to="/resources/onbill" className="up-resource-options__option__cta">Learn More</Link>
                  </div>
                </div>
                <div className="up-resource-options__option transition-opacity">
                  <div className="up-resource-options__option__image">
                    <Link to="/resources/pace">
                    {pace && <img src={pace.src} alt="PACE" />}
                    </Link>
                  </div>
                  <div className="up-resource-options__option__content">
                    <div className="up-resource-options__option__title">
                      PACE
                    </div>
                    <p className="up-resource-options__option__copy">
                      PACE is a long- or short-term contract that provides financing for qualifying renovations and new construction with no money down. Payments are made on your property tax bill.
                    </p>
                    <Link to="/resources/pace" className="up-resource-options__option__cta">Learn More</Link>
                  </div>
                </div>
                <div className="up-resource-options__option transition-opacity">
                  <div className="up-resource-options__option__image">
                    <Link to="/resources/ppa">
                      {ppa && <img src={ppa.src} alt="PPA" />}
                    </Link>
                  </div>
                  <div className="up-resource-options__option__content">
                    <div className="up-resource-options__option__title">
                      PPA
                    </div>
                    <p className="up-resource-options__option__copy">
                      PPA is a long-term contract that provides property owners with renewable energy. You are not charged for equipment or installation and you only pay for the energy use.
                    </p>
                    <Link to="/resources/ppa" className="up-resource-options__option__cta">Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }}>
      </StaticQuery>
    )
  }
}

export default ResourceOptions;
