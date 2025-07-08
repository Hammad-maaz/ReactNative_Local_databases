import { createStackNavigator } from "@react-navigation/stack"
import Dashboard from "../screens/Dashboard";
import AsyncStoragageScreen from "../screens/AsyncStorage";
import EncryptedStoragageScreen from "../screens/EncryptedStorage";
import SqLiteScreen from "../screens/Sqlite";


export type StackNavigationParams = {
    dashboard: undefined,
    asyncStorage: undefined
    encrypted: undefined
    sqlite: undefined
}
const StackNavigation:React.FC = () => {
    const Stack = createStackNavigator<StackNavigationParams>();

    return (
        <Stack.Navigator>
            <Stack.Screen name='dashboard' component={Dashboard}/>
            <Stack.Screen name='asyncStorage' component={AsyncStoragageScreen}/>
            <Stack.Screen name='encrypted' component={EncryptedStoragageScreen}/>
            <Stack.Screen name='sqlite' component={SqLiteScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigation