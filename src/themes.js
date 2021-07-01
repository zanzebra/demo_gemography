import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#333",
  inputBackground: "#f3f3f3",
  buttonBackground: "#f3f3f3",
};

export const darkTheme = {
  body: "#333",
  fontColor: "#fff",
  borderColor: "#ccc",
  inputBackground: "#555",
  buttonBackground: "#555",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    border-color: ${(props) => props.theme.borderColor};
	}
`;
