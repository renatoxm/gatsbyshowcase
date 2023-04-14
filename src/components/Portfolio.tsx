import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import { portfolioSlick2 } from '../components/slideConfig'

const Portfolio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allData {
        nodes {
          id
          image
          category
          title
        }
      }
    }
  `)

  const title = `Our Work`
  const description = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.`
  return (
    <>
      <div className="portfolio-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-slick-activation mt--70 mt_sm--40">
          <Slider {...portfolioSlick2}>
            {data.allData.nodes.map(
              (node: {
                id: number
                image: string
                category: string
                title: string
              }) => (
                <div className="portfolio" key={node.id}>
                  <div className="thumbnail-inner">
                    <div className={`thumbnail ${node.image}`}></div>
                    <div className={`bg-blr-image ${node.image}`}></div>
                  </div>
                  <div className="content">
                    <div className="inner">
                      <p>{node.category}</p>
                      <h4 className="title">
                        <a href="#">{node.title}</a>
                      </h4>
                      <div className="portfolio-button">
                        <a className="rn-btn" href="#">
                          Case Study
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className="link-overlay" href="#"></a>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default Portfolio
