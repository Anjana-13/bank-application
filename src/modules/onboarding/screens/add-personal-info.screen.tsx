import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CoreButton, CoreTextInput, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from '../styles/add-personal-info.styles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export interface AddPersonalInfoProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddPersonalInfo = (props: AddPersonalInfoProps) => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [calendarSelected, setCalendarSelected] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const selectedDate = moment(date).utc().format('MM/DD/YYYY');

  const calendarOpen = () => {
    return (
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
            setCalendarSelected(true);
          }}>
          <Text style={calendarSelected ? styles.calendarSelected : styles.calendarPlaceHolder}>
            {calendarSelected ? selectedDate : 'MM/DD/YYYY'}
          </Text>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
              setCalendarSelected(false);
            }}
          />
        </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
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
            keyboardType="email-address"
          />
        </View>
        <View style={styles.textHeading}>
          <Text style={styles.subHeading}>Calendar</Text>
          <View style={[styles.calendarLayout]}>{calendarOpen()}</View>
        </View>
      </View>
      <View>
        <CoreButton
          buttonLabel={'Continue'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {
              screen: 'pinSetup',
            });
          }}
          buttonBodyStyle={styles.continueButton}
          buttonType="primary"></CoreButton>
      </View>
    </ScrollView>
  );
};

export default AddPersonalInfo;
