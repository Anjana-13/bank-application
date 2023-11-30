import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
   justifyContent:'center',
   alignItems:'center'
  },
  topContainer: {
    flex:35,
    backgroundColor:'#304FFE',
    position: 'relative',
  },
  bottomContainer: {
    flex:65,
    position: 'relative',
  },
  divider:{
    backgroundColor:'white',
    height:80,
    position: 'absolute',
    top:210,
    left:40,
    right:50,
    borderRadius:15,
  },
  wrapper:{
    flexDirection:'column',
    width:'100%',
    height:'100%',
  },
})