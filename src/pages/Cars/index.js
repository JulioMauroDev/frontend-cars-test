import styled from 'styled-components';
import { compose } from 'recompose';
import CarsContainer from 'containers/Cars';
import React from 'react';

import PageHeader from 'parts/PageHeader';

const CarsPageWrapper = styled.div``;

const CarsPage = (props) => {
  const { getMakesRequest, makes } = props;

  React.useEffect(() => {
    !makes && getMakesRequest();
  }, []);

  return (
    <CarsPageWrapper>
      <PageHeader title="Cars" />
    </CarsPageWrapper>
  );
};

export default compose(CarsContainer)(CarsPage);
