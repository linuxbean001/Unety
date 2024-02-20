import classNames from "classnames"
import React, { PureComponent } from "react"
import Img from "gatsby-image"

import heroVideoWebm from "videos/homepage-hero.webm"
import heroVideoMp4 from "videos/homepage-hero.mp4"
import { ArticleList } from "components/articles"
import { PaceChart } from "components/resources"

import "./resource.scss"
import ModalVideo from "react-modal-video"

const VideoSelectionSection = ({
  className = "",
  description,
  media,
  subTitle,
  title,
  onSelect = () => {},
}) => {
  const containerClasses = classNames("up-resource__video-selection", className)

  return (
    <section className={containerClasses}>
      <div className="up-resource__video-selection__inner">
        <h2 className="up-resource__case-studies__title">
          {subTitle && <span>{subTitle}</span>}
          {title}
        </h2>
        {description && (
          <div
            className="up-resource__video-selection__description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {media && (
          <div className="up-resource__video-selection__media">
            {media.map(({ imageId, title, videoId }) => {
              return (
                <div className="up-resource__video-selection__media__item">
                  {title && (
                    <h3 className="up-resource__video-selection__media__title">
                      {title}
                    </h3>
                  )}
                  <iframe
                    title={title}
                    width="260"
                    height="315"
                    src={`https://player.vimeo.com/video/${videoId}`}
                    frameBorder="0"
                    allowFullScreen
                    style={{marginTop: "-5rem"}}
                  ></iframe>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

class ResourceTemplate extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      videoId: null,
    }

    this.setVideo = this.setVideo.bind(this)
  }

  setVideo(videoId = null) {
    this.setState(() => ({
      videoId,
    }))
  }

  render() {
    const { videoId } = this.state

    const {
      articles,
      caseStudies,
      hero,
      interviews,
      meta,
      publications,
      webinars,
      whatItIs,
    } = this.props.pageContext

    const heroClasses = classNames(
      "up-resource__hero",
      "up-resource__hero--interior",
      {
        "up-resource__hero--video": hero.video,
      }
    )

    return (
      <div className="up-resource">
        <ModalVideo
          channel="vimeo"
          isOpen={Boolean(videoId)}
          videoId={videoId}
          onClose={this.setVideo}
        />
        <div className="up-resource__inner">
          <section className="up-resource__hero__container">
            <video
              autoPlay
              loop
              ref={this.videoRef}
              className="up-resource__hero__video"
            >
              <source type="video/webm" src={heroVideoWebm} />
              <source type="video/mp4" src={heroVideoMp4} />
            </video>
            <div className={heroClasses}>
              <div className="up-resource__hero__inner">
                <div className="up-resource__hero__content">
                  <div className="up-resource__hero__title">
                    <h1>{hero.title}</h1>
                  </div>
                  {hero.video && (
                    <div className="up-resource__hero__video-container" style={{marginTop:"3rem"}}>
                      <iframe
                        title={hero.title}
                        width="560"
                        height="315"
                        src={`https://player.vimeo.com/video/${hero.video.id}`}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="up-resource__what-is-it">
            <div className="up-resource__what-is-it__inner">
              {whatItIs.title && (
                <h2 className="up-resource__what-is-it__title">
                  {whatItIs.subTitle && <span>{whatItIs.subTitle}</span>}
                  {whatItIs.title}
                </h2>
              )}
              {whatItIs.content && (
                <div
                  className="up-resource__what-is-it__content"
                  dangerouslySetInnerHTML={{ __html: whatItIs.content }}
                />
              )}
              {whatItIs.video && (
                <iframe
                  title={whatItIs.title}
                  width="960"
                  height="315"
                  src={`https://player.vimeo.com/video/${whatItIs.video.id}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </section>

          {meta.tag && meta.tag === "pace" && <PaceChart />}

          {interviews && (
            <VideoSelectionSection {...interviews} onSelect={this.setVideo} />
          )}

          {caseStudies && (
            <section className="up-resource__case-studies" style={{marginTop:"-4rem"}}>
              <div className="up-resource__case-studies__inner">
                <h2 className="up-resource__case-studies__title">
                  {caseStudies.subTitle && <span>{caseStudies.subTitle}</span>}
                  {caseStudies.title}
                </h2>
                <div className="up-resource__case-studies__list">
                  {caseStudies.projects.map(project => {
                    const {
                      asset,
                      description,
                      energySavings,
                      incomeAfter,
                      lifetimeSavings,
                      photoCredit,
                      projectCost,
                      projectSize,
                      projectType,
                      savings,
                      title,
                    } = project

                    const hasInfo =
                      incomeAfter ||
                      lifetimeSavings ||
                      projectCost ||
                      energySavings ||
                      projectType ||
                      projectSize ||
                      savings

                    return (
                      <article
                        key={title}
                        className="up-resource__case-studies__item"
                      >
                        <div className="up-resource__case-studies__item__asset">
                          {asset && <Img fluid={asset} />}
                          {photoCredit && (
                            <div className="up-resource__case-studies__item__asset__credit">
                              {photoCredit}
                            </div>
                          )}
                        </div>
                        <div className="up-resource__case-studies__item__content">
                          <h3 className="up-resource__case-studies__item__title">
                            {title}
                          </h3>
                          <div
                            className="up-resource__case-studies__description"
                            dangerouslySetInnerHTML={{ __html: description }}
                          />
                          {hasInfo && (
                            <div className="up-resource__case-studies__info">
                              {projectCost && (
                                <div className="up-resource__case-studies__project-cost">
                                  <span>Project cost:</span>
                                  {projectCost}
                                </div>
                              )}
                              {incomeAfter && (
                                <div className="up-resource__case-studies__income-after">
                                  <span>Income after:</span>
                                  {incomeAfter}
                                </div>
                              )}
                              {lifetimeSavings && (
                                <div className="up-resource__case-studies__lifetime-savings">
                                  <span>Lifetime savings:</span>
                                  {lifetimeSavings}
                                </div>
                              )}
                              {energySavings && (
                                <div className="up-resource__case-studies__energy-savings">
                                  <span>Energy savings:</span>
                                  {energySavings}
                                </div>
                              )}
                              {projectType && (
                                <div className="up-resource__case-studies__project-type">
                                  <span>Project type:</span>
                                  {projectType}
                                </div>
                              )}
                              {projectSize && (
                                <div className="up-resource__case-studies__project-size">
                                  <span>Project size:</span>
                                  {projectSize}
                                </div>
                              )}
                              {savings && (
                                <div className="up-resource__case-studies__savings">
                                  <span>Savings:</span>
                                  {savings}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>
          )}

          {publications && (
            <section className="up-resource__publications">
              <div className="up-resource__publications__inner">
                {publications.title && (
                  <h2 className="up-resource__what-is-it__title">
                    {publications.subTitle && (
                      <span>{publications.subTitle}</span>
                    )}
                    {publications.title}
                  </h2>
                )}
                {publications.content && (
                  <div
                    className="up-resource__publications__content"
                    dangerouslySetInnerHTML={{ __html: publications.content }}
                  />
                )}
                <div className="up-resource__publications__grid">
                  {publications.media &&
                    publications.media.map(
                      ({ assetUrl, image, publisher, title, year }) => {
                        return (
                          <div className="up-resource__publication">
                            <div className="up-resource__publication__image">
                              {image && <Img fluid={image} />}
                            </div>
                            <div className="up-resource__publication__title">
                              {title}
                              {year && <span>{year}</span>}
                            </div>
                            <div className="up-resource__publication__publisher">
                              {publisher}
                            </div>
                            <a
                              className="up-resource__publication__cta"
                              href={assetUrl}
                              rel="noreferrer noopener"
                              target="__blank"
                            >
                              Download
                            </a>
                          </div>
                        )
                      }
                    )}
                </div>
              </div>
            </section>
          )}

          {webinars && (
            <VideoSelectionSection
              className="up-resource__video-selection--webinar"
              {...webinars}
              onSelect={this.setVideo}
            />
          )}

          {Array.isArray(articles.list) && articles.list.length > 0 && (
            <ArticleList {...articles} />
          )}
        </div>
      </div>
    )
  }
}

export default ResourceTemplate
