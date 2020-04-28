import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(true);
	options = JSON.stringify(options);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url, JSON.parse(options));
				const json = await res.json();
				setResponse(json);
				setLoading(false);
			} catch (error) {
				console.log("-->", error);
			}
		};
		fetchData();
	}, [url, options]);
	return { response, loading };
};

export default useFetch;
