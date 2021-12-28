import { useState, useEffect } from 'react';
import buildUrl from '../utils/urlGenerator';

const useFetch = () => {
	const [headline, setHeadline] = useState(null);
	const [category, setCategory] = useState(null);
	const [search, setSearch] = useState(null);
	const [news, setNews] = useState(null);

	const getCategoryNews = (payload) => {
		setCategory(null);
		fetch(buildUrl(payload))
			.then((res) => res.json())
			.then((data) => setCategory(data))
			.catch((err) => alert(err.message));
	};

	const getHeadline = (payload) => {
		setHeadline(null);
		fetch(buildUrl(payload))
			.then((res) => res.json())
			.then((data) => setHeadline(data))
			.catch((err) => alert(err.message));
	};

	const getSearchNews = (keywords) => {
		fetch(buildUrl({ keywords }))
			.then((res) => res.json())
			.then((data) => setSearch(data))
			.catch((error) => alert(error.message));
	};

	const getNews = () => {
		fetch(buildUrl({ limit: 50 }))
			.then((res) => res.json())
			.then((data) => setNews(data))
			.catch((err) => alert(err.message));
	};

	const clearNews = () => {
		setNews(null);
		setSearch(null);
	};

	return {
		headline,
		category,
		search,
		news,
		getCategoryNews,
		getHeadline,
		getSearchNews,
		getNews,
		clearNews,
	};
};

export default useFetch;
