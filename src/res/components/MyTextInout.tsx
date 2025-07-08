import { KeyboardTypeOptions, TextInput } from "react-native"


interface MyTextInputProps {
    placeHolder: string,
    value: string,
    onChange: (text: any) => void,
    keyboardType: KeyboardTypeOptions
}
const MyTextInput: React.FC<MyTextInputProps> = (props) => {
    return (
        <TextInput keyboardType={props.keyboardType} value={props.value} placeholder={props.placeHolder} onChangeText={props.onChange} style={{borderColor: 'gray', borderWidth: 0.8, marginHorizontal: 15, marginVertical: 5, borderRadius: 5, padding: 8}}/>
    )
}

export default MyTextInput