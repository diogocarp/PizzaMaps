import { Text, View } from "react-native"
import Sidebar from "../components/Sidebar"

const SettingScreen = () => {

return(
    <View style={{ flex: 2, flexDirection: 'row' }}>
    <Sidebar/>
        <Text>Tela de Configuração</Text>
    </View>

)

}

export default SettingScreen