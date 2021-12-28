import {
	ActivityIndicator,
	SafeAreaView,
	StyleSheet,
	Dimensions,
} from 'react-native';
import { WebView } from 'react-native-webview';
import colors from '../theme/colors';

function NewsScreen({ route }) {
	const params = route?.params;
	return (
		<SafeAreaView style={styles.flexContainer}>
			<WebView
				source={{ uri: params?.url }}
				startInLoadingState={true}
				renderLoading={() => (
					<ActivityIndicator
						color={colors.primary}
						size='large'
						style={styles.loader}
					/>
				)}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	loader: {
		marginTop: 0,
		position: 'absolute',
		top: Dimensions.get('window').height / 2 - 60,
		right: Dimensions.get('window').width / 2 - 15,
	},
	flexContainer: {
		flex: 1,
	},
});
export default NewsScreen;
