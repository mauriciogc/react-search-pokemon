import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(({ theme }) => ({
	container: {
		...theme.container,
		background: theme.primary,
		boxShadow: `${theme.boxShadow} ${theme.shadow}`,
	},
	fileInput: {
		background: theme.tertiary,
		padding: "0 1rem",
	},
	text: {
		color: theme.color,
		outline: "none",
		fontSize: "1rem",
		width: "100%",
		height: "3rem",
		background: "transparent",
		border: "0px",
		"&::placeholder": {
			color: theme.quaternary,
		},
	},
}));

const Form = ({ handleEvent }) => {
	const classes = useStyles();
	const inputNameRef = useRef();
	const handleSubmit = useCallback(
		(e) => {
			e.preventDefault();

			const name = inputNameRef.current.value;
			if (name.trim()) {
				handleEvent({ type: "SEARCH", name });
				inputNameRef.current.value = "";
			}
		},
		[handleEvent]
	);
	return (
		<form className={classes.container} onSubmit={handleSubmit}>
			<div className={classes.fileInput}>
				<input
					type="text"
					ref={inputNameRef}
					className={classes.text}
					placeholder="Type Pokemon..."
				/>
			</div>
		</form>
	);
};

Form.propTypes = {
	handleEvent: PropTypes.func.isRequired,
};

export default Form;
