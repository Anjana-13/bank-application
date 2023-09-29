import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DashBoardStack from "../modules/dashBoard/navigation/dashBoard.navigation";
import OnBoardingStack from "../modules/onboarding/navigation/onBoarding.navigation";

export const Stack = createNativeStackNavigator();

const routes = [
    {
        name:'dashBoardStack',
        component: DashBoardStack,
    },
    {
        name: 'onBoardingStack',
        component: OnBoardingStack,
    },

];

const Root = ()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="onBoardingStack">
                {routes?.map(route=>{
                    return (
                        <Stack.Screen
                        key={route.name}
                        name={route.name}
                        component={route.component}
                        options={{headerShown:false}}
                        />
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Root;