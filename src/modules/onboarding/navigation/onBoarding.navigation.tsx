import { NavigationContainer } from '@react-navigation/native';
import {Stack} from '../../../navigation/root.navigation';
import OnBoardingScreen from '../screens/onBoarding.screen';
import SignUpMain from '../screens/sign-up-main.screen';
import EnterMobile from '../screens/enter-mobile.screen';
import ConfirmMobile from '../screens/confirm-mobile.screen';
import SignUpVerify from '../screens/sign-up-verify.screen';
import AddPersonalInfo from '../screens/add-personal-info.screen';
import PinSetup from '../screens/pin-setup.screen';
import Welcome from '../screens/welcome.screen';
import LogIn from '../screens/log-in.screen';
import AddCardBanner from '../screens/add-card-banner.screen';

const OnBoardingStack = () => {
  const route = [
    {
      name: 'onBoardingScreen',
      component: OnBoardingScreen,
    },
    {
      name: 'signUpMain',
      component: SignUpMain,
    },
    {
      name : 'signUpVerify',
      component: SignUpVerify
    },
    {
      name: 'enterMobile',
      component: EnterMobile,
    },
    {
      name: 'confirmMobile',
      component: ConfirmMobile,
    },
    {
      name: 'addPersonalInfo',
      component: AddPersonalInfo,
    },
    {
      name: 'pinSetup',
      component: PinSetup,
    },
    {
      name: 'welcome',
      component: Welcome,
    },
    {
      name: 'logIn',
      component: LogIn,
    },
    {
      name: 'addCardBanner',
      component: AddCardBanner,
    },
  ];
  return (
  <Stack.Navigator  initialRouteName="onBoardingScreen">
    {route?.map(route => {
      return (
        <Stack.Screen
        key={route.name}
        name={route.name}
        component={route.component}
        options={{headerShown: false}}
        />
        );
      })}
    </Stack.Navigator>
  );
};

export default OnBoardingStack;
