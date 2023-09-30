import { NavigationContainer } from '@react-navigation/native';
import {Stack} from '../../../navigation/root.navigation';
import OnBoardingScreen from '../screens/onBoarding.screen';
import SignUpMain from '../screens/sign-up-main.screen';

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
