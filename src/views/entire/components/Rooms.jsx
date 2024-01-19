import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper} from './styles'
const Rooms = memo((props) => {
  const { infoData} = props
  return (
    <RoomWrapper>Pagination</RoomWrapper>
  )
})

Rooms.propTypes = {
  infoData: PropTypes.object
}

export default Rooms