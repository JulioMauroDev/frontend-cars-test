import React from 'react';
import styled from 'styled-components';
import TableHeadItem from './TableHeadItem';

const TableHeadWrapper = styled.thead``;

const TableHeadRow = styled.tr`
  padding: 0;
  margin: 0;
  border: 0;
  height: 50px;

  td:first-child {
    border-radius: 20px 0 0 20px;
  }

  td:last-child {
    border-radius: 0 20px 20px 0;
  }
`;

const TableHead = (props) => {
  const { tableData } = props;

  const [tableHeaders, selTableHeaders] = React.useState([]);

  React.useEffect(() => {
    if (tableData && tableData.length > 0) {
      const tempArr = Object.keys(tableData[0]).map((item) => {
        const tempString = item.replace(/([a-z])([A-Z])/g, '$1 $2');
        return tempString.charAt(0).toUpperCase() + tempString.slice(1);
      });

      selTableHeaders(tempArr);
    }
  }, [tableData]);

  return (
    <TableHeadWrapper>
      <TableHeadRow>
        {tableHeaders
          .filter((i) => i !== 'Id')
          .map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
      </TableHeadRow>
    </TableHeadWrapper>
  );
};

export default TableHead;
