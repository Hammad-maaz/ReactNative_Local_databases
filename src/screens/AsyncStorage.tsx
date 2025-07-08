import { Text, TextInput, View } from "react-native"
import MyTextInput from "../res/components/MyTextInout"
import MyButton from "../res/components/MyButtons"
import { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
const AsyncStoragageScreen:React.FC = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    // Save Data
    const saveData = async() => {
        await AsyncStorage.setItem("username", userName)
        await AsyncStorage.setItem("password", password)
        setUserName("")
        setPassword("")
    }

    // Get Data
    const getData = async () => {
        setUserName(await AsyncStorage.getItem("username") ?? "NO USER NAME");
        setPassword(await AsyncStorage.getItem("password") ?? "NO PASSWORD");
    }

    const deleteData = async () => {
        await AsyncStorage.clear()
        setUserName("")
        setPassword("")
    }

    return(
        <View style={{flex: 1, marginVertical: 5}}>
            <Text style={{fontSize: 18, fontWeight: "bold", textAlign: "center"}}>AsyncStoragage Testing</Text>
            <MyTextInput keyboardType="default" placeHolder="Username" value={userName} onChange={(text)=> {setUserName(text)}}/>
            <MyTextInput keyboardType='visible-password' placeHolder="password" value={password} onChange={(text) => {setPassword(text)}}/>
            <MyButton alignSelf={"center"} buttonName={"Save Data"} onPress={()=> {saveData()}}/>
            <MyButton alignSelf={"center"} buttonName={"Get Data"} onPress={()=> {getData()}}/>
            <MyButton alignSelf={"center"} buttonName={"Delete Data"} onPress={()=> {deleteData()}}/>

        </View>
    )
}

export default AsyncStoragageScreen