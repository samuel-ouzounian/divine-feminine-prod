import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 1220px) {
    :not(#header-row) {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const Between = styled.div`
  flex: 1;
`;

export const HeadingSupper = styled.h1`
  font-family: "Cinzel", serif;
  font-size: 10vh;
  color: #ffffff;
  text-align: center;
`;

export const Heading1 = styled.h1`
  font-family: "Cinzel", serif;
  font-size: 3rem;
  line-height: 52px;
  color: #ffffff;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
    line-height: 3.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2em;
    line-height: 3rem;
  }
`;

export const Heading2 = styled.h2`
  font-family: "Cinzel", serif;
  font-size: 2rem;
  line-height: 3rem;
  color: #ffffff;
  text-align: left;
`;

export const BodyText = styled.p`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  /* or 160% */

  /* Strong grey */

  color: #7e7f81;
`;
