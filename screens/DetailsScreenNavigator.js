import React from 'react'
import BooksScreen from './BooksScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthorScreen from './AuthorsScreen';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './DetailsScreen';
const Drawer = createDrawerNavigator();

function HomeScreen() {
    return (
     
    <Drawer.Navigator initialRouteName="Profile">
        <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  
    );
}

export default HomeScreen

