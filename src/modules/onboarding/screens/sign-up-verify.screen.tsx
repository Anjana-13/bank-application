import {Text, View} from 'react-native';
import {CoreButton, CoreTextInput, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from '../styles/sign-up-verify.styles';

export interface SignUpVerifyProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignUpVerify = ({navigation}: SignUpVerifyProps) => {
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.container}>
      <Header navigation={navigationRef} />
      <View style={styles.mobile}>
        <Text style={styles.signUp}>{'Sign up'}</Text>
        <Text style={styles.verificationCode}>
          {'Enter your mobile number to send verification code'}
        </Text>
        <View style={styles.inputComponent}>
          <CoreTextInput
            onChangeFunction={value => onChangeNumber(value)}
            value={number}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
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

export default SignUpVerify;
