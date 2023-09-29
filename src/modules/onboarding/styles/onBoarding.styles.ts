import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    image: {
      height: 300,
      width: 300,
    },
    doneButton: {
      width: 200,
      height: 50,
      marginBottom: 40,
      marginRight: 90,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#086dac',
      padding: 10,
      borderRadius: 10,
    },
    skipButton: {
      width: 100,
      height: 50,
      marginBottom: 1400,
      marginLeft:300,
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    doneButtonText: {
      fontSize: 20,
      color: '#fff',
      fontFamily: 'serif'
    },
    skipButtonText: {
      fontSize: 20,
      color: '#086dac',
      fontFamily:'serif'
    },
    subTitle:{fontSize: 30, color: '#086dac', fontFamily:'serif'}
  });