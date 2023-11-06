import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {CoreButton, CoreIcon, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/dashBoard.styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
    <Tab.Navigator initialRouteName="home"
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#000000',
      tabBarShowLabel: false,
      // tabBarStyle: styles.bottomTabStyle,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = '';
        let routeName = route.name;

        if (routeName === 'home') {
          iconName = focused ? 'home' : 'home-outline';

        } else if (routeName === 'recentActivity') {
          iconName = focused ? 'time' : 'time-outline';
        } 
        else if (routeName === 'userProfile') {
          iconName = focused ? "person-circle" : "person-circle-outline";
        }
        return <CoreIcon name={iconName} size={size} color={focused ? '#304FFE' : 'black'} />
      },
    })}>
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
