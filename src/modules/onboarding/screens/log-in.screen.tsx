import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {CoreButton, CoreIcon, Header, CoreTextInput} from '../../../components';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/log-in.styles';
import {useEffect, useState} from 'react';
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

const LogIn = (props: EnterMobileProps) => {
  console.log(props?.route?.params?.isSignUp);
  const [number, onChangeNumber] = useState('');
  const [password, onPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const forgotPassword = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.mobile}>
        <Text style={styles.enterMobile}>
          {'Log in to Coinpay'}
        </Text>
        <Text style={styles.verificationCode}>
          {'Enter your Mobile number and Password'}
        </Text>
        <View style={styles.phoneAndPassword}>
          <Text style={styles.mobileNumber}>Mobile Number</Text>
          <CoreTextInput
            onChangeFunction={value => onChangeNumber(value)}
            value={number}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        <Text style={styles.mobileNumber}>Password</Text>
        <View>
          <CoreIcon
            name="lock-closed-outline"
            size={20}
            color="#4d4d4f"
            iconStyle={styles.lockClosedIcon}
          />
          <CoreTextInput
            onChangeFunction={value => onPassword(value)}
            value={password}
            placeholder="Password"
            maxLength={10}
            secureTextEntry={showPassword ? true : false}
            autoCapitalize="none"
            extraStyle={styles.extraStyleForPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <CoreIcon
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={25}
              color="#4d4d4f"
              iconStyle={styles.passwordIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={forgotPassword}>
              <Text style={styles.resend}>Forgot password?</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View>
        <CoreButton
          buttonLabel={'Log in'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {
              screen: 'addPersonalInfo',
            });
          }}
          buttonBodyStyle={styles.confirmButton}
          buttonType="primary"
          disabled={number.length !== 10 || password.length < 8}></CoreButton>
      </View>
    </View>
  );
};

export default LogIn;
