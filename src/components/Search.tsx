import { Search } from 'js-search'
import { graphql, useStaticQuery, Link } from 'gatsby'
import React, { useState } from 'react'
import { Post } from '../types'

const SearchComponent = () => {
  const [query, setQuery] = useState<string>(``)
  const [searchResults, setSearchResults] = useState<Post[]>([])
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx {
          nodes {
            frontmatter {
              title
              author
              slug
              category
              date
              excerpt
            }
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  )

  const data: Post[] = allMdx.nodes.map((node: any) => ({
    id: node.id,
    title: node.frontmatter.title,
    excerpt: node.frontmatter.excerpt,
    slug: node.frontmatter.slug,
    body: node.internal.contentFilePath,
    date: node.frontmatter.date,
  }))

  const searchIndex = new Search(`id`)
  searchIndex.addIndex(`title`)
  searchIndex.addIndex(`excerpt`)
  searchIndex.addIndex(`body`)
  searchIndex.addDocuments(data)

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setQuery(value)
    if (value === ``) {
      setSearchResults([])
    } else {
      const results = searchIndex.search(value)
      setSearchResults(
        results.map((result: any) => ({
          id: result.id,
          title: result.title,
          excerpt: result.excerpt,
          slug: result.slug,
          body: result.body,
          date: result.date,
        }))
      )
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 pt-5">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search posts"
                value={query}
                onChange={search}
              />
            </div>
          </form>
          {searchResults.map((result: Post) => (
            <Link key={result.id} to={result.slug}>
              <div className="mb-5">
                <h3>{result.title}</h3>
                {result.excerpt}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
