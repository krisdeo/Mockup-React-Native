import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabView from './widgets/TabView';
import Header from './widgets/Header';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigationParameter={navigation} />
      <TabView />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: 'red',
    backgroundColor: '#16307d',
  },
});
