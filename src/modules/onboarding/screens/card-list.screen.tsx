import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {CoreButton, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {styles} from '../styles/card-list.styles';

export interface SignUpMainProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<{
    params: {
      accountNumber: string;
    };
  }>;
}

const CardList = (props: SignUpMainProps) => {
  console.log(
    '>>>props.route.params.accountNumber',
    props.route.params.accountNumber,
  );

  return (
    <View>
      <Header navigation={navigationRef}></Header>
      <View style={styles.container}>
        <View style={styles.verify}>
          <Text style={styles.verifyCard}>{'Card List'}</Text>
        </View>
        <View style={styles.digitCode}>
          <Text style={styles.sendCode}>
            {'Enter your credit card info in the box below '}
          </Text>
        </View>
      </View>
      <View style={[styles.inputTextLayout]}>
        <Image
          source={require('../../../assets/mastercard-icon.png')}
          style={styles.image}
        />
        <View style={styles.accountView}>
          <Text style={styles.accountNumber}>{'Account '+'**************'+props.route.params.accountNumber.substring(15)}</Text>
        </View>
      </View>
      <View style={styles.verifyButton}>
        <CoreButton
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {
              screen: 'addCard',
            });
          }}
          buttonLabel="Continue"
          buttonType="secondary"
          buttonBodyStyle={styles.continueButton}></CoreButton>
      </View>
    </View>
  );
};

export default CardList;
