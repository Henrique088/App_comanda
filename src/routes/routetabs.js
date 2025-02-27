import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pedido from '../pedido';
import Home from '../home';
import Produto from '../produto';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useEffect} from 'react';

import Config from '../config';

const Tab = createBottomTabNavigator();

export default function RoutesTabs(){

    useEffect(() => {     
        Config.ValidaProduto = false
    }, []);

   
    return(
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Home} options={{headerShown:false,                
                                                tabBarIcon: ({ color, size }) => (
                                                <Icon name="home" color={color} size={size}  /> ),}} />

            <Tab.Screen name="Pedido" component={Pedido} options={{
                                headerShown: true,
                                title: 'Comanda',
                                tabBarLabel:'Comanda',
                                tabBarIcon: ({ color, size }) => (
                                <Icon name="reorder" color={color} size={size}  /> ), }} />
            
            <Tab.Screen name="Produto" component={Produto}   options={{
                                headerShown: true,
                                title: 'Lista de Produtos',
                                tabBarLabel:'Produto',                               
                                tabBarIcon: ({ color, size }) => (
                                <Icon name="bookmark" color={color} size={size} /> ), }} />  
            </Tab.Navigator>
    )

}    