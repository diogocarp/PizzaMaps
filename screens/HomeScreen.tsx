import { Text, View } from "react-native";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Sidebar />
        <Text>Tela Inicial</Text>
      </View>
    );
  };
  
  export default HomeScreen;
  