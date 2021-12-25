import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function DetailsScreen({route}) {
    const {Adı, Yazar, Sayfa, Kapak, Sum, Yıl } = route.params;
    return (
        <View style= {styles.container}>
            <Image style= {styles.img} source = {{uri: Kapak}}/>

            <View style={styles.content}>
                <Text>{Adı}</Text>
                <Text>Yazar: {Yazar}</Text>
                <Text>Sayfa Sayısı: {Sayfa}</Text>
                <Text>Basım Yılı: {Yıl}</Text>
                <Text>{Sum}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img: {
        flex: 3,
        resizeMode: 'stretch'
    },
    content:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10
    }
  
})