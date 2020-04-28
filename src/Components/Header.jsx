import React from "react";
import { createUseStyles, useTheme } from "react-jss";

import icon from "../assets/roll.png";

const useStyle = createUseStyles(({ theme }) => ({
	container: {
		backgroundColor: theme.quaternary,
		color: theme.color,
		position: "fixed",
		top: 0,
		left: 0,
		width: "100%",
		textAlign: "right",
		boxShadow: `${theme.boxShadow} ${theme.shadow}`,
		"& img": {
			margin: "0.2rem",
			padding: "0.5rem",
			width: "1.5rem",
			cursor: "pointer",
			"&:hover": {
				backgroundColor: theme.tertiary,
			},
		},
	},
}));

const Header = () => {
	const { toogleTheme } = useTheme();
	const classes = useStyle();

	return (
		<div className={classes.container}>
			<img src={icon} onClick={toogleTheme} alt="iconTheme" />
		</div>
	);
};

export default Header;
