import {Text, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {styles} from '../styles/onBoarding.styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface OnboardingProps {
  navigation: NavigationProp<ParamListBase>;
}

const Done = ({...props}) => {
  return (
    <TouchableOpacity style={styles.doneButton} {...props}>
      <Text style={styles.doneButtonText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const Skip = ({...props}) => {
  return (
    <TouchableOpacity style={styles.skipButton} {...props}>
      <Text style={styles.skipButtonText}>Skip</Text>
    </TouchableOpacity>
  );
};

const OnBoardingScreen = ({navigation}: OnboardingProps) => {
  return (
    <Onboarding
      onDone={() =>
        navigation.navigate('onBoardingStack', {screen: 'signUpMain'})
      }
      DoneButtonComponent={Done}
      subTitleStyles={styles.subTitle}
      showNext={false}
      SkipButtonComponent={Skip}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../assets/onBoarding-1.png')}
              style={styles.image}
            />
          ),
          title: '',
          subtitle: 'Trusted by millions of people, part of one part',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../assets/onBoarding-2.png')}
              style={styles.image}
            />
          ),
          title: '',
          subtitle: 'Receive Money from anywhere in the World',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
