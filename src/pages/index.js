import Img from 'gatsby-image';
import React, { PureComponent } from "react"
import { graphql, Link } from 'gatsby';

import heroVideoWebm from 'videos/homepage.webm';
import heroVideoMp4 from 'videos/homepage.mp4';

import { ArrowIcon, DownArrowIcon } from 'components/icons';
import { LenderCarousel } from 'components/lenders';
import { projectTypes } from 'constants/project-types';
import { ValueCalculatorForm } from 'components/form';
import { ArticleList } from "components/articles"

import './styles/homepage.scss';

const howItWorksTitles = [
  'Bank-ability score',
  'Compare funding options',
  'Customized costs, benefits, & ROI',
  'Connect to financial providers',
]

class Homepage extends PureComponent {
  constructor(props) {
    super(props)
  }

  

  render() {
    const {
      data: {
        howItWorksIcons: {
          edges: howItWorksIcons,
        },
        projectTypesIcons: {
          edges: projectTypesIcons
        },
        toolsIcons: {
          edges: toolIcons
        },
        allMarkdownRemark: {
          edges: allMarkdownRemark
        }
        
      }
    } = this.props;

    
    const articles = allMarkdownRemark.reduce((acc, {node}) => {
      const {
        html,
        frontmatter,
      } = node;
      const { tag } = frontmatter;
  
      if (!acc[tag]) {
        acc[tag] = [];
      }
  
      acc[tag].push({
        html,
        ...frontmatter,
      })
      return acc;
    }, {});
    articles.list = articles.pace
    const icons = projectTypesIcons.reduce((acc, { node: { name, childImageSharp } }) => {
      acc[name] = childImageSharp.fluid;
      return acc;
    }, {});

    const tools = toolIcons.reduce((acc, { node: { name, childImageSharp } }) => {
      acc[name] = childImageSharp.fluid;
      return acc;
    }, {});
    
    if (howItWorksIcons.length >= 3) {
      [howItWorksIcons[1], howItWorksIcons[2]] = [howItWorksIcons[2], howItWorksIcons[1]];
    }

  
    

    return (
      <div className="up-homepage">
        <section className="up-homepage__hero__container">
          <video autoPlay loop muted playsInline className="up-homepage__hero__video" preload="metadata">
            <source type="video/webm" src={`${heroVideoWebm}#t=0.1`} />
            <source type="video/mp4" src={`${heroVideoMp4}#t=0.1`} />
          </video>
          <div className="up-homepage__hero animate-container">
            <div className="up-homepage__hero__inner">
              <div className="up-homepage__hero__content">
                <div className="up-homepage__hero__title">
                  <div className="up-homepage__hero__left-bracket" />
                  <h1>
                    {/*<span className="transition-opacity">Resources for engineers to</span>
                    <span className="transition-opacity">always land project financing</span>*/}
                    <span className="transition-opacity">Your bridge between-2 </span>
                    <span className="transition-opacity">sustainability and finance</span>
                  </h1>
                  <div className="up-homepage__hero__right-bracket" />
                </div>
                <div className="up-homepage__hero__actions transition-opacity">
                 {/*  <a href="https://app.unety.io/requestdemo"
                    className="up-homepage__hero__cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Demo
                  </a> */}
                  <span className='decorate'>Supported over $175 million of funding into green buildings projects</span>
                </div>
                
              </div>
              
            </div>
          </div>
        </section>

        <section className="up-homepage__how-it-works animate-container">
          <div className="up-homepage__how-it-works__inner">
            <h2 className="up-homepage__how-it-works__title">
              <span>How it works</span>
              We give you the tools to get funded
            </h2>
            <p className="up-homepage__how-it-works__desc">Unety is committed to leveling the playing field by harnessing powerful proprietary technology, making it simple to use, and sharing it with sustainability professionals to fund their projects.</p>
            <div className="up-homepage__how-it-works__info">
              {howItWorksIcons.map(({ node }, i) => {
                return (
                  <div key={node.name} className="up-homepage__how-it-works__item transition-opacity">
                    <div className="up-homepage__how-it-works__item__content">
                      <div className="up-homepage__how-it-works__item__title" data-step={i + 1}>
                        {howItWorksTitles[i]}
                      </div>
                      <div className="up-homepage__how-it-works__item__image">
                        <img src={node.publicURL} alt={node.name} />
                      </div>
                      <DownArrowIcon className="up-homepage__how-it-works__item__arrow-down" />
                      <ArrowIcon className="up-homepage__how-it-works__item__arrow" />
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="up-homepage__how-it-works__content">
             {/* <div className="up-homepage__how-it-works__copy">
                <p className="transition-opacity">As the largest network of its kind in the U.S., Unety has the unique ability to connect you to all the resources you need to finance clean energy real estate projects. This guarantees a reduction in your utility bills; improves interior space quality or increases your property value; and grows your business, all while incorporating sustainable practices. The types of financing supported by Unety offer benefits that include:</p>
                <ul>
                  <li className="transition-opacity">Guaranteed utility savings</li>
                  <li className="transition-opacity">100% financing with fixed low rates</li>
                  <li className="transition-opacity">Fixed low utility or interest rates</li>
                  <li className="transition-opacity">Terms from 5 to 25 years</li>
                  <li className="transition-opacity">Funding from $50,000 to $5 million</li>
                  <li className="transition-opacity"> Zero money down with no payments for 6+ months</li>
                  <li className="transition-opacity">Non-recourse and no personal guarantee required</li>
                  <li className="transition-opacity">Protects your ability to borrower money in the future</li>
                </ul>
              </div>*/}
              <Link
              to="/about#bankability"
              className="up-homepage__tools__tool__cta center-link"
            >
              Learn more
            </Link>
            </div>
          </div>
        </section>

        <section className="up-logo-list">
          <div className="up-logo-list__inner">
            <h2 className="up-logo-list__title">
              <span>Fund your project</span>
              <div>Trusted by leaders at the intersection of sustainability and finance</div>
           </h2>
            <LenderCarousel />
          </div>
        </section>

        {/*------------- Article Section ----------------*/}
        <section className="case-study">
        <div className="blocks pt-80">
        <h2 className="up-logo-list__title mb-50">
       <div className='fontd '>Case Study – ThinkBox & Vesta</div>
        <span>Vesta Corp. needed $30mm of funding for a portfolio of 14 projects in 14
        cities being developed by ThinkBox. ThinkBox used Unety to help Vesta source, compare,
        understand, and decide on funding options – all delivered in 48 hours.</span>
        </h2>

        <img src="/case-study.jpg"/>
 
        
        </div>
        
        
        </section>
        {/*------------- Article Section ----------------*/}

        <section className="up-homepage__project-types animate-container" data-offset="1000">
          <div className="up-homepage__project-types__inner">
            <h2 className="up-homepage__project-types__title transition-opacity">
              <span>Tools for any clean energy professional</span>
              Here are some of the supported project types
            </h2>
            <div className="up-homepage__project-types__grid">
              {projectTypes.map(({ image, title, description }) => (
                <div key={title} className="up-homepage__project-types__item transition-opacity">
                  <div className="up-homepage__project-types__content">
                    <div className="up-homepage__project-types__subtitle">
                      {title}
                    </div>
                    <div className="up-homepage__project-types__image">
                      {icons[image] && <Img fluid={icons[image]} />}
                    </div>
                  </div>
                  <div className="up-homepage__project-types__description">
                    {description}
                  </div>
                </div>
              ))}
            </div>
            <div className="up-homepage__project-types__actions">
              <Link
                to="/resources"
                className="up-homepage__project-types__cta"
              >
                Learn about funding options
              </Link>
            </div>
          </div>
        </section>

        <section className="up-homepage__tools animate-container">
          <div className="up-homepage__tools__inner">
            <div className="up-homepage__tools__calculator">
              <ValueCalculatorForm />
            </div>
            <div className="up-homepage__tools__info">
              <h2 className="up-homepage__tools__title">
                <span>Financing insights for sustainability</span>
                Select the tool for you
              </h2>
              <div className="up-homepage__tools__breakdown">
                <div className="up-homepage__tools__tool">
                  <div className="up-homepage__tools__tool__content">
                    <div className="up-homepage__tools__tool__image">
                      <Img fluid={tools['the-apps']} />
                    </div>
                    <div className="up-homepage__tools__tool__copy">
                      <h3 className="up-homepage__tools__subtitle">
                        Tools for professionals
                      </h3>
                      <p>Our tools match properties and projects to types of financing, based on property owner qualifications, project conditions, and user preferences. Our tools automate business processes and improve productivity for salespeople, contractors, and lenders.</p>
                      <Link
                        to="/about#our-products"
                        className="up-homepage__tools__tool__cta"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<TestimonialBlock />*/}
      </div>
    )
  }
}

export const query = graphql`
    query {
        howItWorksIcons: allFile(
            filter: {
                extension: { regex: "/(svg)/" }
                relativeDirectory: { eq: "how-it-works" }
            }
            sort: {fields: name, order: ASC}
        ) {
            edges {
                node {
                    name
                    publicURL
                }
            }
        }
        lenderLogos: allFile(
            filter: {
                extension: { regex: "/(png|jpg|jpeg)/" }
                relativeDirectory: { eq: "lender-logos" }
            }
            sort: {fields: name, order: ASC}
        ) {
            edges {
                node {
                    name
                    publicURL
                }
            }
        }
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
        toolsIcons: allFile(
            filter: {
                extension: { regex: "/(jpg|png)/" }
                relativeDirectory: { eq: "tools" }
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
        allMarkdownRemark(
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
                subtitle
                featuredImage {
                    publicURL
                }
              }
            }
          }
        }
        
    }
`;

export default Homepage
