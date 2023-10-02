import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {CoreButton, CoreIcon, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from '../styles/add-personal-info.styles';

export interface AddPersonalInfoProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddPersonalInfo = (props: AddPersonalInfoProps) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigationRef} />
      <View style={styles.layout}>
        <Text style={styles.personalInfo}>
          {'Add your personal information'}
        </Text>
        <Text style={styles.verificationCode}>
          {'Enter your personal information as per your ID document'}
        </Text>
        </View>
    </View>
  );
};

export default AddPersonalInfo;
