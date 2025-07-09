import { createStackNavigator } from "@react-navigation/stack"
import Dashboard from "../screens/Dashboard";
import AsyncStoragageScreen from "../screens/AsyncStorage";
import EncryptedStoragageScreen from "../screens/EncryptedStorage";
import SqLiteScreen from "../screens/Sqlite";
import RealmScreen from "../screens/Realm";


export type StackNavigationParams = {
    dashboard: undefined,
    asyncStorage: undefined
    encrypted: undefined
    sqlite: undefined
    realm: undefined
}
const StackNavigation:React.FC = () => {
    const Stack = createStackNavigator<StackNavigationParams>();

    return (
        <Stack.Navigator>
            <Stack.Screen name='dashboard' component={Dashboard}/>
            <Stack.Screen name='asyncStorage' component={AsyncStoragageScreen}/>
            <Stack.Screen name='encrypted' component={EncryptedStoragageScreen}/>
            <Stack.Screen name='sqlite' component={SqLiteScreen}/>
            <Stack.Screen name='realm' component={RealmScreen}/>
        </Stack.Navigator>
    )
}

export default StackNavigation