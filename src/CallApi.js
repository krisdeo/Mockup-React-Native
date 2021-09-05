import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const dataApi = {
            username       : "edcdemo",
            password       : "demo123",
            deviceid       : "PE48204T61648"
}

console.log('data object : ', dataApi);
console.log('data object : ', JSON.stringify(dataApi));

const CallApi = () => {
    useEffect(() => {
        fetch('http://sandbox.mkpmobile.com:10080/api/apps2paympos/apps2pay/public/api/mlogin',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataApi)
        })
        .then(response => response.json())
        .then(json => console.log('post response : ', json))
    }, []); 
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Panggil API</Text>
        </View>
    )
}

export default CallApi

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'}
})