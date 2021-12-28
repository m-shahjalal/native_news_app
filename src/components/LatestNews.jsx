import { useNavigation } from '@react-navigation/native';
import nanoid from '../utils/nanoid';
import { useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import useFetch from '../hooks/useFetch';
import constraints from '../navigation/constraints';
import colors from '../theme/colors';
import NewsLists from './NewsLists';

const LatestNews = () => {
	const { headline, getHeadline } = useFetch();
	const navigation = useNavigation();
	const handlePress = () => navigation.navigate(constraints.SEE_ALL);
	useEffect(() => getHeadline({ limit: 5 }), []);
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.title}>Latest News</Text>
				<TouchableOpacity
					onPress={handlePress}
					activeOpacity={0.8}
					style={styles.more}>
					<Text style={styles.see}>See All</Text>
					<Icons
						style={styles.icon}
						name='arrowright'
						size={12}
						color={colors.secondary}
					/>
				</TouchableOpacity>
			</View>
			<View>
				{headline?.data ? (
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						showsVerticalScrollIndicator={false}
						keyExtractor={() => nanoid(8)}
						data={headline?.data}
						renderItem={({ item }) => (
							<NewsLists heading data={item} />
						)}
					/>
				) : (
					<ActivityIndicator
						style={styles.loader}
						size='large'
						color='black'
					/>
				)}
			</View>
		</>
	);
};

export default LatestNews;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 12,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},

	more: {
		flexDirection: 'row',
		color: colors.secondary,
		fontSize: 16,
	},
	see: {
		color: colors.secondary,
		marginHorizontal: 6,
	},
	icon: {
		marginTop: 3,
	},
	row: {
		height: 280,
	},
	loader: {
		flex: 1,
		height: 280,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 24,
	},
});
