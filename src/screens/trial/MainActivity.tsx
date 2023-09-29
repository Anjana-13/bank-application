import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet } from 'react-native';
// import Home from '../screens/home';
import RecentActivity from './RecentActivity';
import Home from './Home';

//Screen names
const homeName = "Home";
const RecentActivitys = "Recent Activity";

const Tab = createBottomTabNavigator();

const MainActivity = () => {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#000000',
            tabBarShowLabel: false,
            tabBarStyle: styles.bottomTabStyle,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === RecentActivitys) {
                iconName = focused ? 'time' : 'time-outline';
              }
  
              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}>
  
          <Tab.Screen name={homeName} component={Home} options={{
            // headerLeft: () => <Header />,
            headerTitle: () => (""),
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'transparent',
            },
            // headerRight: () => (
            //   <HeaderIcon name="menu-outline"/>
            // ),
          }} />
  
  
          <Tab.Screen name={RecentActivitys} component={RecentActivity} options={{
            // headerLeft: () => <HeaderIcon name="chevron-back-outline" />,
            headerTitleStyle: styles.headerTitle,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: 'transparent',
            },
            // headerRight: () => (
            //   <HeaderIcon name="search-outline"/>
            // ),
          }}
          />
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    welcomeText:{
      fontSize:17,
      color:'#6e6e6e'
    },
    userName: {
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 5,
      color: '#000000'
    },
    bottomTabStyle: {
      padding: 5, 
      height: 50, 
      borderTopWidth: 0, 
      elevation: 0
    },
    headerIcon: {
      paddingHorizontal: 20
    },
    headerTitle: {
      fontWeight: 'bold',
    }
  })
  
  export default MainActivity;