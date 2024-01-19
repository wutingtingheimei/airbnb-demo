import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FilterWrapper} from './styles'
const Filter = memo((props) => {

  const { infoData}  = props
  return (
    <FilterWrapper>Filter</FilterWrapper>
  )
})

Filter.propTypes = {
  infoData: PropTypes.object
}

export default Filter