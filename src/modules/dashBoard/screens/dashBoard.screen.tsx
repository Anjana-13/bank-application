import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {CoreButton, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/dashBoard.styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnBoardingScreen from '../../onboarding/screens/onBoarding.screen';
import Home from './home.screen';
import RecentActivity from './recent-activity.screen';
import UserProfile from './profile.screen';

export interface SignUpMainProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{
    params: {
      accountNumber: string;
    };
  }>;
}

const DashBoard = (props: SignUpMainProps) => {
  const tabScreenRoute = [
    {
      name: 'home',
      component: Home,
    },
    {
      name: 'recentActivity',
      component: RecentActivity,
    },
    {
      name: 'userProfile',
      component: UserProfile,
    },
  ];

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="home">
      {tabScreenRoute?.map(route => {
        return (
          <Tab.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            options={{headerShown: false}}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default DashBoard;
