import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

const Home= () => {
    return (
      <SafeAreaView style={styles.container}>
       <Text>Home</Text>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})

export default Home;