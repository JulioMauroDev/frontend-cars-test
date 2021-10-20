import React from 'react'
import styled from 'styled-components'
import TableHead from './TableHead'
import TableBody from './TableBody'

const TableWrapper = styled.table`
  border-spacing: 0px;
  width: 100%;
  
`

const Table = (props) => {
  const { tableData, customClass, headerColor } = props

  return (
    <TableWrapper className={customClass}>
      <TableHead tableData={tableData} headerColor={headerColor} />
      <TableBody tableData={tableData} />
    </TableWrapper>
  )
}

export default Table
