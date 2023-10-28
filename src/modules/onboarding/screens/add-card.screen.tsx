import {Text, View, ScrollView} from 'react-native';
import {CoreButton, CoreTextInput, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {useState} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from '../styles/add-card.styles';

export interface AddCardProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddCard = (props: AddCardProps) => {
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [email, setEmail] = useState('');

  const formatCardNumber = (number: string) => {
    number = number.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    return number.replace(/[^\d ]/g, '');
  };

  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigationRef} />
      <View style={styles.layout}>
        <Text style={styles.addCard}>{'Add card'}</Text>
        <Text style={styles.verificationCode}>
          {'Enter your credit card info into the box below.'}
        </Text>
        <View style={styles.textHeading}>
          <Text style={styles.subHeading}>Account Holder Name</Text>
          <CoreTextInput
            onChangeFunction={value => setFullName(value)}
            value={fullName}
            placeholder="John Dawn"
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
          <Text style={styles.subHeading}>Card Number</Text>
          <CoreTextInput
            onChangeFunction={value => setCardNumber(formatCardNumber(value))}
            value={cardNumber}
            placeholder="1234 5678 9010 1122"
            maxLength={19}
          />
        </View>
      </View>
      <View>
        <CoreButton
          buttonLabel={'Verify'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {
              screen: 'verifyCardOtp',
              params: {
                emailId: email,
                accountNumber : cardNumber
              },
            });
          }}
          buttonBodyStyle={styles.verifyButton}
          buttonType="primary"
          disabled={fullName.length !== 4}></CoreButton>
      </View>
    </ScrollView>
  );
};

export default AddCard;
