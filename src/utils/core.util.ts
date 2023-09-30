import { createNavigationContainerRef } from "@react-navigation/native"

export const navigationRef =createNavigationContainerRef<any>();


export const resetStack = (
    stackName: string,
    screenName: string,
    params?: any,
) => {
    navigationRef.reset({
        index:0,
        routes: [{name: stackName, params:{screenName:screenName, params:params}}]
    })
}