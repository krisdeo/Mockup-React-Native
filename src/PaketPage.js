import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PaketPage() {
  const dummyData = [
    {
      id: 1,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 2,
      code: 'PE',
      title: 'Paket Eko',
      description: 'Tiket Masuk Kit, Tiket Masuk Kit 2',
      fee: '1,00',
    },
    {
      id: 3,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 4,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 5,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 6,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 7,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 8,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 9,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
    {
      id: 10,
      code: 'PH',
      title: 'Paket Hemat',
      description: 'Tiket Masuk Kit',
      fee: '1.000',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.code}</Text>
        </View>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.decription}</Text>
          <Text>{item.fee}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon name="arrow-drop-up" size={50} />
          <Text>0</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 50,
  },
  title: {
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: -10,
  },
});
