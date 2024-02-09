import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import "./carousel.scss"
const LenderCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      lenderLogos: allFile(
        filter: {
          extension: { regex: "/(png|jpg|jpeg)/" }
          relativeDirectory: { eq: "lender-logos" }
          name: { in: ["connecticut-green-bank", "nyceec-logo"] }
        }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)

  console.log(data)
  if (!data.lenderLogos || !data.lenderLogos.edges) {
    return null
  }

  const logos = data.lenderLogos.edges

  console.log("object", logos)

  return (
    <div className="lender-logo-carousel">
      <CarouselProvider
        infinite
        isIntrinsicHeight
        dragEnabled={false}
        isPlaying={false}
        // naturalSlideWidth={100}
        // naturalSlideHeight={125}
        // totalSlides={logos.length}
        visibleSlides={2}
      >
        <Slider>
          {/*   {logos.map(({ node: { name, publicURL } }, i) => (
            <Slide index={i} key={i}>
              <div className="lender-logo-carousel__slide">
                <img src={publicURL} alt={name}  />
              </div>
            </Slide>
          ))} */}
          <img
            src="/connecticut-green-bank.png"
            alt="connecticut-green-bank"
            style={{width:"140px",height:"70px"}}
          />
          <img
            src="/nyceec-logo.png"
            alt="nyceec-logo"
            style={{width:"140px",height:"70px"}}
          />
          <img
            src="/HanonArmstrong.png"
            alt="HanonArmstrong"
            style={{width:"140px",height:"70px"}}
          />
          <img
            src="/thirdsphere.png"
            style={{width:"140px",height:"80px"}}
            alt="thirdsphere"
          />
          <img
            src="/Mini.png"
            style={{width:"140px",height:"70px"}}
            alt="Mini"
          />
          <img
            src="/urban.PNG"
            style={{width:"140px",height:"80px"}}
            alt="urban"
          />
        </Slider>
      </CarouselProvider>
      {/*-------- Articles Section --------*/}

      {/*-------- Articles Section --------*/}

    </div>
  )
}

export default LenderCarousel
