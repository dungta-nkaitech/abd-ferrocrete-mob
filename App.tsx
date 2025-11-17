import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import Dashboard from './src/screens/DashboardScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './src/screens/Auth/Login';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AppDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#1e293b' },
                drawerType: 'front',
                headerTintColor: '#fff',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#94a3b8',
                drawerStyle: { backgroundColor: '#0f172a' },
            }}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Dashboard" component={Dashboard} />
        </Drawer.Navigator>
    );
}

export default function App() {
    const [loaded] = Font.useFonts({
        'CenturyGothic': require('./assets/fonts/centurygothic.ttf'),
        'CenturyGothic-Bold': require('./assets/fonts/centurygothic_bold.ttf'),
    });

    if (!loaded) return <AppLoading />;

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ headerShown: false }}
            >
                {/* Màn Login đứng riêng, không có Drawer */}
                <Stack.Screen name="Login" component={Login} />
                {/* Sau khi login xong sẽ vào AppDrawer */}
                <Stack.Screen name="MainApp" component={AppDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
