import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {CoreButton, CoreTextInput, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from '../styles/welcome.styles';

export interface PinSetupProps {
  navigation: NavigationProp<ParamListBase>;
}

const Welcome = (props: PinSetupProps) => {
  return (
    <View style={styles.container}>
        <Header navigation={navigationRef} />
      <View style={styles.imageView}>
        <Image
          source={require('../../../assets/welcome.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.welcomeText}>Congratulations!</Text>
        <Text style={styles.welcomeDescription}>We are happy to have you. It's time to send, receive and track the expenses</Text>
      </View>
      <View>
        <CoreButton
          buttonLabel={'Continue'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {screen: 'logIn'})
          }}
          buttonBodyStyle={styles.continueButton}
          buttonType="primary"></CoreButton>
      </View>
    </View>
  );
};

export default Welcome;
