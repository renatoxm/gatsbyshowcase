import * as React from 'react'
import { Link } from 'gatsby'

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

type Props = {
  data: {
    allMdx: {
      nodes: BlogPost[]
    }
  }
}

const BlogList: React.FC<Props> = ({ data }) => {
  const postList: BlogPost[] = data.allMdx.nodes

  // const indexOfLastBlog = currPage * blogsPerPage
  // const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  // const currentPosts = postList.slice(indexOfFirstBlog, indexOfLastBlog)

  return (
    <>
      <div className="row">
        {postList.map(post => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={post.id}>
            <div className="blog blog-style--1">
              <div className="thumbnail">
                <Link to={post.frontmatter.slug}>
                  <img
                    className="w-100"
                    src={`/images/blog/${post.frontmatter.image}`}
                    alt="Blog Images"
                  />
                </Link>
              </div>
              <div className="content">
                <p className="blogtype">{post.frontmatter.category}</p>
                <h4 className="title">
                  <Link to={post.frontmatter.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h4>
                <div className="blog-btn">
                  <Link
                    className="rn-btn text-white"
                    to={post.frontmatter.slug}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default BlogList
