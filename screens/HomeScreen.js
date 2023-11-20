
// HomeScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/header/Header'; 

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Header title="MealMate" />
    
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default HomeScreen;

