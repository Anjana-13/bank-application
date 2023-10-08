import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 270,
    width: 400,
    alignSelf: 'center',
  },
  imageView: {
    paddingVertical: 40,
  },
  congratsText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  congratsDescription: {
    fontSize: 15,
    textAlign: 'center',
    color: '#363434',
    marginTop: 10,
    paddingHorizontal: 20
  },
  continueButton: {
    marginTop: 200,
  },
});
