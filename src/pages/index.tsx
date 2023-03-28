import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../layout';
import Brand from '../layout/Brand';
import BlogContent from '../components/blogContent';
import SliderOne from '../components/SliderOne';
import ServiceTwo from '../components/ServiceTwo';
import About from '../components/About';
import Counter from '../components/Counter';
import Testimonial from '../components/Testimonial';
import Portfolio from '../components/Portfolio';

const IndexPage: React.FC<PageProps> = () => {
    const PostList = BlogContent.slice(0, 3);
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
                    <h3 className="fontWeight500">Our Fun Facts</h3>
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
                    <h2>Latest News</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="blog-btn text-left text-lg-right mt_sm--10 mt_md--10">
                    <a className="btn-transparent rn-btn-dark" href="/blog">
                      <span className="text">View All News</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row mt--60 mt_sm--40">
                {PostList.map((value, i) => (
                  <div className="col-lg-4 col-md-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                      <div className="thumbnail">
                        <a href="/blog-details">
                          <img
                            className="w-100"
                            src={`/images/blog/blog-${value.images}.jpg`}
                            alt="Blog Images"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.category}</p>
                        <h4 className="title">
                          <a href="/blog-details">{value.title}</a>
                        </h4>
                        <div className="blog-btn">
                          <a className="rn-btn text-white" href="/blog-details">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
    );
}
export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>