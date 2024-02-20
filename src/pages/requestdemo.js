import ModalVideo from "react-modal-video"
import _ from "lodash"
import React, { PureComponent } from "react"
// import Img from "gatsby-image"
import { graphql } from "gatsby"
import emailjs from "emailjs-com"
// import { LenderProductDisplay } from "components/products"
// import TeamMember from "components/about/TeamMember"
import heroVideoWebm from "videos/homepage-hero.webm"
import heroVideoMp4 from "videos/homepage-hero.mp4"
// import {
//   contractorProductFeatures,
//   lenderProductFeatures,
// } from "constants/product-info.js"

import "./styles/about.scss"

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
  constructor(props) {
    super(props)
    this.form = React.createRef()
    this.state = {
      videoId: "",
    }
  }

  setVideoId(videoId) {
    this.setState(() => ({
      videoId,
    }))
  }

  handleSubmit = async e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_9uh429q",
        "template_ava3p5k",
        this.form.current,
        "3Q1Fi6mJfJMB6d2Y0"
      )
      .then(
        response => {
          console.log("SUCCESS!", response)
          alert("Form Data Send Successfully")
        },
        err => {
          console.log("FAILED...", err)
          alert("Failed to send message. Please try again later.")
        }
      )
  }


  render() {
    const { videoId } = this.state

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
        {/* */}{" "}
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
          <div className="up-about-page__hero1"></div>
        </section>
        <section className="blocks">
          <div className="row">
            <div className="form-content">
              <div className="text-heading">
                <h1 className="mb-20">Request a Demo</h1>
                <p>
                  Our tools match properties and projects to types of financing,
                  based on property owner qualifications, project conditions,
                  and user preferences. Our tools automate business processes
                  and improve productivity for salespeople, contractors, and
                  lenders.
                </p>
                <iframe
                  src="https://drive.google.com/file/d/1Hem-CUEIxcKRxc0lAMq3lWdgPl8951JQ/preview"
                  width="100%"
                  height="350"
                  allow="autoplay"
                  controls="0"
                ></iframe>
              </div>
            </div>

            <div className="form-field">
              <div className="cards">
                <form
                  onSubmit={this.handleSubmit}
                  ref={this.form}
                  className="form"
                >
                  <div className="input-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="emailAddress"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      required
                    />
                  </div>
                  <input
                    className="up-lender-product__actions__cta"
                    type="submit"
                    value="GET IN TOUCH"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="up-about-page__team">
           <div className="up-about-page__team__inner">



types of financing, based on property owner qualification, 
           project conditions, and user preferences. Our tools automate business processes 
           and improve productivity for salespeople, contractors, and lenders


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
