import React, {useState, useEffect} from 'react'
import { StyleSheet, View, FlatList, Text, Image} from 'react-native'
import { getFirestore } from "firebase/firestore"
import { collection, query ,getDocs,} from "firebase/firestore";

const db = getFirestore();

const AuthorScreen = () => {
    const [data, setData] = useState()

    useEffect(() => {
        getData()
    }, [])

    async function getData(){
        let s = []
        const q = query(collection(db, "kutuphane"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            s = [...s,doc.data()];
        });
        setData(s)
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => item.ISBN}
                renderItem={({ item }) =>(
                    <View style = {styles.fltlist} key = {item.ISBN}> 
                        <Image style={styles.listImage} source={{uri: item.YazarKapak}}/>
                        <View style={styles.center}>
                            <Text>{item.Yazar}</Text>
                        </View>
                    </View>
                ) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        width: '80%',
        flexDirection: 'column',
        paddingHorizontal: 10,
        marginBottom: 20
    },
    listImage: {
        flex: 2,
        resizeMode: 'stretch'
    },
    fltlist:{
        borderColor: 'silver',
        borderWidth: 3,
        padding: 10,
        borderWidth: 1,
        borderColor: 'silver',
        borderRadius: 10,
        height: 300,
        width: '50%',
    },
    center:{
        alignItems: 'center'
    }
})

export default AuthorScreen