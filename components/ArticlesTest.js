import React, { useState, useEffect } from "react";
import axios from "axios";

const ArticlesTest = () => {
	const API_URL = "http://localhost:5000/api/articles";
	const [articles, getArticles] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			let results = axios();
		};
	});
	return <div></div>;
};

export default ArticlesTest;
