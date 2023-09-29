import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

const RecentActivity= () => {
    return (
      <SafeAreaView style={styles.container}>
       <Text>Recent Activity</Text>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})

export default RecentActivity;