import { Button, FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import MyTextInput from "../res/components/MyTextInout"
import MyButton from "../res/components/MyButtons"
import { FlashList } from "@shopify/flash-list"
import { useQuery, useRealm } from "@realm/react" 
import { useState } from "react"
import UserSchema, { insetData } from "../models/RealmSchema"

const RealmScreen:React.FC = () => {
    const users = useQuery(UserSchema)
    const realm = useRealm()
    const [name, setName] = useState("")
    const [age, setAge] = useState<number>(0)

    return(
        <View style={{flex: 1}}>
            <MyTextInput keyboardType="default" placeHolder="User Name" value={name} onChange={(text) => {setName(text)}}/>
            <MyTextInput keyboardType="number-pad" placeHolder="User Age" value={age} onChange={(text) => {setAge(text)}}/>
            <MyButton buttonName={"Insert User"} alignSelf="center" onPress={() => {
                const parsedAge = parseInt(age.toString());
                const finalAge = isNaN(parsedAge) ? 0 : parsedAge;
                realm.write(() => {
                    realm.create("UsersDetail", insetData(name, finalAge))
                });
                setName("");
                setAge(0);
            }}/>
            <MyButton buttonName={"Delete User"} alignSelf="center" onPress={() => {}}/>

            <FlashList
            data={[...users.sorted('createdAt')]}
            estimatedItemSize={40}
            keyExtractor={(item) => item._id.toHexString()}
            renderItem={({ item }) => (
                <View style={{ paddingVertical: 10, paddingHorizontal: 16, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{ fontSize: 16 }}>{item.age} — {item.name}</Text>
                <TouchableWithoutFeedback onPress={() => {realm.write(() => {realm.delete(item)})}}><Text style={{backgroundColor: 'red', color:'white', padding:5, borderRadius: 5}}>Delete</Text></TouchableWithoutFeedback>
                </View>
            )}
            />
        </View>
    )
}

export default RealmScreen