import { createDrawerNavigator } from "@react-navigation/drawer";
import Projects from "./Projects/Projects";

const Drawer = createDrawerNavigator();

export default function ForemanMenu() {
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
            <Drawer.Screen name="Projects" component={Projects} />
        </Drawer.Navigator>
    );
}