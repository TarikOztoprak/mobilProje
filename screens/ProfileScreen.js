import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { auth } from '../firebase'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  PushNotification  from '../Notification'

const ProfileScreen = () => {

    const navigation = useNavigation()

    const handleSingOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
             <PushNotification></PushNotification>
            <TouchableOpacity style={styles.button} onPress={handleSingOut}>
                <Text style={styles.buttonText}>Çıkış Yap</Text>
            </TouchableOpacity>
            <Text>Email: {auth.currentUser?.email}</Text>
           
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})