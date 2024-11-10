
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'

import Profile from './Profile';
import RestaurantMenu from './screens/ResturantMenu';
import MenuQT from './screens/MenuQt';
;

import OrderPage from './screens/OderPage';


const Tab2 = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>

 
    <Tab.Screen  
    
    options={{
        tabBarIcon:()=>{
            return <Icon  name='home' size={30} color='red'/>
        }
    }}

    name="Profile" component={Profile} />
    <Tab.Screen name="ResturantMenu" component={RestaurantMenu} /> 
    <Tab.Screen name="MenuQT" component={MenuQT} /> 
    <Tab.Screen name="OrderPage" component={OrderPage} /> 
    




</Tab.Navigator>
  )
}

export default Tab2