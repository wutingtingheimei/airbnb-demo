import React, { memo } from 'react'
import { EntireWrapper} from './style'
import Filter from './components/Filter'
import Pagination from './components/Pagination'
import Rooms from './components/Rooms'
// import { Pagination } from 'antd'
const Entire = memo(() => {
  return (
    <EntireWrapper>
      <Filter></Filter>
      <Rooms></Rooms>
      <Pagination></Pagination>
    </EntireWrapper>
  )
})

export default Entire