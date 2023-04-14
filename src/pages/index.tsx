import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Link, graphql } from 'gatsby'
import Layout from '../layout'
import Brand from '../layout/Brand'
import SliderOne from '../components/SliderOne'
import ServiceTwo from '../components/ServiceTwo'
import About from '../components/About'
import Counter from '../components/Counter'
import Testimonial from '../components/Testimonial'
import Portfolio from '../components/Portfolio'
import BlogList from '../components/BlogList'

interface BlogPost {
  id: string
  frontmatter: {
    slug: string
    title: string
    category: string
    author: string
    bgimage: string
    image: string
    comments: string
    date: Date
    excerpt: string
  }
}

interface Props {
  data: {
    allMdx: {
      nodes: BlogPost[]
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="active-dark">
      <Layout dark={true}>
        <div className="slider-wrapper">
          <SliderOne />
        </div>
        <div className="about-area about-position-top pb--120 bg_color--1">
          <About />
        </div>
        <div className="service-area ptb--80  bg_image bg_image--3">
          <div className="container">
            <ServiceTwo />
          </div>
        </div>
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner mb--55">
            <Portfolio />
          </div>
        </div>
        <div className="rn-counterup-area pt--25 pb--110 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Gatsby Statistics</h3>
                </div>
              </div>
            </div>
            <Counter />
          </div>
        </div>
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        <div className="rn-blog-area pt--120 bg_color--1 mb-dec--30">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="section-title text-left">
                  <h2>Latest Posts</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                  <Link className="btn-transparent rn-btn-dark" to="/posts">
                    <span className="text">All Posts</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mt--60 mt_sm--40">
              <BlogList data={data} />
            </div>
          </div>
        </div>
        <div className="rn-brand-area brand-separation pb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Brand />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query {
    allMdx(limit: 3) {
      nodes {
        id
        frontmatter {
          bgimage
          image
          comments
          slug
          title
          author
          category
          date
        }
      }
    }
  }
`
