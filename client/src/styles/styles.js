import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    margin:0;
    padding: 0;
   
   overflow-x: hidden;
   letter-spacing:.5px ;
   
  }

  html, body{
    height: 100%;
  }
  
  ul {
  margin: 0;
  padding: 0;

}

li{
  list-style: none;
}

a{
  text-decoration: none;
  color: inherit;
}
button{
  border: none;
  outline: none;
}





`;
