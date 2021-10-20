import styled from 'styled-components';
import GlobalStyles from './styles/globalStyles';

const AppLayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--clr-grey-bckgd);
`;

const AppWrapper = (props) => {
  return (
    <AppLayoutWrapper>
      <GlobalStyles />
      {props.children}
    </AppLayoutWrapper>
  );
};

export default AppWrapper;
