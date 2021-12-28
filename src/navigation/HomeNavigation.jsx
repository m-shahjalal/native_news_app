import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import constraints from './constraints';
import NewsScreen from '../Screen/NewsScreen';
import Search from '../Screen/Search';
import AllNews from '../Screen/AllNews';
import colors from '../theme/colors';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
	return (
		<>
			<StatusBar
				animated={true}
				backgroundColor='white'
				barStyle='dark-content'
			/>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						options={{ headerShown: false }}
						name={constraints.HOME}
						component={Home}
					/>
					<Stack.Screen
						name={constraints.NEWS}
						component={NewsScreen}
					/>
					<Stack.Screen
						name={constraints.SEARCH}
						component={Search}
					/>
					<Stack.Screen
						name={constraints.SEE_ALL}
						options={{
							headerTitle: () => (
								<Text
									style={{
										fontSize: 24,
										fontWeight: '300',
										color: colors.primary,
									}}>
									All News Headlines
								</Text>
							),
							headerTitleAlign: 'center',
						}}
						component={AllNews}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default HomeNavigation;

const styles = StyleSheet.create({});
