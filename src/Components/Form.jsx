import React, { useRef } from "react";
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
	const handleSubmit = (e) => {
		e.preventDefault();

		const name = inputNameRef.current.value;
		if (name.trim()) {
			handleEvent({ type: "SEARCH", name });
		}
	};

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

export default Form;
