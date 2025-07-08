import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { createTable, deleteUser, getUsers, insertUser } from "../res/functions/sqlite.ts"
import MyTextInput from "../res/components/MyTextInout"
import MyButton from "../res/components/MyButtons"
import { FlashList } from "@shopify/flash-list"
import { AppDispatch, RootState } from "../redux/store.tsx"
import { useDispatch, useSelector } from "react-redux"
import { updateUsers } from "../redux/sqlite_slice.tsx"

const SqLiteScreen:React.FC = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const selector = useSelector((state: RootState) => state.sqlite.value)
    const dispatch = useDispatch<AppDispatch>()

    const handleGetUsers = async () => {
    const fetchedUsers = await getUsers();
    console.log("Fetched users", fetchedUsers);
    dispatch(updateUsers(fetchedUsers))
  };

    useEffect(() => {
        createTable();
    }, [])

    return(
        <View style={{flex: 1}}>
            <MyTextInput keyboardType="default" placeHolder="User Name" value={name} onChange={(text) => {setName(text)}}/>
            <MyTextInput keyboardType="number-pad" placeHolder="User Age" value={age.toString()} onChange={(text) => {setAge(text)}}/>
            <MyButton buttonName={"Insert User"} alignSelf="center" onPress={() => {insertUser(name, age)}}/>
            <MyButton buttonName={"Get Users"} alignSelf="center" onPress={() => {handleGetUsers()}}/>
            <MyButton buttonName={"Delete User"} alignSelf="center" onPress={() => {deleteUser(1)}}/>

            <FlashList
            data={selector}
            estimatedItemSize={40}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ paddingVertical: 10, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 16 }}>{item.id} — {item.name}</Text>
                </View>
            )}
            ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No users found</Text>}
            />
        </View>
    )
}

export default SqLiteScreen