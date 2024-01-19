import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PaginationWrapper} from './styles'
const Pagination = memo((props) => {
  const { infoData} = props
  return (
    <PaginationWrapper>Pagination</PaginationWrapper>
  )
})

Pagination.propTypes = {
  infoData: PropTypes.object
}

export default Pagination