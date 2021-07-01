import styled from "styled-components";

export const Home = styled.div`
  color: ${(props) => props.theme.fontColor};
  max-width: 1100px;
  margin: 0 auto;
`;
export const Nav = styled.div`
  height: 80px;
  display: flex;
  background: ${(props) => props.theme.body};
  flex-direction: row;
  position: fixed;
  top: 0;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  .navigation {
    display: flex;
    align-items: center;
    button {
      outline: none;
      border: none;
      height: 40px;
      padding: 0px 10px;
      background: ${(props) => props.theme.buttonBackground};
      font-size: 20px;
      font-weight: bold;
    }
  }
  .tag {
    padding: 10px;
    font-weight: bold;
  }
  .loading-container {
    display: flex;
    margin-left: 20px;
  }
  .input-container {
    display: flex;
    align-items: center;
    input {
      margin: 0px 10px;
      padding: 10px;
      outline: none;
      border: none;
      height: 40px;
      width: 300px;
      border-color: ${(props) => props.theme.borderColor};
      background: ${(props) => props.theme.inputBackground};
    }
  }
`;
export const List = styled.div`
  margin-top: 80px;
  text-decoration: none;
  list-style: none;
  padding: 0px 10px;
  display: flex;
  width: 100%;
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

export const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const Description = styled.div``;
export const Others = styled.div``;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  .block {
    margin: 20px 0;
    min-height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-bottom: 20px;
    padding: 30px 50px;
    text-align: center;
    border-radius: 4px;
  }
  .inline {
    margin: 0px;
    padding: 0px;
  }
`;

export const Error = styled.div``;

export const Switch = styled.div`
  * {
    transition: 1s all;
  }

  input[type="checkbox"] + label {
    background-color: #333;
    width: 70px;
    height: 20px;
    display: block;
    padding: 5px;
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    z-index: 5;
    cursor: pointer;
    cursor: hand;
    position: relative;
  }

  .button {
    width: 30px;
    position: absolute;
    transform: translateY(-10px);
    height: 30px;
    background: #f4f4f4;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked + label {
    background-color: #f3f3f3;
  }
  input[type="checkbox"]:checked + label .button {
    background: #555;
    margin-left: 30px;
  }
`;
