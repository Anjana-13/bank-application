import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native"
import { styles } from "./CoreButton.styles";

interface ButtonProp {
    buttonLabel: string;
    onPress: ()=> void;
    buttonType?: string;
    buttonBodyStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    textStyle?: StyleProp<ViewStyle>;
}

const CoreButton = ({onPress, buttonLabel, buttonType,buttonBodyStyle,disabled, textStyle}:ButtonProp) => {

    const buttonStyle = () => {
        return[
            styles.container,
            buttonType === 'primary'
             ? disabled 
             ? styles.disabledPrimaryButton 
             : styles.primaryButton
              : disabled 
              ? styles.disabledSecondaryButton 
              : styles.secondaryButton, 
              buttonBodyStyle,
        ];
    };

    const buttonTextStyle = () => {
        return[
            styles.text,
            buttonType === 'primary'
             ? disabled 
             ? styles.disabledPrimaryText 
             : styles.primaryText
              : disabled 
              ? styles.disabledSecondaryText
              : styles.secondaryText, 
              textStyle,
        ];
    };

    return (
        <TouchableOpacity style={buttonStyle()} onPress={onPress} disabled={disabled}>
            <Text style={buttonTextStyle()}>{buttonLabel}</Text>
        </TouchableOpacity>
    )
};

export default CoreButton;