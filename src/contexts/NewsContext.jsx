import { createContext, useState } from 'react';
import buildUrl from '../utils/urlGenerator';

export const NewsContext = createContext();

const NewsProvider = ({ Children }) => {
	const [headline, setHeadline] = useState(null);
	const [category, setCategory] = useState(null);
	const [search, setSearch] = useState(null);

	const getSearchNews = (keywords) => {
		fetch(buildUrl({ keywords }))
			.then((res) => res.json())
			.then((data) => setSearch(data))
			.catch((error) => alert(error.message));
	};

	const getCategoryNews = (categories) => {
		fetch(buildUrl({ categories }))
			.then((res) => res.json())
			.then((data) => setCategory(data))
			.catch((error) => alert(error.message));
	};

	const getHeadline = () => {
		fetch(buildUrl({ limit: 10 }))
			.then((res) => res.json())
			.then((data) => setHeadline(data))
			.catch((err) => alert(err.message));
	};

	return <NewsContext.Provider value={{}}>{Children}</NewsContext.Provider>;
};

export default NewsProvider;
