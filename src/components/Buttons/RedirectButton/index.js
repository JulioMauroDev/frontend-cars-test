import styled from 'styled-components';
import { push } from 'connected-react-router';
import store from 'store';

const RedirectButtonWrapper = styled.button`
margin-top:76px;
display:block;
background-color:white;
border-radius:12px;
padding:12px;
`;

const RedirectButton = (props) => {
  const { redirectTo, title } = props;

  return (
    <RedirectButtonWrapper onClick={()=> store.dispatch(push(redirectTo))}>
      {title}
    </RedirectButtonWrapper>
  );
};

export default RedirectButton;
