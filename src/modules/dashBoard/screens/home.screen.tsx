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

  const categoryList = [{
    id: '1',
    icon: 'paper-plane-outline',
    title: 'Send',
    color: '#304ffe',
  },
  {
    id: '2',
    icon: 'add-circle-outline',
    title: 'Receive',
    color: '#f0872b',
  },
  {
    id: '3',
    icon: 'business-outline',
    title: 'Bank',
    color: '#178f35',
  },
];

const categoryRenderItem = ({item}) => (
  <View style={styles.item1}>
    <TouchableOpacity>
    <View style={[styles.circle1]}>
      <CoreIcon name={item.icon} size={25} color={item.color} />
    </View>
    <Text style={styles.title1}>{item.title}</Text>
    </TouchableOpacity>
  </View>
);

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
      <View style={styles.divider}>
        
      <FlatList
          data={categoryList}
          renderItem={categoryRenderItem}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Home;