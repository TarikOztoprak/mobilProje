import React from 'react'
import BooksScreen from './BooksScreen';
import ProfileScreen from './ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthorScreen from './AuthorsScreen';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import DetailsScreen from './DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarLabel: 'Books', tabBarIcon: ({ color, size }) => (
                    <Entypo name="book" color={color} size={size} />),
            }} name="Books" component={BooksScreen} />
            <Tab.Screen options={{
                tabBarLabel: 'Authors', tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="pen-nib" color={color} size={size} />
                )
            }} name="Authors" component={AuthorScreen} />
            <Tab.Screen options={{               
                tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="pinterest-square" color={color} size={size} />
                )
            }} name="Profile" component={ProfileScreen} />
        
        </Tab.Navigator>
    );
}

export default HomeScreen

