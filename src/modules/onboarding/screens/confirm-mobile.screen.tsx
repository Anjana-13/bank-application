import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native"

export interface SignUpMainProps {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<{
      params: {
          phoneNumber: any
      }
    }>;
  }

const ConfirmMobile = (props:SignUpMainProps) => {
    return(
        <View>
            <Text style={{color: 'black'}}>{props.route.params.phoneNumber}</Text>
        </View>
    )
};

export default ConfirmMobile;