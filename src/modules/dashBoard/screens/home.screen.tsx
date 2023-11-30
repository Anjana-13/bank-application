import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {styles} from '../styles/home.styles';
import {CoreIcon} from '../../../components';
const Home = () => {
  const transactionData = [
    {
      id: '1',
      icon: 'card-outline',
      title: 'Spending',
      amount: '$10',
      color: '#304ffe',
      backgroundColor: '#b0baf5',
    },
    {
      id: '2',
      icon: 'cash-outline',
      title: 'Income',
      amount: '$20',
      color: '#178f35',
      backgroundColor: '#adf7c0',
    },
    {
      id: '3',
      icon: 'newspaper-outline',
      title: 'Bills',
      amount: '$30',
      color: '#edc602',
      backgroundColor: '#f5f2c1',
    },
    {
      id: '4',
      icon: 'logo-usd',
      title: 'Savings',
      amount: '$40',
      color: '#f0872b',
      backgroundColor: '#f7be8d',
    },
  ];

  const transactionRenderItem = ({item}) => (
    <View style={styles.item}>
      <View style={[styles.circle, {backgroundColor: item.backgroundColor}]}>
        <CoreIcon name={item.icon} size={25} color={item.color} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
    </View>
  );

  const transactionList = () => {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={transactionData}
          renderItem={transactionRenderItem}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    );
  };

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
          {transactionList()}
        </View>
      </View>
      <View style={styles.divider}></View>
    </View>
  );
};

export default Home;
//<ion-icon name="paper-plane-outline"></ion-icon>
//<ion-icon name="add-circle-outline"></ion-icon>
//<ion-icon name="business-outline"></ion-icon>
