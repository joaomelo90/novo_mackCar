import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95vw; 
   height: 100vh; 
   flex-direction:row;
`;

export const Item = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;

export const Img = styled.img `
width: 20rem;
height: auto;
margin-bottom:2rem;
border-radius: 1rem;

@media  screen and (min-width: 1024px) {
    width: 25rem;
    height: auto;
 

}



`;


export const P = styled.p`
text-align: center;
font-size:18px;
width:90%;
color: white;

`
