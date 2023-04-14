import * as React from 'react'
import { Link } from 'gatsby'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

type Props = {
  pageContext: Record<string, any>
}

const Pagination: React.FC<Props> = ({ pageContext }) => {
  console.log(pageContext)
  const { numPages, currentPage } = pageContext
  if (!numPages || !currentPage) return null

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prev = currentPage === 2 ? `/posts` : `/posts/page/${currentPage - 1}`
  const next = currentPage + 1

  // const start = getStart(currentPage, numPages)
  const start = 1
  const nums = Array.from({ length: numPages }).map((_, i) => i + start)

  return (
    <div className="rn-pagination text-center">
      <ul className="page-list">
        {!isFirst && (
          <li>
            <Link to={prev} rel="prev">
              <FaAngleLeft />
            </Link>
          </li>
        )}
        {nums.map(num => (
          <li key={num} className={num === currentPage ? `active` : ``}>
            <Link to={num === 1 ? `/posts` : `/posts/page/${num}`}>{num}</Link>
          </li>
        ))}
        {!isLast && (
          <li>
            <Link to={`/posts/page/${next}`} rel="next">
              <FaAngleRight />
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination
