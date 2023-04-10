import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { graphql, PageProps } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'
import { FiClock, FiUser, FiMessageCircle, FiHeart } from 'react-icons/fi'
import Header from '../layout/Header'
import Footer from '../layout/FooterTwo'
import ScrollToTop from '../components/ScrollToTop'
import '../assets/scss/index.scss'

// https://github.com/eggheadio/gatsby-starter-egghead-blog
// https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx-frontmatter/

interface PageTemplateProps extends Omit<PageProps, 'children'> {
  children: React.ReactNode
  data: {
    mdx: {
      frontmatter: {
        slug: string
        title: string
        category: string
        author: string
        bgimage: string
        image: string
        comments: string
        date: Date
      }
    }
  }
}

type Shortcodes = {
  [name: string]: React.ComponentType<any>
}

const shortcodes: Shortcodes = {
  a: Link,
}

export default function PageTemplate({ data, children }: PageTemplateProps) {
  // console.log(data)
  return (
    <>
      <Header />
      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image ${data.mdx.frontmatter.bgimage}`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {data.mdx.frontmatter.title}
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    May 18, 2023
                  </li>
                  <li>
                    <FiUser />
                    {data.mdx.frontmatter.author}
                  </li>
                  <li>
                    <FiMessageCircle />
                    {data.mdx.frontmatter.comments} Comments
                  </li>
                  <li>
                    <FiHeart />
                    Like
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Content */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </div>
      {/* End Blog Content */}

      <Footer />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop />
      </div>
      {/* End Back To Top */}
    </>
  )
}

export const Head: HeadFC = () => <title>Post</title>

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
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
`
