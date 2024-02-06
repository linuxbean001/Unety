import ModalVideo from 'react-modal-video'
import _ from 'lodash';
import React, { PureComponent } from "react"
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import { LenderProductDisplay } from 'components/products';
import TeamMember from 'components/about/TeamMember';
import heroVideoWebm from "videos/homepage-hero.webm"
import heroVideoMp4 from "videos/homepage-hero.mp4"
import { contractorProductFeatures, lenderProductFeatures } from 'constants/product-info.js';

import './styles/about.scss';

const TEAM_MEMBERS = [{
  key: 'parker-white',
  name: 'Parker White',
  title: 'CEO',
  bio: 'Parker White oversees corporate and growth strategies, financing and resources, and operations as the CEO. Most recently, Parker was the Director of Commercial Real Estate Investment at Hannon Armstrong Capital. Before joining Hannon, Parker led project development teams at Jones Lang LaSalle as head of Energy and Sustainability Services for Greater China and then as Vice President of Intelligent Building Solutions for North America.',
  angelListUrl: 'https://angel.co/parker-white-2',
  linkedInUrl: 'https://www.linkedin.com/in/jparkerwhite/',
}, {
  key: 'justin-pincar',
  name: 'Justin Pincar',
  title: 'CTO',
  bio: 'Justin Pincar leads Unety\'s technical and product vision as CTO. Based in Silicon Valley since 2009, Justin has worked with global leaders like Google, Facebook, and Boeing to manage their mission-critical services handling billions of impressions per day. This experience bringing ideas to life at every stage of development allowed Justin to learn technical architecture and operational strategies that have been critical to the creation of Unety.',
  linkedInUrl: 'https://www.linkedin.com/in/justinpincar/',
}];

class AboutPage extends PureComponent {

  state = {
    videoId: ''
  }

  setVideoId(videoId) {
    this.setState(() => ({
      videoId,
    }))
  }

  render() {
    const {
      videoId
    } = this.state;

    const {
      ourMission,
      ourStory,
      team,
    } = this.props.data;

    const headshots = team.edges.reduce((acc, {node}) => {
      const {
        name,
        childImageSharp : {
          fluid
        }
      } = node;
      acc[name] = fluid;
      return acc;
    }, {})

    return (
      <div className="up-about-page">

        <ModalVideo
          channel='youtube'
          isOpen={Boolean(videoId)}
          videoId={videoId}
          onClose={this.setVideoId.bind(this, null)}
        />

        <section className="up-about-page__hero__container animate-container" id="our-mission">
          <video autoPlay loop muted playsInline className="up-about-page__hero__video" preload="metadata">
            <source type="video/webm" src={`${heroVideoWebm}#t=0.1`} />
            <source type="video/mp4" src={`${heroVideoMp4}#t=0.1`} />
          </video>
          <div className="up-about-page__hero">
            <div className="up-about-page__hero__inner">
              <div className="up-about-page__hero__content">
                <div className="up-about-page__hero__title">
                  <h1 className="transition-opacity">
                    Making clean energy<br/> profitable for you
                  </h1>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section className="up-about-page__mission" data-offset="1000">
          <div className="up-about-page__mission__inner">
            <h2 className="up-about-page__mission__title">
    {/*  <span>Our Mission</span>
              Helping you and the environment*/}
              <span>Our Story</span>
              Where we came from
            </h2>
            <div className="up-about-page__mission__grid">
              <div className="up-about-page__mission__content">
                <p>When I originally founded Unety, I made it our mission to level the playing field of an otherwise biased system that favored big corporations with special access to financial tools that uniquely made green building projects accretive.</p>
                <p>I was raised in a small community, solely made up of mom-and-pop businesses, whose owners largely tried to live their values while eking out a living. Limited local opportunities led me to leave my hometown, and my journey shaped Unety's mission. I moved to New York City, and for 10 years my career focused on greening over 10 million square feet of commercial properties around the world. In that time, I witnessed a paradigm take shape: sustainability resources increasingly flowed to large players, while small businesses, like the ones in my hometown, were left stranded.
                </p>
              </div>
              <div className="up-about-page__mission__image">
                <Img fluid={ourMission.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div id="our-story" />
        </section>

        <section className="up-about-page__story animate-container">
          <div className="up-about-page__story__inner">
            <h2 className="up-about-page__story__title transition-opacity">
           {/*   <span>Our Story</span>
              Where we came from  */}
            </h2>
            <div className="up-about-page__mission__grid transition-slide-in">
              <div className="up-about-page__story__image">
                <Img fluid={ourStory.childImageSharp.fluid} />
              </div>
              <div className="up-about-page__story__content">
                <p>Unety was born from this disparity. We built tools that automated the most difficult aspects of funding sustainability; raised venture capital; went to market; and helped 330 small commercial properties complete over $176 million of green building retrofits in less than six months. Unfortunately, Unety did not survive the COVID pandemic.</p>
                <p>I have left this website up so that it can serve as a playbook for how we achieved our success in the hope that it proves useful for anyone else looking to solve the same problem. If that happens to be you, please reach out to the email below.</p>
              </div>
            </div>
          </div>
          <div id="our-products" />
        </section>

        <div>
          <LenderProductDisplay
            productFeatures={lenderProductFeatures}
          />
          <div id="contractor-product" />
          <div className='mt1'>
          <span>Tools for Lenders section and Tools for Contractors section</span>
          <br/>
          <br/>
          <iframe src="https://drive.google.com/file/d/1WBzRepg9FKFWsdzxiy09ZCpfYefpH5qe/preview" width="1140" height="680" allow="autoplay"></iframe>
          </div>
        </div>

        <div className="up-about-page__contractor-product" style={{marginBottom:"4rem"}}>
          <LenderProductDisplay
            reverseLayout
            productFeatures={contractorProductFeatures}
          />
          <div id="meet-the-team" />
          <div className='mt2'>
          <span>Tools for ESG Professionals</span>
          <br/>
          <iframe src="https://drive.google.com/file/d/14rxkBxa6s8NNgo7x5JCDOlS_WWsglsZe/preview" width="1140" height="680" allow="autoplay"></iframe>
          </div>
          <div className='mt3'>
          <iframe src="https://drive.google.com/file/d/1knc0GILg_916_E2vQk_WlgV_DTjYkK7L/preview" width="1140" height="680" allow="autoplay"></iframe>
          </div>
        </div>

       {/* <section className="up-about-page__team">
           <div className="up-about-page__team__inner">
            <h2 className="up-about-page__team__title">
              <span>Who we are</span>
              Meet the founders
            </h2>
            <div className="up-about-page__team__grid">
              {TEAM_MEMBERS.map((teamMember) => {
                const teamMemberProps = _.pick(teamMember, ['key', 'name', 'title', 'bio', 'angelListUrl', 'linkedInUrl']);
                const headshotUrl = headshots[teamMemberProps.key];
                return (
                  <TeamMember {...teamMemberProps} headshotUrl={headshotUrl} />
                );
              })}
            </div>
          </div> 
        </section>*/}

      </div>
    );
  }
}

export const query = graphql`
    query {
        ourMission: file(relativePath: { eq: "our-mission.png"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ourStory: file(relativePath: { eq: "our-story.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        valueCalculator: file(relativePath: { eq: "value-calculator.png"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        automatedUnderwriting: file(relativePath: { eq: "automated-underwriting.png"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        productMatching: file(relativePath: { eq: "product-matching.png"}) {
            childImageSharp {
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        team: allFile(
            filter: {
                extension: { regex: "/(jpg|png)/" }
                relativeDirectory: { eq: "team" }
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
`

export default AboutPage
