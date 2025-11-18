import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Scheduling from "./Scheduling";

const Stack = createNativeStackNavigator();

export default function SchedulingStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Scheduling" component={Scheduling}/>
        </Stack.Navigator>
    );
}
