import {Text, TextInput, View, Keyboard} from 'react-native';
import {CoreButton, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/enter-mobile.styles';
import {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface EnterMobileProps {
  navigation: NavigationProp<ParamListBase>;
}

const EnterMobile = ({navigation}: EnterMobileProps) => {
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.container}>
      <Header navigation={navigationRef} />
     
    </View>
  );
};

export default EnterMobile;
