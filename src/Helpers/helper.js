const findWord = (items, name, indexCurrent) => {
	const find = name.toUpperCase();
	let index = items.findIndex((item) => item.name.toUpperCase() === find);

	if (index === -1) {
		index = items.findIndex((item) => item.name.toUpperCase().includes(find));
	}

	return {
		indexCurrent,
		itemCurrent: items[index] || { name: "no matches" },
	};
};

export { findWord };
