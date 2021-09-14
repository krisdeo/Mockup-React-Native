import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerActions} from '@react-navigation/native';

const Header = ({navigationParameter}) => {
  return (
    // Pakai flex direction kolom utnuk membuat layout ke arah vertical
    <View style={styles.headerContainer}>
      <ImageBackground
        source={require('../assets/bg-image.png')}
        style={styles.backgroundImage}
        imageStyle={styles.imageStyle}
        resizeMode="cover">
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              navigationParameter.dispatch(DrawerActions.openDrawer());
            }}>
            <Icon name="table-rows" size={24} color="white" />
          </TouchableOpacity>

          <Icon name="settings" size={24} color="white" />
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.title}>MPOS MKP KIT</Text>
          <Text style={styles.subtitle}>MKP KIT</Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchBox}>
              <Icon name="search" size={24} />
              <TextInput
                style={styles.inputText}
                placeholder="Search"
                placeholderTextColor="#003f5c"
                editable={false}
              />
            </View>
            <Icon name="qr-code" size={50} color="white" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    // flexDirection: 'column',
    padding: 20,
    height: '30%',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    width: '100%',
    height: 300,
  },
  imageStyle: {
    marginLeft: 70,
  },
  headerContent: {
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBox: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#f0f0f0',
    // justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    marginBottom: 20,
    marginTop: 30,
    paddingLeft: 10,
  },
  inputText: {
    height: 50,
    color: 'grey',
    borderRadius: 10,
    marginLeft: 5,
  },
  iconSearch: {
    marginLeft: 20,
  },
});
