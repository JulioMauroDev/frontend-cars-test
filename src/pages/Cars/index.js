import React from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import CarsContainer from 'containers/Cars';
import RedirectButton from 'components/Buttons/RedirectButton';
import PageHeader from 'parts/PageHeader';
import Table from 'components/Table';

const CarsPageWrapper = styled.div`
  width: 90%;
  display: block;
  margin: 0 auto;
  padding-top: 50px;
`;

const CarsPage = (props) => {
  const { getMakesRequest, makes, cars } = props;

  React.useEffect(() => {
    !makes && getMakesRequest();
  }, []);

  return (
    <CarsPageWrapper>
      <PageHeader title="Cars" />
      {cars && Object.values(cars).length > 0 && (
        <Table tableData={Object.values(cars)} />
      )}

      <RedirectButton
        title="Create a new car"
        redirectTo="/add-car"
      ></RedirectButton>
    </CarsPageWrapper>
  );
};

export default compose(CarsContainer)(CarsPage);
