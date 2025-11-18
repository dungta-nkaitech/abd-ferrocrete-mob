import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";

const Stack = createNativeStackNavigator();

export default function ProjectsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Projects" component={Projects}/>
            <Stack.Screen name="ProjectDetail" component={ProjectDetail}/>
        </Stack.Navigator>
    );
}
