import styled from "styled-components";

export const Nav = styled.div`
  height: 80px;
`;
export const Home = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
export const List = styled.div`
  text-decoration: none;
  list-style: none;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  & > * {
    margin: 20px 0;
  }
`;

export const Image = styled.img`
  width: 200px;
  object-fit: cover;
`;
export const ImageContainer = styled.div`
  background: transparent;
  padding: 10px;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  width: ${(props) => (props.flexBasis ? props.flexBasis : "100%")};
  @media (max-width: 500px) {
    width: 100%;
  }
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const Others = styled.div``;
