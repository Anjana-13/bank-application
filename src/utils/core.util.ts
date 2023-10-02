import {createNavigationContainerRef} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

export const navigationRef = createNavigationContainerRef<any>();

export const resetStack = (
  stackName: string,
  screenName: string,
  params?: any,
) => {
  navigationRef.reset({
    index: 0,
    routes: [
      {name: stackName, params: {screenName: screenName, params: params}},
    ],
  });
};

export const showBottomToast = (message: string) => {
  Toast.showWithGravity(message, Toast.LONG, Toast.TOP);
};
