import { useContext } from 'react';
import { NewsContext } from '../contexts/NewsContext';

const useNews = () => {
	const {
		headline,
		category,
		search,
		getSearchNews,
		getCategoryNews,
		getHeadline,
	} = useContext(NewsContext);
	return {
		headline,
		category,
		search,
		getSearchNews,
		getCategoryNews,
		getHeadline,
	};
};

export default useNews;
