import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { graphql, PageProps } from 'gatsby'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import BlogList from '../components/BlogList'
import Search from '../components/Search'
import Layout from '../layout'

interface PageTemplateProps extends Omit<PageProps, 'children'> {
  data: {
    allMdx: {
      nodes: BlogPost[]
    }
  }
}

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
  }
}

export default function PageTemplate(props: PageTemplateProps) {
  return (
    <Layout>
      {/* Start Breadcrump Area */}
      <Breadcrumb title={'Blog List'} />
      {/* End Breadcrump Area */}
      <Search />

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <BlogList data={props.data} />
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              <Pagination pageContext={props.pageContext} />
              {/* End Pagination Area */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}
    </Layout>
  )
}

export const Head: HeadFC = () => <title>Posts</title>

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: $limit, skip: $skip) {
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
