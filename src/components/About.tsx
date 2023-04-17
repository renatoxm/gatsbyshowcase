import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const About: React.FC = () => {
  const title = `About`
  const description = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,`
  return (
    <>
      <div className="about-wrapper">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div data-testid="about-image" className="thumbnail">
                <StaticImage
                  className="w-100"
                  placeholder="blurred"
                  src="../images/about/about-1.jpg"
                  alt="Snow mountain"
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title">{title}</h2>
                  <p className="description">{description}</p>
                </div>
                <div className="row mt--30 mt_sm--10">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Who we are</h3>
                      <p>
                        There are many vtions of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-us-list">
                      <h3 className="title">Who we are</h3>
                      <p>
                        There are many vtions of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default About
