import React from 'react';
import styled from 'styled-components';

import { push } from 'connected-react-router';

import store from 'store';

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
`;

const TableBodyItem = styled.td`
  font-family: 'CircularStdBook';
  font-size: 12px;
  color: #222222;
  text-align: center;
`;

const TableBodyRow = ({ data, margin, itemId }) => {
  const targetPath = `edit-car/${itemId}`;

  return (
    <TableBodyRowWrapper margin={margin} className="table-body-row">
      {Object.values(data)
        .slice(0, 4)
        .map((item, index) => {
          return (
            <TableBodyItem
              onClick={() => {
                store.dispatch(push(targetPath));
              }}
              key={item}
            >
              {item.toString()}
            </TableBodyItem>
          );
        })}
    </TableBodyRowWrapper>
  );
};

export default TableBodyRow;
