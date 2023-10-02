import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {CoreButton, CoreIcon, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/enter-mobile.styles';
import {useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export interface EnterMobileProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{
    params: {
      isSignUp: boolean;
    };
  }>;
}

const EnterMobile = (props: EnterMobileProps) => {
  console.log(props?.route?.params?.isSignUp);
  const [number, onChangeNumber] = useState('');
  const [password, onPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.container}>
      <Header navigation={navigationRef} />
      <View style={styles.mobile}>
        <Text style={styles.enterMobile}>
          {props?.route?.params?.isSignUp ? 'Create an Account' : 'Log in'}
        </Text>
        <Text style={styles.verificationCode}>
          {'Enter your Mobile number and Password'}
        </Text>
        <View style={styles.phoneAndPassword}>
          <Text style={styles.mobileNumber}>Mobile Number</Text>
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
        <Text style={styles.mobileNumber}>Password</Text>
        <View style={[styles.inputTextLayout, {paddingLeft: 25}]}>
          <CoreIcon
            name="lock-closed-outline"
            size={20}
            color="#4d4d4f"
            iconStyle={styles.lockClosedIcon}
          />
          <TextInput
            style={styles.input}
            onChangeText={value => onPassword(value)}
            value={password}
            placeholder="Password"
            placeholderTextColor={'#4d4d4f'}
            maxLength={20}
            secureTextEntry={showPassword ? true : false}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <CoreIcon
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={25}
              color="#4d4d4f"
              iconStyle={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <CoreButton
          buttonLabel={props?.route?.params?.isSignUp ? 'Sign up' : 'Log in'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {
              screen: 'confirmMobile',
              params: {phoneNumber: number},
            });
          }}
          buttonBodyStyle={styles.confirmButton}
          buttonType="primary"
          disabled={number.length !== 10 || password.length < 8}></CoreButton>
      </View>
    </View>
  );
};

export default EnterMobile;
