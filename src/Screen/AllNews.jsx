import nanoid from '../utils/nanoid';
import { useEffect } from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import NewsLists from '../components/NewsLists';
import useFetch from '../hooks/useFetch';

const AllNews = () => {
	const { news, getNews, clearNews } = useFetch();
	useEffect(() => {
		getNews();
		return () => clearNews();
	}, []);

	if (news?.data?.length === undefined) {
		return (
			<ActivityIndicator
				style={styles.loader}
				size='large'
				color='black'
			/>
		);
	}
	return (
		<FlatList
			style={styles.container}
			data={news.data}
			keyExtractor={() => nanoid(8)}
			renderItem={({ item }) => <NewsLists data={item} />}
		/>
	);
};

export default AllNews;

const styles = StyleSheet.create({});
