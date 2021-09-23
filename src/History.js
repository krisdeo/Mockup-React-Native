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
import {color} from 'react-native-reanimated';
// ..
const History = ({navigation}) => {
  return (
    <View>
      <Appbar.Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={40} color="white" />
        </TouchableOpacity>
        <Appbar.Content title="History" />
        <Icon name="fiber-smart-record" size={30} color="white" />
        <Icon
          name="local-print-shop"
          size={30}
          color="white"
          style={{marginLeft: 20}}
        />
      </Appbar.Header>

      <View style={styles.rowTop}>
        <View style={styles.rowTopLeft}>
          <View style={styles.topStyle}>
            <Text style={styles.title}>Laporan Penjualan</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="calendar-today" size={20} color={'grey'} />
              <Text style={styles.date}>24-08-2021</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.periodeBtn}>
          <Text style={styles.textButton}>Periode Laporan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowItem}>
        <Text style={styles.textItem}>Total Transaksi</Text>
        <Text style={styles.textItemAmount}>103,00</Text>
      </View>
      <View style={{borderTopWidth: 1, borderColor: 'grey', marginTop: 20}} />
      <View style={styles.rowItem}>
        <Text style={styles.textItem}>Total Tunai</Text>
        <Text style={styles.textItemAmount}>1,00</Text>
      </View>
      <View style={{borderTopWidth: 1, borderColor: 'grey', marginTop: 20}} />
      <View style={styles.rowItem}>
        <Text style={styles.textItem}>Total QRIS</Text>
        <Text style={styles.textItemAmount}>1,00</Text>
      </View>
      <View style={{borderTopWidth: 1, borderColor: 'grey', marginTop: 20}} />
      <View style={styles.rowItem}>
        <Text style={styles.textItem}>Total E-Money</Text>
        <Text style={styles.textItemAmount}>100</Text>
      </View>
      <View style={{borderTopWidth: 1, borderColor: 'grey', marginTop: 20}} />
      <View style={styles.rowItem}>
        <Text style={styles.textItem}>Total BRIZZI</Text>
        <Text style={styles.textItemAmount}>100</Text>
      </View>
      <View style={{borderTopWidth: 1, borderColor: 'grey', marginTop: 20}} />
      <View style={styles.rowItem}>
        <View style={styles.columnAlign}>
          <Text style={styles.textItem}>
            Jumlah Transaksi (dari 24-08-2021)
          </Text>
          <Text style={styles.textItemAmount}>4</Text>
        </View>
        <Icon name="arrow-forward" size={30} color="grey" />
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  topStyle: {
    flexDirection: 'column',
    marginStart: 20,
    marginTop: 20,
    // justifyContent: 'space-between',
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  columnAlign: {
    flexDirection: 'column',
  },
  date: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
  },
  textItem: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 17,
  },
  textItemAmount: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 17,
  },
  button: {
    alignItems: 'center',
  },
  rowTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  rowTopLeft: {
    alignItems: 'center',
  },
  periodeBtn: {
    width: 200,
    height: 70,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue',
    lineHeight: 5,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    marginLeft: 10,
  },
  loginText: {
    color: 'white',
  },
  textButton: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
