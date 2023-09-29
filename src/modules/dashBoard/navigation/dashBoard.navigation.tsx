import { Stack } from "../../../navigation/root.navigation"
import DashBoardScreen from "../screens/dashBoard.screen";

const DashBoardStack= () => {

    const route = [
        {
            name: 'dashBoardScreen',
            component: DashBoardScreen,
        },
    ]
    return(
        <Stack.Navigator
        initialRouteName="dashBoardScreen">
            {route?.map(route =>{
                return(
                    <Stack.Screen
                    key={route.name}
                    name={route.name}
                    component={route.component}
                    />
                )
            })}

        </Stack.Navigator>
    )
};

export default DashBoardStack;  