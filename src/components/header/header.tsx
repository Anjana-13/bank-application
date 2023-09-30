import { TouchableOpacity, View } from "react-native"
import { styles } from "./header.styles"
import CoreIcon from "../icon/icon"
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { navigationRef } from "../../utils";


interface HeaderProp {
    navigation:  any;
}
const Header = ({navigation}:HeaderProp) => {
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity 
                onPress={() => navigationRef.goBack()}>
                <CoreIcon name="chevron-back-outline" size={30} color='#212721' iconStyle={styles.backButton} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Header;