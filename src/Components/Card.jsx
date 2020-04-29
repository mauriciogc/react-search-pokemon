import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import Img from "react-image";
import loading from "../assets/loading.gif";
import error from "../assets/error.gif";

const useStyles = createUseStyles(({ theme }) => ({
	container: {
		...theme.container,
		background: theme.primary,
		boxShadow: `${theme.boxShadow} ${theme.shadow}`,
		color: theme.color,
	},
	h1: {
		fontWeight: "400",
	},
	imageContainer: {
		backgroundColor: theme.secondary,
		height: "200px",
		padding: "1.5rem 0",
		"& img": {
			height: "100%",
		},
	},
}));

const Card = ({ item }) => {
	const classes = useStyles();
	if (!item) return null;

	return (
		<div className={classes.container}>
			<h1 className={classes.h1}>{item.name.toUpperCase()}</h1>
			<div className={classes.imageContainer}>
				<Img
					src={item.img}
					loader={<img src={loading} alt={item.name} />}
					unloader={<img src={error} alt={item.name} />}
				/>
			</div>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
		fullImg: PropTypes.string,
	}),
};

export default Card;
