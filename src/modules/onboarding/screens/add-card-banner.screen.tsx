import {Text, View, Image} from 'react-native';
import {CoreButton, Header} from '../../../components';
import {navigationRef} from '../../../utils';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from '../styles/add-card-banner.styles';

export interface PinSetupProps {
  navigation: NavigationProp<ParamListBase>;
}

const AddCardBanner = (props: PinSetupProps) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigationRef} />
      <View style={styles.imageView}>
        <Image
          source={require('../../../assets/add-card-banner.png')}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.congratsText}>Let's add your card</Text>
        <Text style={styles.congratsDescription}>
          Experience the power of financial organization with our platform
        </Text>
      </View>
      <View>
        <CoreButton
          buttonLabel={'+ Add your card'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {screen: 'addCard'});
          }}
          buttonBodyStyle={styles.continueButton}
          buttonType="primary"></CoreButton>
      </View>
    </View>
  );
};

export default AddCardBanner;
