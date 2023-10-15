import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1
    },
    layout: {
        paddingVertical: 20,
        paddingHorizontal: 20,
      },
      addCard: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
      },
      verificationCode: {
        marginTop: 10,
        color: '#000000',
        fontSize: 15,
      },
      textHeading: {
        paddingTop: 20,
      },
      subHeading: {
        color: 'black',
      },
      verifyButton: {
        marginTop: 100,
      },
      calendarLayout: {
        borderColor: '#304FFE',
        height: 58,
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingTop: 5,
        marginTop: 10,
      },
      calendarPlaceHolder:{
        color:'#4d4d4f',
        paddingHorizontal: 4,
        marginTop: 12,
      },
      calendarSelected:{
        color:'#000000',
        paddingHorizontal: 3,
        marginTop: 12,
      }
})