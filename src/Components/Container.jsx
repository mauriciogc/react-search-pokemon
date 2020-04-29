import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import Form from "./Form";
import Card from "./Card";
import SearchList from "./SearchList";

import { findWord } from "../Helpers/helper";

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
	let newState = {};

	switch (action.type) {
		case "SEARCH":
			const search = [...state.search, action.name];
			const iCurrent = search.length - 1;
			const detail = findWord(state.items, action.name, iCurrent);
			newState = { search, ...detail };
			break;
		case "PREV":
			if (state.indexCurrent > 0) {
				const iCurrent = state.indexCurrent - 1;
				newState = findWord(state.items, state.search[iCurrent], iCurrent);
			}
			break;
		case "NEXT":
			if (state.indexCurrent < state.search.length - 1) {
				const iCurrent = state.indexCurrent + 1;
				newState = findWord(state.items, state.search[iCurrent], iCurrent);
			}
			break;
		case "GOTO":
			{
				const iCurrent = action.index;
				newState = findWord(state.items, state.search[iCurrent], iCurrent);
			}
			break;
		default:
			break;
	}
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
				<Card item={list.itemCurrent} />
			</div>
			<div>
				<SearchList
					list={list.search}
					indexCurrent={list.indexCurrent}
					handleEvent={dispatchList}
				/>
			</div>
		</div>
	);
};

Container.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
			fullImg: PropTypes.string,
		}).isRequired
	).isRequired,
};

export default Container;
