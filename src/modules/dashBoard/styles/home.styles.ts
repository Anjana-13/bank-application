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
    borderRadius:10
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'red',
    marginRight: 'auto', // Push amount to the right
  },
  amount: {
    fontSize: 16,
    color:'red',
  },
})