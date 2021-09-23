import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  BackHandler,
  Alert,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Appbar} from 'react-native-paper';
import HomePage from './HomePage';
import App from './App';
// ..
const HistoryPenjualan = ({navigation}) => {
  const dummyData = [
    {
      id: 1,
      code: 'SUKSES',
      title: 'BRIZI',
      number: 'A2P-2000012345',
      fee: '1.000',
      currCode: 'Rp. ',
      date: '2021-01-01 00:00:00',
    },
    {
      id: 2,
      code: 'SUKSES',
      title: 'E-Money',
      number: 'A2P-2000012345',
      fee: '1,00',
      currCode: 'Rp. ',
      date: '2021-01-01 00:00:00',
    },
    {
      id: 3,
      code: 'PENDING',
      title: 'QRIS',
      number: 'A2P-2000012345',
      fee: '1.000',
      currCode: 'Rp. ',
      date: '2021-01-01 00:00:00',
    },
    {
      id: 4,
      code: 'PENDING',
      title: 'BRIZI',
      number: 'A2P-2000012345',
      fee: '1.000',
      currCode: 'Rp. ',
      date: '2021-01-01 00:00:00',
    },
    {
      id: 5,
      code: 'PENDING',
      title: 'E-Money',
      number: 'A2P-2000012345',
      fee: '1.000',
      currCode: 'Rp. ',
      date: '2021-01-01 00:00:00',
    },
    {
      id: 6,
      code: 'PENDING',
      title: 'BRIZI',
      number: 'A2P-2000012345',
      fee: '1.000',
      currCode: 'Rp. ',
      date: '2021-01-01 00:00:00',
    },
    {
      id: 7,
      code: 'SUKSES',
      title: 'QRIS',
      number: 'A2P-2000012345',
      fee: '1.000',
      currCode: 'Rp. ',
      date: '2021-01-01 00:00:00',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.title}>
          <View style={styles.titleHeader}>
            <Text style={styles.titleBank}>{item.title}</Text>
            <Text style={styles.codeStyle}>({item.code})</Text>
          </View>
          <Text style={styles.number}>{item.number}</Text>
          <Text />
          <Text style={styles.number}>
            {item.currCode}
            {item.fee}
          </Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="arrow-forward" size={30} />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Appbar.Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Appbar.Content title="History Penjualan" />
        <Icon name="tune" size={30} color="white" />
      </Appbar.Header>

      <View style={styles.container}>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default HistoryPenjualan;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    height: 1000,
  },
  number: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: '300',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    flexDirection: 'column',
    width: '70%',
    marginLeft: 5,
    padding: 20,
  },
  titleHeader: {
    flexDirection: 'row',
    // marginStart: 20,
  },
  titleBank: {
    marginRight: 20,
    color: 'blue',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: -10,
    width: '20%',
  },
  codeStyle: {
    color: 'green',
  },
  codeStyle2: {
    color: 'yellow',
  },
});
