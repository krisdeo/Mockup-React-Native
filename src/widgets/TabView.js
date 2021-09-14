import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PaketPage from '../PaketPage';
import TiketKitPage from '../TiketKit';
import TiketKitKendaraanPage from '../TikeKitKendaraanPage';

export default function TabView() {
  const [paketTab, setPaketTab] = useState(true);
  const [tiketKitTab, setTiketKitTab] = useState(false);
  const [tiketKendaraanTab, setTiketKendaraanTab] = useState(false);

  return (
    <View style={styles.container}>
      {/* Bagian tab */}
      <View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewStyle}>
          <View style={styles.tabItem(paketTab)}>
            <TouchableOpacity
              onPress={() => {
                setPaketTab(true);
                setTiketKitTab(false);
                setTiketKendaraanTab(false);
              }}>
              <Text style={styles.titleTab(paketTab)}>PAKET</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabItem(tiketKitTab)}>
            <TouchableOpacity
              onPress={() => {
                setPaketTab(false);
                setTiketKitTab(true);
                setTiketKendaraanTab(false);
              }}>
              <Text style={styles.titleTab(tiketKitTab)}>TIKET KIT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabItem(tiketKendaraanTab)}>
            <TouchableOpacity
              onPress={() => {
                setPaketTab(false);
                setTiketKitTab(false);
                setTiketKendaraanTab(true);
              }}>
              <Text style={styles.titleTab(tiketKendaraanTab)}>
                TIKET KENDARAAN
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Bagian View Conditional Render*/}
      {paketTab ? (
        <PaketPage />
      ) : tiketKitTab ? (
        <TiketKitPage />
      ) : (
        <TiketKitKendaraanPage />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '200%',
    backgroundColor: 'white',
    marginBottom: 50,
  },
  scrollViewStyle: {
    padding: 10,
  },
  tabItem: isActive => ({
    padding: 10,
    borderBottomColor: isActive ? '#16307d' : '',
    borderBottomWidth: isActive ? 4 : 0,
    marginHorizontal: 20,
  }),
  titleTab: isActive => ({
    fontSize: 16,
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? '#16307d' : 'grey',
  }),
});
