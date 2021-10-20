import styled from 'styled-components';

const PageHeaderWrapper = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  color:black;
  font-family:CircularStdBold;

`;

const PageHeader = ({ title }) => {
  return <PageHeaderWrapper>{title}</PageHeaderWrapper>;
};

export default PageHeader;
