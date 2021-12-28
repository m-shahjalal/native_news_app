import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';
import constraints from '../navigation/constraints';

const Search = () => {
	const [query, setQuery] = useState('');
	const navigation = useNavigation();
	const handlePress = () => {
		query && navigation.navigate(constraints.SEARCH, query);
	};

	useEffect(() => {}, []);
	return (
		<View style={styles.search}>
			<View style={styles.inputSection}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => setQuery(text)}
				/>
			</View>
			<TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
				<FontAwesome
					style={styles.notification}
					name='search'
					size={20}
					color='white'
				/>
			</TouchableOpacity>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	search: {
		height: 36,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10,
	},
	inputSection: {
		height: 36,
		flexDirection: 'row',
		borderColor: '#F0F1FA',
		flex: 1,
		marginRight: 8,
		borderWidth: 2,
		borderRadius: 50,
		position: 'relative',
	},
	input: {
		width: '100%',
		paddingHorizontal: 12,
	},
	fontAwesome: {
		position: 'absolute',
		right: 10,
		top: 6,
	},
	notification: {
		backgroundColor: colors.primary,
		borderRadius: 20,
		height: 36,
		width: 36,
		padding: 7,
		paddingLeft: 8,
		marginTop: -1,
	},
});
