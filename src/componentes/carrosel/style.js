import styled from "styled-components";

export const Containder = styled.div`
 .rec.rec-arrow {
    background-color: #FF1305;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0, 0.25));
    border: none;
    opacity:0.50;
  }
  .rec.rec-arrow:hover {
    border: 2px solid #FF1305;
    background-color: transparent;
    color: #FF1305;
  }
  .rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
  }

  .kKWxKH {
   background-color:transparent;
   box-shadow: 0 0 1px 3px #FF1305;

  }
  .lolxzn:hover:enabled, .lolxzn:focus:enabled {
    box-shadow: 0 0 2px 0 #FF1305;
  }

  @media screen and (max-width: 640px) {
  .rec.rec-arrow {
    display: none;
  }

`;

export const Item = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height: 100%;
`;

export const Img = styled.img `
width: 20rem;
height: auto;
margin-bottom:2rem;
border-radius: 1rem;

@media  screen and (min-width: 1024px) {
    width: 30rem;
    height: auto;

}



`;

export const P = styled.p`
text-align: center;
font-size:18px;
width:100%;
color: white;

`
