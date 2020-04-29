import React, { useCallback } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(({ theme }) => ({
	container: {
		...theme.container,
		background: theme.primary,
		boxShadow: `${theme.boxShadow} ${theme.shadow}`,
	},
	h3: {
		fontWeight: "400",
		color: theme.color,
	},
	button: {
		outline: "none",
		padding: "0.5rem",
		fontSize: "1rem",
		border: "0px solid",
		borderRadius: "0.3rem",
		color: "white",
		background: theme.tertiary,
		cursor: "pointer",
		marginLeft: "0.5rem",
		"&:hover": { background: theme.quaternary },
		"&:active": { background: theme.tertiary },
		"&[disabled]": {
			opacity: 0.3,
		},
	},
	ul: {
		backgroundColor: theme.secondary,
		listStyleType: "none",
		margin: "1rem 0",
		padding: "0",
		textAlign: "left",
		color: theme.color,
		"& > li": {
			fontWeight: "200",
			padding: "0.5rem",
			marginTop: "3px",
			cursor: "pointer",
			"&:hover": {
				background: theme.tertiary,
			},
			"&.active": {
				color: "#FFF",
				backgroundColor: theme.tertiary,
			},
		},
	},
}));

const SearchList = ({ list, handleEvent, indexCurrent }) => {
	const classes = useStyles();
	const handlerPrev = useCallback(
		(e) => {
			e.preventDefault();
			handleEvent({ type: "PREV" });
		},
		[handleEvent]
	);
	const handlerNext = useCallback(
		(e) => {
			e.preventDefault();
			handleEvent({ type: "NEXT" });
		},
		[handleEvent]
	);
	const handlerGoto = useCallback(
		(e) => {
			const index = Number(e.target.dataset.index);
			handleEvent({ type: "GOTO", index });
		},
		[handleEvent]
	);
	if (!list.length) return null;

	return (
		<div className={classes.container}>
			<h2 className={classes.h3}>List of already search pokemon</h2>
			<button
				className={classes.button}
				onClick={handlerPrev}
				disabled={indexCurrent <= 0 ? "disabled" : ""}
			>
				{"Prev"}
			</button>
			<button
				className={classes.button}
				onClick={handlerNext}
				disabled={indexCurrent >= list.length - 1 ? "disabled" : ""}
			>
				{"Next"}
			</button>
			<ul className={classes.ul}>
				{list.map((item, index) => (
					<li
						className={index === indexCurrent ? "active" : ""}
						key={index}
						data-index={index}
						onClick={handlerGoto}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SearchList;
