import { StyleProp, TextStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IconProp{
    name: string;
    iconStyle?: StyleProp<TextStyle>;
    size: number;
    color: string;
}
const CoreIcon = ({name,size, color, iconStyle}: IconProp) => {
    return(
      <Ionicons style={iconStyle} name={name} size={size} color={color}/>
    )
  };

export default CoreIcon;