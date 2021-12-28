import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from '../Screen/Home';

export default function Navigator() {
	return (
		<View style={styles.layout}>
			<StatusBar
				animated={true}
				backgroundColor='white'
				barStyle='dark-content'
			/>
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	layout: {
		margin: 16,
	},
});
