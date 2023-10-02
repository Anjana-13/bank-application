import {Text, TextInput, View, TouchableOpacity} from 'react-native';
import {CoreButton, CoreIcon, CoreTextInput, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from '../styles/add-personal-info.styles';

export interface AddPersonalInfoProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddPersonalInfo = (props: AddPersonalInfoProps) => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [calendar, setCalendar] = useState('');

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
        <View style={styles.textHeading}>
          <Text style={styles.subHeading}>Full Name</Text>
          <CoreTextInput
            onChangeFunction={value => setFullName(value)}
            value={fullName}
            placeholder="John Dawn"
          />
        </View>
        <View style={styles.textHeading}>
          <Text style={styles.subHeading}>User Name</Text>
          <CoreTextInput
            onChangeFunction={value => setUserName(value)}
            value={userName}
            placeholder="@JohnDawn"
          />
        </View>
        <View style={styles.textHeading}>
          <Text style={styles.subHeading}>Email ID</Text>
          <CoreTextInput
            onChangeFunction={value => setEmail(value)}
            value={email}
            placeholder="JohnDawn@gmail.com"
            keyboardType='email-address'
          />
        </View>
        <View style={styles.textHeading}>
          <Text style={styles.subHeading}>Calendar</Text>
          <CoreTextInput
            onChangeFunction={value => setCalendar(value)}
            value={calendar}
            placeholder="DD/MM/YYYY"
          />
        </View>
        </View>
        <View>
        <CoreButton
          buttonLabel={'Continue'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {
              screen: 'addPersonalInfo',
            });
          }}
          buttonBodyStyle={styles.continueButton}
          buttonType="primary"
          ></CoreButton>
      </View>
    </View>
  );
};

export default AddPersonalInfo;
