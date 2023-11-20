
import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Logo from '../../assets/meal-mate-logo.png'

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../../assets/meal-mate-logo.png')} style={styles.logo} />
      <Text style={styles.appName}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // headerContainer: {
  //   paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight, 
    
  // },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50, 
  },
  logo: {
    width: 50, 
    height: 50, 
    resizeMode: 'contain',
  },
  appName: {
    marginLeft: 10, 
    fontSize: 20, 
    fontWeight: 'bold',
   
  },
});

export default Header;
