import nanoid from '../utils/nanoid';
import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import useFetch from '../hooks/useFetch';
import colors from '../theme/colors';
import Card from './Card';

const categories = [
	'general',
	'business',
	'entertainment',
	'health',
	'science',
	'sports',
	'technology',
];

const Clip = () => {
	const [select, setSelect] = useState(categories[0]);
	const { getCategoryNews, category } = useFetch();
	const handlePress = (name) => {
		setSelect(name);
		getCategoryNews({ categories: name });
	};

	useEffect(() => getCategoryNews({ categories: categories[0] }), []);

	return (
		<View style={styles.container}>
			<View style={styles.clip}>
				<FlatList
					style={styles.list}
					horizontal
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					keyExtractor={() => nanoid(8)}
					data={categories}
					renderItem={({ item }) => (
						<Text
							onPress={() => handlePress(item)}
							style={
								select === item
									? [styles.item, styles.active]
									: styles.item
							}>
							{item}
						</Text>
					)}
				/>
			</View>
			{category?.data ? (
				<Card category={category} />
			) : (
				<ActivityIndicator
					style={styles.loader}
					size='large'
					color='black'
				/>
			)}
		</View>
	);
};

export default Clip;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'stretch',
		backgroundColor: '#fff',
	},
	clip: {
		marginTop: 24,
	},
	list: {
		marginBottom: 10,
	},
	item: {
		color: '#2E0505',
		marginRight: 12,
		borderRadius: 30,
		height: 24,
		fontSize: 16,
		paddingHorizontal: 10,
		borderColor: '#F0F1FA',
		borderWidth: 2,
	},
	active: {
		backgroundColor: colors.primary,
		color: 'white',
		borderColor: colors.primary,
	},
	loader: {
		flex: 1,
		marginTop: 24,
	},
});
