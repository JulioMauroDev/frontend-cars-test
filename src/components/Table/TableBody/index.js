import React from 'react'
import styled from 'styled-components'
import TableBodyRow from './TableBodyRow'

const TableBodyWrapper = styled.tbody``

const TableBody = (props) => {
  const { tableData } = props
  const margin = 7

  return (
    <TableBodyWrapper>
      {tableData.map((item, index) => {
        return (
          <TableBodyRow
            itemId={item.id}
            margin={margin * index + margin}
            key={item.name}
            data={item}
          />
        )
      })}
    </TableBodyWrapper>
  )
}

export default TableBody
