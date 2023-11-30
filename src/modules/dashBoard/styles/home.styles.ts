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
    marginHorizontal:20,
  },
  divider:{
    backgroundColor:'white',
    height:80,
    position: 'absolute',
    top:210,
    left:20,
    right:20,
    borderRadius:15,
  },
  wrapper:{
    flexDirection:'column',
    width:'100%',
    height:'100%',
  },
  listContainer:{
    backgroundColor: 'white',
    flex:1,
    marginVertical:10,
    borderRadius:10,
    
  },
  transactionTitleView:{
    height:30,
    marginTop:50,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  transactionTitle:{
    color:'black',
    fontSize:20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal:15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 17,
    marginLeft:13,
    color:'black',
    marginRight: 'auto',
  },
  amount: {
    fontSize: 16,
    color:'red',
  },
  circle:{
    width:45,
    height:45,
    borderRadius:25,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
    
  }
})