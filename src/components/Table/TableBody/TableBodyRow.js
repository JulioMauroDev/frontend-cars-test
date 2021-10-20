import React from 'react'
import styled from 'styled-components'

import { useLocation } from 'react-router-dom'
import { push } from 'connected-react-router'

import store from 'store'

const TableBodyRowWrapper = styled.tr`
  border: 1px solid red;
  background-color: white;
  margin: 30px;
  transform: translateY(${(props) => props.margin}px);
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: translateY(${(props) => props.margin}px) scale(1.01);
    cursor: pointer;
  }

  td {
    height: 50px;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    opacity: 0.9;
  }

  td:first-child {
    padding-right: 0;
    border-radius: 5px 0 0 5px;
  }

  td:last-child {
    border-radius: 0 5px 5px 0;
  }
`

const TableBodyItem = styled.td`
  padding: 0 25px 0 35px;
  font-family: 'CircularStdBook';
  font-size: 13px;
  color: #222222;
`

const TableBodyRow = ({ data, margin, itemId }) => {
  const { pathname } = useLocation()
  const targetPath = `${pathname}/${itemId}`

  return (
    <TableBodyRowWrapper margin={margin} className="table-body-row">
      {Object.values(data).map((item, index) => {
        const formattedString =
          index === 0 ? item.toString().slice(0, 6) + ' ...' : item.toString()

        return (
          <TableBodyItem
            onClick={() => {
              store.dispatch(push(targetPath))
            }}
            key={item}
          >
            {formattedString}
          </TableBodyItem>
        )
      })}
    </TableBodyRowWrapper>
  )
}

export default TableBodyRow
