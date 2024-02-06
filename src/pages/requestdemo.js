import ModalVideo from "react-modal-video"
import _ from "lodash"
import React, { PureComponent } from "react"
// import Img from "gatsby-image"
import { graphql } from "gatsby"

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
  state = {
    videoId: "",
    formData: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      company: "",
    },
  }

  setVideoId(videoId) {
    this.setState(() => ({
      videoId,
    }))
  }

  handleSubmit = e => {
    e.preventDefault()
  
    const { formData } = this.state
  
    // Prepare email body
    const emailBody = `
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Email Address: ${formData.emailAddress}
      Company: ${formData.company}
    `
  
    // Create mailto link
    const mailtoLink = `mailto:parker@unety.io?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`
  
    // Open default email client with pre-filled data
    window.location.href = mailtoLink
  }
  
  handleChange = e => {
    const { name, value } = e.target
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }))
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
          <div className="up-about-page__hero1">
            {/*  <div className="up-about-page__hero__inner">
              <div className="up-about-page__hero__content">
                <div className="up-about-page__hero__title">
                  <h1 className="transition-opacity">
                    Making clean energy<br/> profitable for you
                  </h1>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section className="block">
          <div className="left-p">
            <h1>Request a Demo</h1>
            <p>
              <span>
                Our tools match properties and projects to types of financing,
              </span>
              <br />
              <span>
                based on property owner qualification, project conditions and
              </span>
              <br />
              <span>
                user preferences. Our tools automate business processes and
              </span>
              <br />
              <span>
                improve productivity for salespeople, contractors, and lenders
              </span>
            </p>
          </div>
          <div className="right-p">
            <div className="card">
            <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="LastName"
              value={this.state.formData.lastName}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              name="emailAddress"
              placeholder="EmailAddress"
              value={this.state.formData.emailAddress}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={this.state.formData.company}
              onChange={this.handleChange}
              required
            />
            <input type="submit" value="GET IN TOUCH" />
          </form>
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
