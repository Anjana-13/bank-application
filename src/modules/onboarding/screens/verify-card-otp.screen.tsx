import {
    NavigationProp,
    ParamListBase,
    RouteProp,
  } from '@react-navigation/native';
  import {Text, TouchableOpacity, View} from 'react-native';
  import {CoreButton, Header} from '../../../components';
  import {navigationRef, showBottomToast} from '../../../utils';
  import {useEffect, useRef, useState} from 'react';
  import OTPTextView from 'react-native-otp-textinput';
  import Clipboard from '@react-native-clipboard/clipboard';
import { styles } from '../styles/verify-card-otp.styles';
  
  export interface SignUpMainProps {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<{
      params: {
        emailId: any;
      };
    }>;
  }
  
  const VerifyCardOtp = (props: SignUpMainProps) => {
    const [otpInput, setOtpInput] = useState<string>('');
    const [countDown, setCountDown] = useState(0);
    const code = '2233';
  
    const input = useRef<OTPTextView>(null);
  
    useEffect(() => {
      if (countDown > 0) {
        const countInterval = setInterval(() => {
          setCountDown(countDown - 1);
        }, 1000);
        return () => clearInterval(countInterval);
      }
    }, [countDown]);
  
    const onSubmit = () => {
      if (otpInput && otpInput === code) {
        showBottomToast('Verified successfully!');
        props.navigation.navigate('onBoardingStack', {screen: 'enterMobile', params: {
          isSignUp : true
        }})
      } else {
        showBottomToast('Wrong Code, Please try again');
        setTimeout(() => input.current?.clear(), 1000);
      }
    };
  
    const onResend = () => {
      setCountDown(20);
      input.current?.clear();
    };
  
    const handleCellTextChange = async (text: string, i: number) => {
      if (i === 0) {
        const clippedText = await Clipboard.getString();
        if (clippedText.slice(0, 1) === text) {
          input.current?.setValue(clippedText, true);
        }
      }
    };
    return (
      <View>
        <Header navigation={navigationRef}></Header>
        <View style={styles.container}>
          <View style={styles.mobile}>
            <Text style={styles.enterMobile}>{'Verify your card'}</Text>
          </View>
          <View style={styles.digitCode}>
            <Text style={styles.sendCode}>
              {'We send 4 digits code to ' + props.route.params.emailId}
            </Text>
          </View>
        </View>
        <View style={styles.otpInput}>
          <OTPTextView
            ref={input}
            containerStyle={styles.textInputContainer}
            handleTextChange={setOtpInput}
            handleCellTextChange={handleCellTextChange}
            inputCount={4}
            keyboardType="numeric"
            tintColor={'#304FFE'}
          />
        </View>
        <View style={styles.resendContainer}>
          {countDown === 0 ? (
            <>
              <Text style={styles.notReceive}>
                {'Did not receive the code?  '}
              </Text>
              <TouchableOpacity onPress={onResend}>
                <Text style={styles.resend}>Resend</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.tryAgain}>{'Try again in 00:' + countDown}</Text>
          )}
        </View>
        <View style={styles.verifyButton}>
          <CoreButton
            onPress={onSubmit}
            buttonLabel="Verify"
            buttonType="primary"
            disabled={otpInput.length !== 4}></CoreButton>
        </View>
      </View>
    );
  };
  
  export default VerifyCardOtp;
  