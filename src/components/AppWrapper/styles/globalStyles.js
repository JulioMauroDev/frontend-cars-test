import { createGlobalStyle } from 'styled-components';
import CircularStdBold from 'assets/fonts/CircularStd-Bold.otf';
import CircularStdBook from 'assets/fonts/CircularStd-Book.ttf';
import DMSansMedium from 'assets/fonts/DMSans-Medium.ttf';
import DMSansRegular from 'assets/fonts/DMSans-Regular.ttf';
import DMSansBold from 'assets/fonts/DMSans-Bold.ttf';
const GlobalStyles = createGlobalStyle`
:root{

  //COLOURS

--clr-grey-bckgd: #F6F6F6;


  //DIMENSIONS
  --header-height:70px;


  @font-face {
  font-family: 'CircularStdBold';
  src: local('CircularStdBold'), url(${CircularStdBold}) format('opentype');
}

@font-face {
  font-family: 'CircularStdBook';
  src: local('CircularStdBook'), url(${CircularStdBook}) format('truetype');
}

@font-face {
  font-family: 'DMSansMedium';
  src: local('DMSansMedium'), url(${DMSansMedium}) format('truetype');
}

@font-face {
  font-family: 'DMSansBold';
  src: local('DMSansBold'), url(${DMSansBold}) format('truetype');
}

@font-face {
  font-family: 'DMSansRegular';
  src: local('DMSansRegular'), url(${DMSansRegular}) format('truetype');
}
}

body {
    margin: 0;
    padding:0;
    font-family:'CircularStdBook';
    color: var(--clr-grey-bckgd);
  }
  .page{
    margin-top:100px;
  }

`;

export default GlobalStyles;
