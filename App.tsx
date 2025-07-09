import { NavigationContainer } from "@react-navigation/native"
import StackNavigation from "./src/routes/StackNavigation"
import { Provider } from "react-redux"
import store from "./src/redux/store"
import { RealmProvider } from "@realm/react"
import UserSchema from "./src/models/RealmSchema"

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RealmProvider schema={[UserSchema]}>
          <StackNavigation />
        </RealmProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App