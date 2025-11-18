import { createDrawerNavigator } from "@react-navigation/drawer";
import ProjectsStack from "./Projects/ProjectsStack";
import SchedulingStack from "./Scheduling/SchedulingStack";

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
            <Drawer.Screen name="ProjectStack" component={ProjectsStack} />
            <Drawer.Screen name="SchedulingStack" component={SchedulingStack} />
        </Drawer.Navigator>
    );
}