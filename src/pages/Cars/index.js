import { compose } from 'recompose';
import CarsContainer from 'containers/Cars';
import React from 'react';

const CarsPage = (props) => {


  const { getMakesRequest, makes } = props;

  React.useEffect(() => {
    getMakesRequest();
  }, []);

  // React.useEffect(() => {
  //   console.log('makes');
  //   console.log(makes);
  // }, [makes]);

  return <div>cars</div>;
};

export default compose(CarsContainer)(CarsPage);
