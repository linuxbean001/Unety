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
  if (!data.lenderLogos || !data.lenderLogos.edges ) {
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
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={logos.length}
        visibleSlides={2}
      >
        <Slider>
          {logos.map(({ node: { name, publicURL } }, i) => (
            <Slide index={i} key={i}>
              <div className="lender-logo-carousel__slide">
                <img src={publicURL} alt={name}  />
              </div>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
      <img src="/HanonArmstrong.png" alt="HanonArmstrong" style={{marginRight:"20px"}} />
    </div>
  )
}

export default LenderCarousel
