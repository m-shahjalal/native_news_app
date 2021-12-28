import { useEffect } from 'react';
import nanoid from '../utils/nanoid';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import useFetch from '../hooks/useFetch';
import NewsLists from '../components/NewsLists';
import colors from '../theme/colors';

const Search = ({ route, navigation }) => {
	const { params } = route;
	const { search, getSearchNews, clearNews } = useFetch();
	useEffect(() => {
		getSearchNews(params);
		return () => clearNews();
	}, []);

	useEffect(() => {
		search?.data?.length !== undefined &&
			navigation.setOptions({
				headerTitle: () => (
					<Text style={styles.header}>
						Search for{' '}
						<Text style={styles.searchText}>{params}</Text>
					</Text>
				),
				headerTitleAlign: 'center',
			});
	}, [search?.data]);

	if (search?.data?.length === 0) {
		return (
			<View style={styles.notFoundContainer}>
				<Text style={styles.notFound}>No news is good news</Text>
			</View>
		);
	}

	if (search?.data?.length === undefined) {
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
			data={search.data}
			keyExtractor={() => nanoid(8)}
			renderItem={({ item }) => <NewsLists margin={false} data={item} />}
		/>
	);
};

export default Search;

const styles = StyleSheet.create({
	container: {
		marginVertical: 8,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	notFoundContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	notFound: {
		fontWeight: 'bold',
		fontSize: 24,
		color: colors.primary,
	},
	header: {
		fontSize: 22,
	},
	searchText: {
		color: colors.primary,
	},
});
