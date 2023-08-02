import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
    ${'' /* font-family: -apple-system, BlinkMacSystemFont, 'Roboto Slab', serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */}

    ${'' /* font-family: -apple-system,BlinkMacSystemFont,'Amatic SC', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */}
    font-family: 'Architects Daughter', cursive;

  background: url(https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  letter-spacing: 0.02em;
  font-size: 14px;
  line-height: 1.85;
  overflow-x: hidden;
  margin: 0 auto;
  transition: 1.5s;

}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

body::-webkit-scrollbar {
  appearance: none;
  background: #000;
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 5px;
}
${'' /* section {
  margin-top: 50px;
} */}

img {
  display: block;
    object-fit: cover;
    object-position: center center;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ol,
ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

`;
