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
      accountNumber:{
        color: 'black'
      },
      inputTextLayout: {
        borderColor:'transparent',
        backgroundColor:'white',
        height: 58,
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems:'center',
        paddingLeft: 10
      },
      accountView:{
        marginLeft: 13,
      },
      image: {
        height: 30,
        width: 40,
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
      tryAgain:{color: 'black'},
      continueButton:{"marginTop": 15}
})