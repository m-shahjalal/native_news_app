import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Clip from '../components/Clip';
import LatestNews from '../components/LatestNews';
import Search from '../components/Search';
import buildUrl from '../utils/urlGenerator';

const Home = () => {
	return (
		<View style={{ backgroundColor: 'white', padding: 16 }}>
			<Search />
			<LatestNews />
			<Clip />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	layout: {
		padding: 16,
		backgroundColor: '#fff',
	},
});
