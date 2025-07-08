import { Text, View, TouchableOpacity } from "react-native";

interface MyButtonProps {
  buttonName: String,
  onPress?: () => void,
  alignSelf: string
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
      <View
        style={{
          paddingHorizontal: 16,
          height: 50,
          borderRadius: 10,
          backgroundColor: '#007bff',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf:props.alignSelf === "center" ? 'center' : 'flex-start',
          marginTop: 10,
          marginLeft: 10
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>{props.buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
