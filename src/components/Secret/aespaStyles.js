import styled from "styled-components";

export const Img = styled.img`
    height: auto;
    width: 100%;
`;
export const Tag = styled.div`
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 36px;
    font-style: italic;
    border: 2px solid;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 28px;
    }
    @media (max-width: 300px) {
        font-size: 24px;
    }
`;
export const Card = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  overflow: hidden;
  line-height: 0;
  margin-top: 10px;
  margin-bottom: 10px;
`;