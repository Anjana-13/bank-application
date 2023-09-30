import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 270,
    width: 400,
    alignSelf: 'center',
  },
  imageView: {
    paddingVertical: 10,
  },
  createAccountText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  createAccountView: {
    alignSelf: 'center',
    paddingTop: 20,
  },
  coinPay: {
    alignSelf: 'center',
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  coinPayDescription: {
    fontSize: 15,
    textAlign: 'center',
    color: '#363434',
  },
  buttons: {
    paddingVertical: 30,
  },
  loginButton: {
    marginTop: 18,
  },
  terms: {
    alignSelf: 'center',
    marginTop: 50,
  },
  termsText: {
    color: '#000000'
  },
});
