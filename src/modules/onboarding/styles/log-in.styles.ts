import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mobile: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  enterMobile: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  verificationCode: {
    marginTop: 10,
    color: '#000000',
    fontSize: 15,
  },
  input: {
    color: '#000000',
  },
  confirmButton: {
    marginTop: 320,
  },
  phoneAndPassword: {
    paddingVertical: 20,
  },
  mobileNumber: {
    color: 'black',
  },
  inputTextLayout: {
    borderColor: '#304FFE',
    height: 58,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingTop: 5,
    marginTop: 10,
  },
  lockClosedIcon: {position: 'absolute', top: 28, left: 7},
  passwordIcon: {position: 'absolute', right: 10, bottom: 14},
  extraStyleForPassword: {
    paddingLeft:27,
  },
  resend: {
    marginTop: 12,
    color:'#304FFE'
  },
});
