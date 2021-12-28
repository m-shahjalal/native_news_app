import {
	FlatList,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import colors from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import constraints from '../navigation/constraints';
import nanoid from '../utils/nanoid';

const Card = ({ category }) => {
	const navigation = useNavigation();
	const handlePress = (item) => {
		navigation.navigate(constraints.NEWS, item);
	};
	return (
		<FlatList
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			style={styles.container}
			data={category?.data}
			keyExtractor={() => nanoid(8)}
			renderItem={({ item }) => (
				<View style={styles.card}>
					<ImageBackground
						style={styles.image}
						source={{
							uri: item.image,
							height: '100%',
							width: '100%',
						}}>
						<TouchableOpacity
							onPress={() => handlePress(item)}
							activeOpacity={0.8}
							style={styles.overlay}>
							<Text style={styles.title}>{item.title}</Text>
							<View style={styles.info}>
								<Text style={styles.author}>{item.author}</Text>
								<Text style={styles.date}>
									{item.published_at.slice(0, 10)}
								</Text>
							</View>
						</TouchableOpacity>
					</ImageBackground>
				</View>
			)}
		/>
	);
};

export default Card;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},
	card: {
		height: 130,
		borderRadius: 8,
		marginVertical: 8,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'space-between',
		borderRadius: 8,
	},
	image: {
		height: 130,
		overflow: 'hidden',
		borderRadius: 8,
		backgroundColor: colors.primary,
	},
	title: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		margin: 8,
		marginTop: 12,
	},
	info: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 12,
		color: '#ddd',
	},
	author: { color: 'white' },
	date: { color: 'white' },
});
