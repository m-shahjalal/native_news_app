import {
	StyleSheet,
	Text,
	ImageBackground,
	View,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import constraints from '../navigation/constraints';

export default function NewsLists({ data, heading }) {
	const navigation = useNavigation();
	return (
		<View
			style={[
				styles.card,
				{ width: heading ? 300 : Dimensions.get('window').width - 20 },
			]}>
			<ImageBackground
				imageStyle={{ borderRadius: 8 }}
				source={{ uri: data.image }}
				style={[
					styles.image,
					{
						width: heading
							? 300
							: Dimensions.get('window').width - 32,
					},
				]}>
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={() => navigation.navigate(constraints.NEWS, data)}
					style={styles.overlay}>
					<Text style={styles.title}>{data.title}</Text>
					<Text numberOfLines={2} style={styles.info}>
						{data.description}
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		height: 260,
		borderRadius: 8,
		margin: 8,
	},
	image: {
		height: 260,
		borderRadius: 8,
		overflow: 'hidden',
		margin: 8,
		backgroundColor: colors.secondary,
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		padding: 8,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 8,
		color: 'white',
	},
	info: {
		position: 'absolute',
		bottom: 20,
		right: 8,
		left: 8,
		color: 'white',
		fontFamily: 'sans-serif',
	},
});

// const data = {
// 	content:
// 		'Ulsters United Rugby Championship fixture with Connacht has been postponed due to a number of reported Covid-19 cases within the Ulster squad. The two Irish provinces were due to meet at Kingspan Stadium on Sunday, but the game will now not take pla... [994 chars]',
// 	description:
// 		'Ulsters United Rugby Championship fixture with Connacht has been postponed due to a number of reported Covid-19 cases within the Ulster squad.',
// 	image: 'https://img.rasset.ie/00184ecc-1600.jpg',
// 	publishedAt: '2021-12-24T16:30:00Z',
// 	source: {
// 		name: 'RTE.ie',
// 		url: 'https://www.rte.ie',
// 	},
// 	title: 'Ulster and Connacht clash postponed',
// 	url: 'https://www.rte.ie/sport/rugby/2021/1224/268593-ulster-and-connacht-clash-postponed',
// };
