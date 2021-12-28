import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';

export default function Top() {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>NEWS</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: colors.primary,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
});
