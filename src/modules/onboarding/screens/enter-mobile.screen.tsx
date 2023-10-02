import {Text, TextInput, View, Keyboard} from 'react-native';
import {CoreButton, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/enter-mobile.styles';
import {useState} from 'react';
import {NavigationProp, ParamListBase, RouteProp} from '@react-navigation/native';

export interface EnterMobileProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{
    params: {
      isSignUp : boolean;
    };
  }>;
}



const EnterMobile = (props: EnterMobileProps) => {
  console.log(props?.route?.params?.isSignUp);
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.container}>
      <Header navigation={navigationRef} />
      <View style={styles.mobile}>
        <Text style={styles.enterMobile}>{props?.route?.params?.isSignUp ? 'Create an Account' : 'Log in'}</Text>
        <Text style={styles.verificationCode}>
          {'Enter your Mobile number and Password to Sign up'}
        </Text>
        <View style={styles.inputTextLayout}>
        <TextInput
          style={styles.input}
          onChangeText={value => onChangeNumber(value)}
          value={number}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          placeholderTextColor={'#4d4d4f'}
          maxLength={10}
        />
      </View>
      </View>
    </View>
  );
};

export default EnterMobile;
