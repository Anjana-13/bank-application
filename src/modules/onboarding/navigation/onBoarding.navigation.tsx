import {Stack} from '../../../navigation/root.navigation';
import OnBoardingScreen from '../screens/onBoarding.screen';

const OnBoardingStack = () => {
  const route = [
    {
      name: 'onBoardingScreen',
      component: OnBoardingScreen,
    },
  ];
  return (
    <Stack.Navigator initialRouteName="initial">
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
