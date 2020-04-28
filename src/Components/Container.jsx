import React, { useReducer } from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles(({ theme }) => ({
	container: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "center",
		alignItems: "flex-start",
		paddingTop: "3rem",
		height: "100%",
		"& > div": {
			width: "350px",
			padding: "10px",
			"@media (max-width: 767px)": {
				width: "100%",
			},
		},
	},
}));

const reducerList = (state, action) => {
	return state;
};

const Container = ({ items }) => {
	const classes = useStyle();
	const [list, dispatchList] = useReducer(reducerList, {
		items,
		search: [],
		itemCurrent: null,
		indexCurrent: -1,
	});

	return (
		<div className={classes.container}>
			<div>
				Formulario
				<br />
				Card
			</div>
			<div>SearchList</div>
		</div>
	);
};

export default Container;
