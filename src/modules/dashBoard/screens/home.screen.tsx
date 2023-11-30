import {View, Text} from 'react-native';
import {styles} from '../styles/home.styles';
const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <View style={styles.topContainer}></View>
        <View style={styles.bottomContainer}></View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default Home;
