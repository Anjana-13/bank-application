import { KeyboardTypeOptions, StyleProp, Text, TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { styles } from "./CoreTextInput.styles";

interface CoreTextInputProps {
    value: string;
    onChangeFunction: (value:string) => void;
    placeholder: string;
    keyboardType?:KeyboardTypeOptions;
    maxLength?:number;
    extraStyle?: StyleProp<ViewStyle>;
    secureTextEntry?: boolean;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
}

const CoreTextInput = ({onChangeFunction, value,placeholder,keyboardType,maxLength,extraStyle,secureTextEntry,autoCapitalize}:CoreTextInputProps) => {
    return (
        <View style={[styles.inputTextLayout,extraStyle]}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChangeFunction(value)}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={'#4d4d4f'}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
        />
      </View>
    )
}

export default CoreTextInput;