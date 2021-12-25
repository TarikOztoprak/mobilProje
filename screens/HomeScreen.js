import React from 'react'
import BooksScreen from './BooksScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthorScreen from './AuthorsScreen';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreen (){
    return(
        <Drawer.Navigator options={{ headerShown: false }} initialRouteName="Books">
            <Drawer.Screen  name="Books" component={BooksScreen} />
            <Drawer.Screen  name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarLabel: 'Books', headerShown: false, tabBarIcon: ({ color, size }) => (
                    <Entypo name="book" color={color} size={size} />),
            }} name="Drawer" component={DrawerScreen} />
            <Tab.Screen options={{
                tabBarLabel: 'Authors', tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="pen-nib" color={color} size={size} />
                )
            }} name="Authors" component={AuthorScreen} />
        
        </Tab.Navigator>
    );
}

export default HomeScreen

