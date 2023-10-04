import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import {CoreButton, CoreTextInput, Header} from '../../../components';
  import {navigationRef} from '../../../utils';
  import {useState} from 'react';
  import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { styles } from '../styles/pin-setup.styles';

  
  export interface PinSetupProps {
    navigation: NavigationProp<ParamListBase>;
  }
  
  const PinSetup = (props: PinSetupProps) => {
    return(
        <View style={styles.container}>
            <Text>Hi</Text>
        </View>
    )
  }

  export default PinSetup;