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
import { styles } from '../styles/pin-setup.styles';

  
  export interface PinSetupProps {
    navigation: NavigationProp<ParamListBase>;
  }
  
  const PinSetup = (props: PinSetupProps) => {
    return(
        <View style={styles.container}>
          <Header navigation={navigationRef} />
            <Text style={styles.pinSetup}>Pin setup!</Text>
            <View>
        <CoreButton
          buttonLabel={'Continue'}
          onPress={() => {
            props.navigation.navigate('onBoardingStack', {
              screen: 'welcome',
            });
          }}
          buttonBodyStyle={styles.confirmButton}
          buttonType="primary"></CoreButton>
      </View>
        </View>
    )
  }

  export default PinSetup;