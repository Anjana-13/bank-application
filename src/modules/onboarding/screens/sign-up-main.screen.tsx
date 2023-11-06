import {View, Text, Image} from 'react-native';
import Header from '../../../components/header/header';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/sign-up-main.styles';
import CoreButton from '../../../components/button/CoreButton';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface SignUpMainProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignUpMain = (props: SignUpMainProps) => {
    
  return (
    <View style={styles.container}>
      <Header navigation={navigationRef} />
      <View>
        <View style={styles.imageView}>
          <Image
            source={require('../../../assets/sign-up.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.createAccountView}>
          <Text style={styles.createAccountText}>
            Create your CoinPay Account
          </Text>
        </View>
        <View style={styles.coinPay}>
          <Text style={styles.coinPayDescription}>
            CoinPay is a powerful tool that allows you to easily send, receive,
            and track all your transactions.
          </Text>
        </View>
        <View style={styles.buttons}>
          <CoreButton
            buttonLabel="Sign Up"
            buttonType="primary"
            onPress={() =>
              props.navigation.navigate('onBoardingStack', {screen: 'signUpVerify'})
            }></CoreButton>
          <CoreButton
            buttonLabel="Login in"
            buttonType="secondary"
            // onPress={()=> props.navigation.navigate('onBoardingStack', {screen: 'logIn'})}
            onPress={()=> props.navigation.navigate('dashBoardStack', {screen: 'dashBoardScreen'})}
            buttonBodyStyle={styles.loginButton}></CoreButton>
        </View>
        <View style={styles.terms}>
          <Text style={styles.termsText}>Terms and Conditions apply</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpMain;
