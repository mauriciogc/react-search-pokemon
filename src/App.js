import React,  {useState} from "react";
import "./App.css"; //Change extension

import { ThemeProvider } from "react-jss";

const theme = {
	light: {
		background: "#FFF",
		primary: "#FFF",
		secondary: "#f8f8f8",
		tertiary: "#F64360",
		quaternary: "#B9334A",
		color: "#474747",
		boxShadow: "0 3px 5px ",
		shadow: "#CBCBCB",
		container: {
			fontSize: "1rem",
			margin: "auto",
			marginBottom: "1.5rem",
			padding: "1rem ",
		},
	},
	dark: {
		background: "#292C33",
		primary: "#393A3F",
		secondary: "#818491",
		tertiary: "#5B9AF9",
		quaternary: "#3C6BAF",
		color: "#E3E3E3",
		boxShadow: "0 3px 5px ",
		shadow: "#1A1C20",
		container: {
			fontSize: "1rem",
			margin: "auto",
			marginBottom: "1.5rem",
			padding: "1rem ",
		},
	},
};

function App() {
  const [typeTheme, setTypeTheme] = useState("dark");

  const toogleTheme = () => {
    setTypeTheme(typeTheme === "light" ? "dark" : "light");
  };

	return (
		<ThemeProvider theme={{ theme: theme[typeTheme], toogleTheme }}>
			<div className="App"></div>
		</ThemeProvider>
	);
}

export default App;
