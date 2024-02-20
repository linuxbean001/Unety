import ModalVideo from "react-modal-video"
import _ from "lodash"
import React, { PureComponent } from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import { LenderProductDisplay } from "components/products"
import TeamMember from "components/about/TeamMember"
import heroVideoWebm from "videos/homepage-hero.webm"
import heroVideoMp4 from "videos/homepage-hero.mp4"
import {
  contractorProductFeatures,
  lenderProductFeatures,
} from "constants/product-info.js"

import "./styles/about.scss"
import "../components/products/product-display.scss"

const TEAM_MEMBERS = [
  {
    key: "parker-white",
    name: "Parker White",
    title: "CEO",
    bio:
      "Parker White oversees corporate and growth strategies, financing and resources, and operations as the CEO. Most recently, Parker was the Director of Commercial Real Estate Investment at Hannon Armstrong Capital. Before joining Hannon, Parker led project development teams at Jones Lang LaSalle as head of Energy and Sustainability Services for Greater China and then as Vice President of Intelligent Building Solutions for North America.",
    angelListUrl: "https://angel.co/parker-white-2",
    linkedInUrl: "https://www.linkedin.com/in/jparkerwhite/",
  },
  {
    key: "justin-pincar",
    name: "Justin Pincar",
    title: "CTO",
    bio:
      "Justin Pincar leads Unety's technical and product vision as CTO. Based in Silicon Valley since 2009, Justin has worked with global leaders like Google, Facebook, and Boeing to manage their mission-critical services handling billions of impressions per day. This experience bringing ideas to life at every stage of development allowed Justin to learn technical architecture and operational strategies that have been critical to the creation of Unety.",
    linkedInUrl: "https://www.linkedin.com/in/justinpincar/",
  },
]

class AboutPage extends PureComponent {
  state = {
    videoId: "",
    activeSection: 0,
    showPopup: false,
  }

  setVideoId(videoId) {
    this.setState(() => ({
      videoId,
    }))
  }

