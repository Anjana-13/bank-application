import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from '../styles/home.styles';
import {CoreButton, CoreIcon} from '../../../components';
const Home = () => {
  const data = [
    {id: '1', icon: 'card', title: 'Spending', amount: '$10'},
    {id: '2', icon: 'cash', title: 'Income', amount: '$20'},
    {id: '3', icon: 'newspaper', title: 'Bills', amount: '$30'},
    {id: '4', icon: 'logo-usd', title: 'Savings', amount: '$40'},
  ];

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <CoreIcon
        name={item.icon}
        iconStyle={styles.icon}
        size={30}
        color={'red'}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.wrapper}>
        <View style={styles.topContainer}></View>
        <View style={styles.bottomContainer}>
          <View style={styles.transactionTitleView}>
            <Text style={styles.transactionTitle}>Transaction</Text>
            <TouchableOpacity>
              <CoreIcon
                name="arrow-forward-outline"
                size={30}
                color="#212721"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default Home;
