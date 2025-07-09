import { StackNavigationProp } from "@react-navigation/stack"
import { Text, TouchableOpacity, View } from "react-native"
import { StackNavigationParams } from "../routes/StackNavigation"
import { FlashList } from "@shopify/flash-list"
import MyButton from "../res/components/MyButtons"

type StackNavigationProps = StackNavigationProp<StackNavigationParams, 'dashboard'>
type props = {
    navigation:StackNavigationProps
}
export interface Screens{
    id: number,
    title: String,
    navigate: keyof StackNavigationParams
}


const Dashboard:React.FC<props> = ({navigation}) => {
    const allScreens: Screens[] = [
        {id: 1, title: "Async Storagage", navigate: "asyncStorage"},
        {id: 2, title: "Encrypted Storage", navigate: "encrypted"},
        {id: 3, title: "SQLite", navigate: "sqlite"},
        {id: 4, title: "Realm", navigate: "realm"},
    ]

    return(
        <FlashList  
            data={allScreens}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item: {item: Screens}) => {
                return(
                    <MyButton alignSelf={'start'} buttonName={item.item.title} onPress={() => {navigation.navigate(item.item.navigate)}}/>
                )
        }} />
    )
}

export default Dashboard