import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  margin: 0 auto;
  max-width: fit-content;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SecretButton = styled.a`
  color: #161e29;
  @media (min-width: 769px) {
    font-size: 20px;
  }
`;

export const SecretContainer = styled.div`
    justify-content: center;
    margin-left: 7%;
    margin-right: 7%;
`;

export const SecretHero = styled.section`
    // height: 75vh;
    justify-content: center;
    @media ${(props) => props.theme.breakpoints.lg} {
        height: auto;
    }
`;

export const SecretIntro = styled.section`

`;
export const SecretIntroTitle = styled.h3`
font-size: 24px;
margin-top: 24px;    
margin-bottom: 24px;
background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
padding-top: 24px;
border-top: 1px solid #80808036;

`;

export const Smith = styled.img`
    max-width: 25vw;
    margin-right: 24px;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const RightSection = styled.div`
    width: fit-content;
`;
// export const SecretItemTitle = styled.h4`

// `;