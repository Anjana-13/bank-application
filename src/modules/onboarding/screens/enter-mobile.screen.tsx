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
      <View style={styles.mobile}>
        <Text style={styles.enterMobile}>{'Sign up'}</Text>
        <Text style={styles.verificationCode}>
          {'Enter your mobile number to send verification code'}
        </Text>
      </View>
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
      <View>
        <CoreButton
          buttonLabel="Confirm"
          onPress={() => {
            navigation.navigate('onBoardingStack', {
              screen: 'confirmMobile',
              params: {phoneNumber: number},
            });
          }}
          buttonBodyStyle={styles.confirmButton}
          buttonType="primary"
          disabled={number.length !== 10}></CoreButton>
      </View>
    </View>
  );
};

export default EnterMobile;