  handleNextSection = () => {
    const { activeSection } = this.state
    const totalSections = 3

    const nextSection = (activeSection + 1) % totalSections

    this.setState({
      activeSection: nextSection,
    })
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  render() {
    const { videoId } = this.state
    const { activeSection } = this.state

    const { ourMission, ourStory, team } = this.props.data

    const headshots = team.edges.reduce((acc, { node }) => {
      const {
        name,
        childImageSharp: { fluid },
      } = node
      acc[name] = fluid
      return acc
    }, {})

    return (
      <div className="up-about-page">
        <ModalVideo
          channel="youtube"
          isOpen={Boolean(videoId)}
          videoId={videoId}
          onClose={this.setVideoId.bind(this, null)}
        />

        <section
          className="up-about-page__hero__container animate-container"
          id="our-mission"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="up-about-page__hero__video"
            preload="metadata"
          >
            <source type="video/webm" src={`${heroVideoWebm}#t=0.1`} />
            <source type="video/mp4" src={`${heroVideoMp4}#t=0.1`} />
          </video>
          <div className="up-about-page__hero">
            <div className="up-about-page__hero__inner">
              <div className="up-about-page__hero__content">
                <div className="up-about-page__hero__title">
                  <h1 className="transition-opacity">
                    Making clean energy
                    <br /> profitable for you
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
                <p>
                  When I originally founded Unety, I made it our mission to
                  level the playing field of an otherwise biased system that
                  favored big corporations with special access to financial
                  tools that uniquely made green building projects accretive.
                </p>
                <p>
                  I was raised in a small community, solely made up of
                  mom-and-pop businesses, whose owners largely tried to live
                  their values while eking out a living. Limited local
                  opportunities led me to leave my hometown, and my journey
                  shaped Unety's mission. I moved to New York City, and for 10
                  years my career focused on greening over 10 million square
                  feet of commercial properties around the world. In that time,
                  I witnessed a paradigm take shape: sustainability resources
                  increasingly flowed to large players, while small businesses,
                  like the ones in my hometown, were left stranded.
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
                <p>
                  Unety was born from this disparity. We built tools that
                  automated the most difficult aspects of funding
                  sustainability; raised venture capital; went to market; and
                  helped 330 small commercial properties complete over $176
                  million of green building retrofits. Unfortunately, Unety did
                  not survive the COVID pandemic.
                </p>
                <p>
                  I have left this website up so that it can serve as a playbook
                  for how we achieved our accomplishments in the hope that it
                  proves useful for anyone else looking to solve the same
                  problem. If that happens to be you, please reach out to the
                  email below.
                </p>
              </div>
            </div>
          </div>
          <div id="our-products" />
        </section>

        <div className="bgData">
          <section
            className="up-about-page__mission"
            data-offset="1000"
            style={{ marginTop: "0", marginBottom: "40px" }}
          >
            <div className="up-about-page__mission__inner">
              <h2 className="up-about-page__mission__title">
                {/*  <span>Our Mission</span>
            Helping you and the environment*/}
                <span></span>
                The first Eco-Bankability score
              </h2>
              <div className="up-about-page__mission__grid align-center">
                <div className="up-about-page__mission__content">
                  <ul className="list">
                    <li>
                      Built on a robust proprietary data engine driven by a
                      complex library of algorithms that assess the risk of a
                      sustainability project.
                    </li>

                    <li>
                      Manually calibrated against hundreds of publicly-rated
                      property financings.
                    </li>

                    <li>
                      Tested by heads of underwriting for leading lenders.
                    </li>
                  </ul>
                </div>
                <div className="up-about-page__mission__image">
                  {/*  <Img fluid={ourMission.childImageSharp.fluid} />*/}
                  <img
                    src="/score.gif"
                    alt="gif"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div id="our-story" />
          </section>
          <section
            className="up-about-page__story animate-container "
            style={{ marginTop: "0", marginBottom: "0" }}
          >
            <div
              className="up-about-page__story__inner"
              style={{ marginTop: "0", marginBottom: "0" }}
            >
              <div className="up-about-page__mission__grid transition-slide-in align-center">
                <div className="up-about-page__story__image half-col">
                  {/* <Img fluid={ourStory.childImageSharp.fluid} />*/}
                  <img src="/score2.png" alt="tree" />
                </div>
                <div className="up-about-page__story__content">
                  <ul className="list">
                    <li>Piloted by the CT Green Bank.</li>

                    <li>
                      Continuously tested and calibrated through gamification
                      features.
                    </li>

                    <li>
                      Secured by comprehensive unit testing infrastructure.{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="our-products" />
          </section>
        </div>

        <div>
          <LenderProductDisplay productFeatures={lenderProductFeatures} />
          <div id="contractor-product" />
        </div>

        <div className="up-about-page__contractor-product v-sec">
          <div className="bgData">
            <LenderProductDisplay
              reverseLayout
              productFeatures={contractorProductFeatures}
            />
          </div>

          {/*--------------------------- Slide 19 to 21 ---------------------------*/}

          {/*--------------------------- First Section ---------------------------*/}

          {/*--------------------------- First Section ---------------------------*/}

          {/*--------------------------- Second Section ---------------------------*/}
          <div className="up-lender-product">
            <div
              className="up-lender-product__inner"
              style={{ paddingTop: "0px" }}
            >
              <div className="up-lender-product__track">
                {/*------------ First Section ----------------*/}
                <div
                  className={`up-lender-product__track__item ${
                    activeSection === 0
                      ? "up-lender-product__track__item--active"
                      : ""
                  }`}
                >
                  <div className="up-lender-product__title up-lender-product__title--mobile">
                    <span> Tools for Enterprises </span> Manage Portfolios
                  </div>
                  <div className="up-lender-product__grid">
                    <div className="up-lender-product__nav">
                      <div className="up-lender-product__title up-lender-product__title--desktop">
                        <span> Tools for Enterprises </span>Manage Portfolios
                      </div>

                      <div className="up-lender-product__nav__item up-lender-product__nav__item--active">
                        <button className="up-lender-product__nav__item__label">
                          Portfolio Manager’s Dashboard
                        </button>
                        <div
                          className="up-lender-product__nav__item__desc"
                          style={{ maxHeight: "100%", lineHeight: "2" }}
                        >
                          <b> Instantly assess and score entire portfolios</b>{" "}
                          of buildings to identity bankability, credit, and
                          utility savings potential, automatically identifying
                          and prioritizing candidate properties for
                          sustainability retrofits.
                        </div>
                      </div>

                      <div className="up-lender-product__actions">
                        <button
                          className="up-lender-product__actions__cta"
                          onClick={this.handleNextSection}
                          style={{ marginLeft: "0px", marginTop: "35px" }}
                        >
                          Next:&nbsp;&nbsp;<strong>Projects</strong>
                          <svg viewBox="0 0 477.175 477.175">
                            <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="up-lender-product__screenshots">
                      <div className="up-lender-product__screenshot up-lender-product__screenshot--active">
                        <div class="up-browser-frame">
                          <div className="row">
                            <div className="column left">
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(237, 89, 74)" }}
                              ></span>
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(253, 216, 0)" }}
                              ></span>
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(90, 192, 90)" }}
                              ></span>
                            </div>
                            <div className="column middle">
                              <input
                                disabled=""
                                type="text"
                                value="https://www.unety.io"
                              />
                            </div>
                            <div className="column right">
                              <div style={{ float: "right" }}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                              </div>
                            </div>
                          </div>
                          <div className="content">
                            <img src="/4.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => this.togglePopup()}
                        className="videobuttons"
                      >
                        ▶&nbsp; <br /> Play Demo Video
                      </button>
                    </div>
                  </div>
                </div>
                {/*------------ First Section ----------------*/}

                {/*------------ Second Section ----------------*/}
                <div
                  className={`up-lender-product__track__item ${
                    activeSection === 1
                      ? "up-lender-product__track__item--active"
                      : ""
                  }`}
                >
                  <div className="up-lender-product__title up-lender-product__title--mobile">
                    <span>Tools for Enterprises</span>Coordinate Properties
                  </div>
                  <div className="up-lender-product__grid">
                    <div className="up-lender-product__nav">
                      <div className="up-lender-product__title up-lender-product__title--desktop">
                        <span>Tools for Enterprises</span>Coordinate Properties
                      </div>
                      <div className="up-lender-product__nav__item up-lender-product__nav__item--active">
                        <button className="up-lender-product__nav__item__label">
                          Project Manager’s Dashboard
                        </button>
                        <div className="up-lender-product__nav__item__desc">
                          Collaborate between teams or companies working on the
                          ground to verify project viability on candidate
                          properties.
                        </div>
                      </div>

                      <div className="up-lender-product__nav__item up-lender-product__nav__item--active">
                        <div className="up-lender-product__nav__item__desc">
                          Work together to manage local decision makers’
                          expectations and close financings.
                        </div>
                      </div>
                      <div className="up-lender-product__actions">
                        <button
                          className="up-lender-product__actions__cta"
                          onClick={this.handleNextSection}
                          style={{ marginLeft: "0px", marginTop: "50px" }}
                        >
                          Next:&nbsp;&nbsp;<strong>Transactions</strong>
                          <svg viewBox="0 0 477.175 477.175">
                            <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="up-lender-product__screenshots">
                      <div className="up-lender-product__screenshot up-lender-product__screenshot--active">
                        <div class="up-browser-frame">
                          <div className="row">
                            <div className="column left">
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(237, 89, 74)" }}
                              ></span>
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(253, 216, 0)" }}
                              ></span>
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(90, 192, 90)" }}
                              ></span>
                            </div>
                            <div className="column middle">
                              <input
                                disabled=""
                                type="text"
                                value="https://www.unety.io"
                              />
                            </div>
                            <div className="column right">
                              <div style={{ float: "right" }}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                              </div>
                            </div>
                          </div>
                          <div className="content">
                            <img src="/5.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => this.togglePopup()}
                        className="videobuttons"
                      >
                        ▶&nbsp;
                        <br /> Play Demo Video
                      </button>
                    </div>
                  </div>
                </div>
                {/*------------ Second Section ----------------*/}

                {/*------------ Third Section ----------------*/}
                <div
                  className={`up-lender-product__track__item ${
                    activeSection === 2
                      ? "up-lender-product__track__item--active"
                      : ""
                  }`}
                >
                  <div className="up-lender-product__title up-lender-product__title--mobile">
                    <span>Tools for Enterprises</span> Execute Transactions
                  </div>
                  <div className="up-lender-product__grid">
                    <div className="up-lender-product__nav">
                      <div className="up-lender-product__title up-lender-product__title--desktop">
                        <span>Tools for Enterprises</span>Execute Transactions
                      </div>

                      <div className="up-lender-product__nav__item up-lender-product__nav__item--active">
                        <button className="up-lender-product__nav__item__label">
                          Transaction Manager’s Dashboard
                        </button>
                        <div
                          className="up-lender-product__nav__item__desc"
                          style={{ maxHeight: "100%" }}
                        >
                          Unety automates and democratizes brokerage of
                          sustainability finance. Anyone can be their own broker
                          and earn brokerage fees with the right tools and
                          network. Existing brokers can dramatically improve
                          productivity and performance with better tools and a
                          larger network.
                        </div>
                      </div>

                      <div className="up-lender-product__actions">
                        <button
                          className="up-lender-product__actions__cta"
                          onClick={this.handleNextSection}
                          style={{ marginLeft: "0px", marginTop: "0px" }}
                        >
                          Next:&nbsp;&nbsp;<strong>Portfolios</strong>
                          <svg viewBox="0 0 477.175 477.175">
                            <path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="up-lender-product__screenshots">
                      <div className="up-lender-product__screenshot up-lender-product__screenshot--active">
                        <div class="up-browser-frame">
                          <div className="row">
                            <div className="column left">
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(237, 89, 74)" }}
                              ></span>
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(253, 216, 0)" }}
                              ></span>
                              <span
                                className="dot"
                                style={{ backgroundColor: "rgb(90, 192, 90)" }}
                              ></span>
                            </div>
                            <div className="column middle">
                              <input
                                disabled=""
                                type="text"
                                value="https://www.unety.io"
                              />
                            </div>
                            <div className="column right">
                              <div style={{ float: "right" }}>
                                <span className="bar"></span>
                                <span className="bar"></span>
                                <span className="bar"></span>
                              </div>
                            </div>
                          </div>
                          <div className="content">
                            <img src="/6.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => this.togglePopup()}
                        className="videobuttonss"
                      >
                        ▶&nbsp;
                        <br /> Play Demo Video
                      </button>
                    </div>
                  </div>
                </div>
                {/*------------ Third Section ----------------*/}
              </div>
            </div>
          </div>

          {this.state.showPopup && (
            <div className="popup">
              <div className="popup-inner">
                <button
                  className="close-btn"
                  onClick={() => this.togglePopup()}
                >
                  X
                </button>
                {/*  <iframe
                  src="https://drive.google.com/file/d/1knc0GILg_916_E2vQk_WlgV_DTjYkK7L/preview"
                  width="1140"
                  height="680"
                  allow="autoplay"
                ></iframe> */}
                <iframe
                  src="https://drive.google.com/file/d/1auN7iOMhDJkLk0blxoYsPg7yvauH9mHS/preview"
                  width="1140"
                  height="680"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          )}
          {/*--------------------------- Second Section ---------------------------*/}
          {/*--------------------------- Slide 19 to 21 ---------------------------*/}
          <div id="meet-the-team" />
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
    )
  }
}

export const query = graphql`
  query {
    ourMission: file(relativePath: { eq: "our-mission.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ourStory: file(relativePath: { eq: "our-story.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    valueCalculator: file(relativePath: { eq: "value-calculator.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    automatedUnderwriting: file(
      relativePath: { eq: "automated-underwriting.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    productMatching: file(relativePath: { eq: "product-matching.png" }) {
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
