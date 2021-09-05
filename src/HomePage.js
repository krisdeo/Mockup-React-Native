import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
 
 
const HomePage = () => {
  return (
    <View>
       <Text style={styles.container}>HomePage</Text>
    </View>
  );
};
 
export default HomePage;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        textAlign: 'center'},
    textTitle: {textAlign: 'center'}
})