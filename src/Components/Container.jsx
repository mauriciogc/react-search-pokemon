import React, { useReducer } from "react";
import { createUseStyles } from "react-jss";
import Form from "./Form";

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

const a = {
	search: ["pikachuu"],
	indexCurrent: 0,
	itemCurrent: { name: "no matches" },
};

const reducerList = (state, action) => {
	let newState = {};

	switch (action.type) {
		case "SEARCH":
			const search = [...state.search, action.name];
			const indexCurrent = search.length - 1;

			const pokemon = state.items.findIndex(
				(item) => item.name.toUpperCase() === action.name.toUpperCase()
			);

			newState = {
				search,
				indexCurrent,
				itemCurrent: state.items[pokemon] || { name: "no matches" },
			};
			break;
		default:
			break;
	}
	console.log(newState);
	return { ...state, ...newState };
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
				<Form handleEvent={dispatchList} />
				<br />
				Card
			</div>
			<div>SearchList</div>
		</div>
	);
};

export default Container;
