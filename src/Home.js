import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
  
const Home = () => {
 
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Panggil API</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'}
})