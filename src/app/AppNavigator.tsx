import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import SideMenu from '../components/drawer/SideMenu';
import Dashboard from '../screens/DashboardScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <SideMenu {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerType: 'front',                    // overlay, không đẩy Home
                    overlayColor: 'rgba(0,0,0,0.55)',       // nền mờ
                    drawerStyle: {
                        backgroundColor: 'transparent',     // để thấy bo tròn panel bên trong
                        width: '78%',
                    },
                    swipeEdgeWidth: 24,
                }}
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                {/* thêm các Screen khác khi bạn có */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
