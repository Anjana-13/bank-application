import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {styles} from '../../styles/operation/chooseRecipient.styles';

export interface ChooseRecipientProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{
    params: {
      isSignUp: boolean;
    };
  }>;
}

const chooseRecipient = (props: ChooseRecipientProps) => {
  return <View style={styles.container}></View>;
};

export default chooseRecipient;
