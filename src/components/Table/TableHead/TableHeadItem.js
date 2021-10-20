import React from 'react'
import styled from 'styled-components'

const TableHeadItemWrapper = styled.td`
  background-color: ${(props) => props.headerColor};
  font-family: 'CircularStdBold';
  font-size:14px;
  color: white;
  text-align: center;
  padding:0 25px;
`

const TableHeadItem = ({ item, headerColor }) => {
  return (
    <TableHeadItemWrapper headerColor={headerColor} title={item}>
      {item}
    </TableHeadItemWrapper>
  )
}

export default TableHeadItem
