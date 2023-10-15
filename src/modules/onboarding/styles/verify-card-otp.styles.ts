import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    verify: {
        paddingTop: 20,
      },
      verifyCard: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
      },
      digitCode: {
        paddingTop: 10,
      },
      sendCode: {
        color: '#000000'
      },
      notReceive:{
        color: 'black'
      },
      resend: {
        color:'#304FFE'
      },
      resendContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10
      },
      verifyButton: {
        marginTop: 370,
      },
      otpInput:{
        marginTop: 70
      },
      textInputContainer: {
        marginBottom: 20,
        marginHorizontal: 55,
      },
      tryAgain:{color: 'black'}
})